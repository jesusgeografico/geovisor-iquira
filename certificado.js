// Certificado de uso del suelo por predio, generado a partir de los datos del geovisor.
// Usa las funciones que index.html publica en window.GV.
(function(){
const GV=window.GV, N=GV.N, fmt=GV.fmt, esc=GV.esc;
const MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const pad=n=>String(n).padStart(2,'0');

// ---------- Mapa de localización en SVG ----------
function anillos(g){
  if(!g) return [];
  if(g.type==='Polygon') return [g.coordinates];
  if(g.type==='MultiPolygon') return g.coordinates;
  return [];
}
function bboxGeom(g){
  let a=[Infinity,Infinity,-Infinity,-Infinity];
  anillos(g).forEach(p=>p.forEach(r=>r.forEach(([x,y])=>{if(x<a[0])a[0]=x;if(y<a[1])a[1]=y;if(x>a[2])a[2]=x;if(y>a[3])a[3]=y;})));
  return a;
}
const corta=(a,b)=>a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1];
function mapaSVG(predio,zonas,colorZona,vecinos){
  const W=640,H=330,pb=bboxGeom(predio.geometry);
  const cx=(pb[0]+pb[2])/2, cy=(pb[1]+pb[3])/2, k=Math.cos(cy*Math.PI/180);
  let w=(pb[2]-pb[0])*k, h=pb[3]-pb[1];
  const lado=Math.max(w*H/W,h)*2.2||0.0005;           // alto visible: el predio cabe con contexto alrededor
  const hy=lado/2, wx=hy*W/H/k;
  const caja=[cx-wx,cy-hy,cx+wx,cy+hy];
  const X=x=>((x-caja[0])/(caja[2]-caja[0])*W).toFixed(1), Y=y=>((caja[3]-y)/(caja[3]-caja[1])*H).toFixed(1);
  const path=g=>anillos(g).map(p=>p.map(r=>'M'+r.map(([x,y])=>X(x)+' '+Y(y)).join('L')+'Z').join('')).join('');
  let s=`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Localización del predio"><defs><clipPath id="cl"><rect width="${W}" height="${H}"/></clipPath></defs><rect width="${W}" height="${H}" fill="#f3f4f1"/><g clip-path="url(#cl)">`;
  zonas.filter(f=>corta(bboxGeom(f.geometry),caja)).forEach(f=>{s+=`<path d="${path(f.geometry)}" fill="${colorZona(f)}" fill-opacity=".55" stroke="#666" stroke-width=".4"/>`;});
  vecinos.filter(f=>f!==predio&&corta(bboxGeom(f.geometry),caja)).forEach(f=>{s+=`<path d="${path(f.geometry)}" fill="none" stroke="#444" stroke-width=".6" stroke-opacity=".7"/>`;});
  s+=`<path d="${path(predio.geometry)}" fill="#d81b60" fill-opacity=".18" stroke="#d81b60" stroke-width="2.6"/></g>`;
  // escala gráfica
  const mPorPx=(caja[2]-caja[0])*111320*k/W;
  const op=[5,10,20,25,50,100,200,250,500,1000,2000,5000];let m=op.find(v=>v/mPorPx>=90)||op[op.length-1];
  const px=m/mPorPx;
  s+=`<g font-family="Arial" font-size="11" fill="#222"><rect x="10" y="${H-30}" width="${px+20}" height="22" fill="#fff" fill-opacity=".85"/><path d="M20 ${H-14}h${px}" stroke="#222" stroke-width="2"/><path d="M20 ${H-18}v8M${20+px} ${H-18}v8" stroke="#222"/><text x="${22+px/2}" y="${H-19}" text-anchor="middle">${m>=1000?m/1000+' km':m+' m'}</text>`;
  s+=`<g transform="translate(${W-28},28)"><circle r="16" fill="#fff" fill-opacity=".85"/><path d="M0 -12L6 6L0 2L-6 6Z" fill="#222"/><text y="-16" text-anchor="middle" font-weight="bold">N</text></g></g></svg>`;
  return s;
}
function centroide(g){const b=bboxGeom(g);return [(b[1]+b[3])/2,(b[0]+b[2])/2];}

// ---------- Bloques de contenido ----------
const pct=v=>v.toFixed(1).replace('.',',')+' %';
function listaPct(l,vacio){
  if(!l||!l.length) return `<p class="c-vacio">${vacio}</p>`;
  return `<table class="c-t"><tr><th>Categoría</th><th class="n">% del predio</th></tr>${l.map(([v,p])=>`<tr><td>${esc(v)}</td><td class="n">${pct(p)}</td></tr>`).join('')}</table>`;
}
function bloqueRegimen(titulo,r,etqK){
  if(!r) return '';
  let h=`<div class="c-reg"><h4>${esc(titulo)}</h4>`;
  if(r.pre) h+=`<p>${esc(r.pre)}</p>`;
  if(r.texto) h+=`<p>${esc(r.texto)}</p>`;
  else h+=`<table class="c-t c-r"><tr><th>Uso principal</th><td>${esc(r.p)}</td></tr><tr><th>Complementario</th><td>${esc(r.c)}</td></tr><tr><th>${etqK}</th><td>${esc(r.k)}</td></tr><tr><th>Prohibido</th><td>${esc(r.x)}</td></tr></table>`;
  return h+`<p class="c-src">Fuente: EOT Íquira, documento de Formulación – ${esc(r.fuente)}</p></div>`;
}
function amenazas(p){
  const fila=(n,l)=>`<tr><td>${n}</td><td>${l&&l.length?l.map(([c,v])=>`${esc(c)} (${pct(v)})`).join(', '):'No se identifica'}</td></tr>`;
  return `<table class="c-t"><tr><th>Fenómeno</th><th>Condición de amenaza en el predio</th></tr>${fila('Movimiento en masa',p.mm)}${fila('Inundación',p.inu)}${fila('Avenida torrencial',p.avt)}</table>
  <p class="c-src">Fuente: Componente General del EOT – áreas con condición de amenaza (G_Area_Condicion_Amenza_MM, _INU y _AVT).</p>`;
}

// ---------- Certificado ----------
let cont=null;
function asegurarContenedor(){
  if(cont) return cont;
  cont=document.createElement('div');cont.id='cert';cont.hidden=true;
  cont.setAttribute('role','dialog');cont.setAttribute('aria-modal','true');cont.setAttribute('aria-label','Certificado de uso del suelo');
  cont.innerHTML=`<div class="c-barra"><span>Vista previa del certificado. Complete los datos del solicitante antes de imprimir.</span><button id="cImprimir">Imprimir o guardar PDF</button><button id="cCerrar">Cerrar</button></div><div class="c-hoja" id="cHoja"></div>`;
  document.body.appendChild(cont);
  cont.querySelector('#cCerrar').onclick=cerrar;
  cont.querySelector('#cImprimir').onclick=()=>window.print();
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!cont.hidden)cerrar();});
  return cont;
}
function cerrar(){cont.hidden=true;document.body.classList.remove('imprimiendo');}

function abrir(tipo,feature){
  const p=feature.properties, urbano=tipo==='urbano';
  const hoy=new Date(), fechaLarga=`${hoy.getDate()} de ${MESES[hoy.getMonth()]} de ${hoy.getFullYear()}`;
  const c=asegurarContenedor();
  const cod=String(p.codigo);
  const consecutivo=`CUS-${hoy.getFullYear()}${pad(hoy.getMonth()+1)}${pad(hoy.getDate())}-${cod.slice(5,7)}${cod.slice(13,21)}`;
  const [lat,lon]=centroide(feature.geometry);

  // Mapa de localización
  const svg=urbano
    ? mapaSVG(feature,D.urbano.features.filter(f=>f.properties.sector===p.sector),f=>GV.COL_U[f.properties.uso]||'#ccc',D.construcciones?D.construcciones.features:D.pred_urb.features)
    : mapaSVG(feature,D.rural.features,f=>GV.COL_R[f.properties.uso]||'#ccc',D.pred_rur.features);

  // Usos
  let usosH,regH='';
  if(urbano){
    usosH=p.usos&&p.usos.length
      ? `<table class="c-t"><tr><th>Uso del suelo (EOT)</th><th class="n">Área en el predio</th><th class="n">%</th></tr>${p.usos.map(([u,m2,pc])=>`<tr><td>${esc(u)}${u===p.uso?' <b>(predominante)</b>':''}</td><td class="n">${fmt(m2)} m²</td><td class="n">${pct(pc)}</td></tr>`).join('')}</table>${p.mixto?'<p class="c-nota">El predio presenta usos mixtos: dos o más usos ocupan cada uno al menos el 10 % de su área.</p>':''}`
      : '<p class="c-vacio">El predio no se cruza con las zonas de uso del suelo urbano del EOT. Se recomienda verificar su localización frente al perímetro urbano y la cartografía de formulación.</p>';
    (p.usos||[]).filter(x=>x[2]>=10||x[0]===p.uso).forEach(([u])=>{regH+=bloqueRegimen(u,GV.regUrbano({uso:u,sector:p.sector}),'Condicionado');});
  }else{
    usosH=p.zonas&&p.zonas.length
      ? `<table class="c-t"><tr><th>Zona de uso del suelo rural (EOT)</th><th class="n">Área en el predio</th><th class="n">%</th></tr>${p.zonas.map(([u,ha,pc],i)=>`<tr><td>${esc(u)}${i===0?' <b>(predominante)</b>':''}</td><td class="n">${fmt(ha)} ha</td><td class="n">${pct(pc)}</td></tr>`).join('')}</table>`
      : '<p class="c-vacio">El predio no se cruza con la reglamentación del suelo rural del EOT (puede estar fuera del límite municipal).</p>';
    (p.zonas||[]).filter((x,i)=>i===0||x[2]>=10).forEach(([u])=>{regH+=bloqueRegimen(u,GV.regRural({uso:u}),'Restringido');});
  }

  // Norma urbanística de centro poblado
  const cpN=urbano&&p.sector!=='Cabecera municipal'&&N.cp[p.sector]?`<p><b>Norma urbanística del centro poblado:</b> ${esc(N.cp[p.sector].norma)} <span class="c-src">(${esc(N.cp[p.sector].fuente)})</span></p>`:'';
  const trat=urbano?`<h3>6. Tratamiento urbanístico</h3>${p.sector==='Cabecera municipal'?listaPct(p.trat,'No se identifica tratamiento urbanístico en la cartografía del EOT para este predio.'):'<p class="c-vacio">La cartografía de tratamientos urbanísticos del EOT cubre la cabecera municipal.</p>'}${cpN}`:'';
  const nAm=urbano?7:6, nObs=urbano?8:7;

  c.querySelector('#cHoja').innerHTML=`
  <article class="c-doc">
    <header class="c-enc">
      <div><p class="c-ent">MUNICIPIO DE ÍQUIRA – DEPARTAMENTO DEL HUILA</p><p class="c-dep">Secretaría de Planeación e Infraestructura · Esquema de Ordenamiento Territorial</p></div>
      <div class="c-num"><span>No. ${esc(consecutivo)}</span><span>${fechaLarga}</span></div>
    </header>
    <h1>CERTIFICADO DE USO DEL SUELO</h1>
    <p class="c-intro">Con base en la cartografía oficial del Esquema de Ordenamiento Territorial (EOT) del municipio de Íquira y en el documento de Formulación, se certifica la siguiente información para el predio identificado:</p>

    <h3>1. Datos del solicitante</h3>
    <table class="c-t c-f">
      <tr><th>Nombre o razón social</th><td><input aria-label="Nombre del solicitante" placeholder="Escriba el nombre"></td></tr>
      <tr><th>Documento de identidad / NIT</th><td><input aria-label="Documento del solicitante" placeholder="Escriba el número"></td></tr>
      <tr><th>Dirección o nombre del predio</th><td><input aria-label="Dirección del predio" placeholder="Opcional"></td></tr>
      <tr><th>No. de radicado</th><td><input aria-label="Número de radicado" placeholder="Opcional"></td></tr>
    </table>

    <h3>2. Identificación del predio</h3>
    <table class="c-t c-f">
      <tr><th>Número predial (nuevo)</th><td class="mono">${esc(p.codigo)}</td></tr>
      ${p.cod_ant?`<tr><th>Número predial anterior</th><td class="mono">${esc(p.cod_ant)}</td></tr>`:''}
      <tr><th>Zona catastral</th><td>${urbano?'Urbana':'Rural'}</td></tr>
      <tr><th>${urbano?'Sector':'Vereda (EOT)'}</th><td>${esc(urbano?p.sector:(p.vereda||'Fuera del límite municipal del EOT'))}</td></tr>
      <tr><th>Área del terreno (cartográfica)</th><td>${urbano?fmt(p.m2)+' m²':fmt(p.ha)+' ha ('+fmt(p.ha*10000)+' m²)'}</td></tr>
      <tr><th>Coordenadas aproximadas (centro)</th><td>${lat.toFixed(6)}, ${lon.toFixed(6)} (WGS84)</td></tr>
    </table>

    <h3>3. Localización</h3>
    <figure class="c-mapa">${svg}<figcaption>Predio resaltado en magenta sobre ${urbano?'las zonas de uso del suelo urbano':'la reglamentación del suelo rural'}${urbano?' y las construcciones de la cartografía base':' y los predios vecinos del catastro'}.</figcaption></figure>

    <h3>4. Clasificación del suelo</h3>
    ${listaPct(p.clas,'No se identifica clasificación del suelo para este predio.')}

    <h3>5. Uso del suelo asignado por el EOT</h3>
    ${usosH}
    ${regH?`<p class="c-sub">Régimen de usos aplicable</p>${regH}`:''}

    ${trat}

    <h3>${nAm}. Condición de amenaza</h3>
    ${amenazas(p)}

    <h3>${nObs}. Observaciones</h3>
    <textarea aria-label="Observaciones" rows="3" placeholder="Escriba aquí observaciones adicionales (opcional)"></textarea>

    <p class="c-legal">El presente certificado se expide con base en la información cartográfica del EOT (GDB EOT_IQUIRA_02) y en el documento de Formulación. Las áreas y porcentajes son cartográficos y pueden diferir de los registrados en el título o en el catastro. Este documento no constituye licencia urbanística ni autoriza actuaciones sobre el predio; cualquier intervención debe tramitarse ante la autoridad competente. Su validez requiere la firma del funcionario responsable.</p>

    <div class="c-firma"><div class="c-linea"></div><p>Firma del funcionario responsable</p><p>Secretaría de Planeación e Infraestructura – Municipio de Íquira</p></div>
    <p class="c-pie">Generado desde el Geovisor de Uso del Suelo de Íquira el ${fechaLarga} a las ${pad(hoy.getHours())}:${pad(hoy.getMinutes())}.</p>
  </article>`;
  c.hidden=false;
  c.querySelector('#cHoja').scrollTop=0;
  c.querySelector('#cHoja input').focus();
}
window.Certificado={abrir};
})();
