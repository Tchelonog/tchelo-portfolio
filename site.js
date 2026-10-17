
const projects=[
['onu','ONU','Campanha'],
['gm-oleo','General Motors — Óleo','Anúncio'],
['hilux','Toyota Hilux','Campanha integrada'],
['hopi-hari','Hopi Hari — Escada Rolante','Anúncio'],
['corolla','Toyota Corolla 2.0','Campanha integrada'],
['droga-raia','Droga Raia — Disfunção Erétil','Anúncio'],
['sw4','Toyota SW4','Campanha integrada'],
['coco-de-passarinho','Cocô de passarinho','Campanha'],
['3m','3M — Surround Sound','Campanha impressa']
];

function cover(p){
  return `<div class="cover"><img src="assets/${p[0]}-capa.jpg" alt="" onerror="this.outerHTML='<div class=placeholder>${p[1]}</div>'"></div>`;
}

const grid=document.getElementById('grid');

if(grid){
  grid.innerHTML=projects.map(p=>`
    <a class="tile" href="projeto.html?id=${p[0]}">
      ${cover(p)}
      <div class="meta">${p[1]}<small>${p[2]}</small></div>
    </a>
  `).join('');
}

const project=document.getElementById('project');

if(project){
  const slug=new URLSearchParams(location.search).get('id');
  const i=projects.findIndex(p=>p[0]===slug);

  if(i<0){
    project.innerHTML='<p>Projeto não encontrado. <a href="index.html">Voltar</a></p>';
  }else{
    const p=projects[i];
    const next=projects[(i+1)%projects.length];

    document.title=p[1]+' — Tchelo Nogueira';

    let media='';

    if(slug==='onu'){
      media=`
        <div class="media">
          <video controls preload="metadata" src="assets/UN%202009.mp4"></video>
        </div>
        <div class="media"><img src="assets/UNARM%20copy.jpg" alt="ONU — UNARM"></div>
        <div class="media"><img src="assets/UNDO%20copy.jpg" alt="ONU — UNDO"></div>
        <div class="media"><img src="assets/UNLOAD%20copy.jpg" alt="ONU — UNLOAD"></div>
        <div class="media"><img src="assets/UNTIE%20copy.jpg" alt="ONU — UNTIE"></div>
      `;
    }else{
      media=`
        <div class="media">
          <img src="assets/${slug}-01.jpg" alt="${p[1]}" onerror="this.outerHTML='<span>Espaço reservado para a primeira peça da campanha</span>'">
        </div>
        <div class="media">
          <img src="assets/${slug}-02.jpg" alt="${p[1]}" onerror="this.parentElement.remove()">
        </div>
        <div class="media">
          <video controls src="assets/${slug}.mp4" onerror="this.parentElement.remove()"></video>
        </div>
      `;
    }

    project.innerHTML=`
      <section class="project-head">
        <h1>${p[1]}</h1>
        <p>${p[2]}</p>
      </section>
      <div class="project-media">${media}</div>
      <nav class="next">
        <a href="index.html">← TODOS OS TRABALHOS</a>
        <a href="projeto.html?id=${next[0]}">PRÓXIMO PROJETO →</a>
      </nav>
    `;
  }
}
