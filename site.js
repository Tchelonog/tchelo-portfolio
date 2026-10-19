
const projects = [
  ['derdic', 'Derdic', 'Filme'],
  ['onu', 'ONU', 'Campanha'],
  ['gm-oleo', 'General Motors — Óleo', 'Anúncio'],
  ['hilux', 'Toyota Hilux', 'Campanha integrada'],
  ['hopi-hari', 'Hopi Hari — Escada Rolante', 'Anúncio'],
  ['corolla', 'Toyota Corolla 2.0', 'Campanha integrada'],
  ['droga-raia', 'Droga Raia — Disfunção Erétil', 'Anúncio'],
  ['sw4', 'Toyota SW4', 'Campanha integrada'],
  ['coco-de-passarinho', 'Cocô de passarinho', 'Campanha'],
  ['3m', '3M — Surround Sound', 'Campanha impressa']
];

// Escreva entre as aspas a linha de apresentação de cada projeto.
const descriptions = {
  'derdic': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'onu': 'Campanha para ONU.',
  'gm-oleo': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'hilux': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'hopi-hari': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'corolla': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'droga-raia': '',
  'sw4': '',
  'coco-de-passarinho': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  '3m': ''
};

function cover(p) {
  return `<div class="cover">
    <img src="assets/${p[0]}-capa.jpg" alt="${p[1]}"
      onerror="this.outerHTML='<div class=placeholder>${p[1]}</div>'">
  </div>`;
}

// Página inicial: 23 thumbnails na ordem numérica definida pelo portfólio.
// Somente trabalhos com páginas já criadas têm links ativos.
const thumbnails = [
  {
    "image": "assets/01%20hilux%20thumb%20copy.jpg",
    "title": "Toyota Hilux",
    "slug": "hilux"
  },
  {
    "image": "assets/02%20oleo%20thumb%20copy.jpg",
    "title": "General Motors — Óleo",
    "slug": "gm-oleo"
  },
  {
    "image": "assets/03%20derdic%20thumb%20copy.jpg",
    "title": "Derdic",
    "slug": "derdic"
  },
  {
    "image": "assets/04%20un%20thumb%20copy.jpg",
    "title": "ONU",
    "slug": "onu"
  },
  {
    "image": "assets/05%20coco%20thumb%20copy.jpg",
    "title": "Cocô de passarinho",
    "slug": "coco-de-passarinho"
  },
  {
    "image": "assets/06%20corolla%20thumb%20copy.jpg",
    "title": "Toyota Corolla",
    "slug": "corolla"
  },
  {
    "image": "assets/07%20escada%20thumb%20copy.jpg",
    "title": "Hopi Hari — Escada Rolante",
    "slug": "hopi-hari"
  },
  {
    "image": "assets/08%20metro%20thumb%20copy.jpg",
    "title": "Metrô",
    "slug": null
  },
  {
    "image": "assets/09%203m%20thumb%20copy.jpg",
    "title": "3M — Surround Sound",
    "slug": "3m"
  },
  {
    "image": "assets/10%20sw4%20thumb%20copy.jpg",
    "title": "Toyota SW4",
    "slug": "sw4"
  },
  {
    "image": "assets/11%20santoro%20thumb%20copy.jpg",
    "title": "Santoro",
    "slug": null
  },
  {
    "image": "assets/12%20presente%20thumb%20copy.jpg",
    "title": "Presente",
    "slug": null
  },
  {
    "image": "assets/13%20judeu%20thumb%20copy.jpg",
    "title": "Judeu",
    "slug": null
  },
  {
    "image": "assets/14%20raia%20thumb%20copy.jpg",
    "title": "Droga Raia",
    "slug": "droga-raia"
  },
  {
    "image": "assets/15%20walkman%20thumb%20copy.jpg",
    "title": "Walkman",
    "slug": null
  },
  {
    "image": "assets/16%20salompas%20thumb%20copy.jpg",
    "title": "Salompas",
    "slug": null
  },
  {
    "image": "assets/17%20maestro%20thumb%20copy.jpg",
    "title": "Maestro",
    "slug": null
  },
  {
    "image": "assets/18%20ciam%20thumb%20copy.jpg",
    "title": "CIAM",
    "slug": null
  },
  {
    "image": "assets/19%20bravia%20thumb%20copy.jpg",
    "title": "Bravia",
    "slug": null
  },
  {
    "image": "assets/20%20jimmy%20thumb%20copy.jpg",
    "title": "Jimmy",
    "slug": null
  },
  {
    "image": "assets/21%20banana%20thumb%20copy.jpg",
    "title": "Banana",
    "slug": null
  },
  {
    "image": "assets/22%20monkey%20thumb%20copy.jpg",
    "title": "Monkey",
    "slug": null
  },
  {
    "image": "assets/23%20nota%20escla%20thumb%20copy.jpg",
    "title": "Nota de esclarecimento",
    "slug": null
  }
];
const grid = document.getElementById('grid');
if (grid) {
  grid.innerHTML = thumbnails.map(item => {
    const image = `<div class="cover"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>`;
    return item.slug
      ? `<a class="tile" href="projeto.html?id=${item.slug}" aria-label="${item.title}">${image}</a>`
      : `<div class="tile" aria-label="${item.title}">${image}</div>`;
  }).join('');
}

// Página individual de cada projeto.
const project = document.getElementById('project');

if (project) {
  const slug = new URLSearchParams(location.search).get('id');
  const i = projects.findIndex(p => p[0] === slug);

  if (i < 0) {
    project.innerHTML = '<p>Projeto não encontrado. <a href="index.html">Voltar</a></p>';
  } else {
    const p = projects[i];
    const next = projects[(i + 1) % projects.length];

    document.title = p[1] + ' — Tchelo Nogueira';

    let media = '';

    if (slug === 'derdic') {
      media = `
        <div class="media video-with-play">
          <video preload="metadata" playsinline src="assets/derdic.mp4"></video>
          <button class="center-play" type="button" aria-label="Reproduzir vídeo">▶</button>
        </div>
      `;
    } else if (slug === 'onu') {
      media = `
        <div class="media video-with-play">
          <video preload="metadata" playsinline src="assets/UN%202009.mp4"></video>
          <button class="center-play" type="button" aria-label="Reproduzir vídeo">▶</button>
        </div>
        <div class="media">
          <img src="assets/UNARM%20copy.jpg" alt="ONU — UNARM">
        </div>
        <div class="media">
          <img src="assets/UNDO%20copy.jpg" alt="ONU — UNDO">
        </div>
        <div class="media">
          <img src="assets/UNLOAD%20copy.jpg" alt="ONU — UNLOAD">
        </div>
        <div class="media">
          <img src="assets/UNTIE%20copy.jpg" alt="ONU — UNTIE">
        </div>
      `;
    } else if (slug === 'hopi-hari') {
      media = `
        <div class="media"><img src="assets/HopiHari%20escada%20copy.jpg" alt="Hopi Hari — intervenção em escada rolante"></div>
        <div class="media video-with-play">
          <video preload="metadata" playsinline src="assets/hopy%20escada.mp4"></video>
          <button class="center-play" type="button" aria-label="Reproduzir vídeo ilustrativo">▶</button>
        </div>
      `;
    } else if (slug === 'corolla') {
      media = `
        <div class="media video-with-play">
          <video preload="metadata" playsinline src="assets/Corolla2010.mp4"></video>
          <button class="center-play" type="button" aria-label="Reproduzir vídeo">▶</button>
        </div>
        <div class="media"><img src="assets/an%20corolla%20copy1.jpg" alt="Toyota Corolla — anúncio 1"></div>
        <div class="media"><img src="assets/an%20corolla%20copy2.jpg" alt="Toyota Corolla — anúncio 2"></div>
      `;
    } else if (slug === 'coco-de-passarinho') {
      media = `
        <div class="media"><img src="assets/coco%20de%20passarinho%20ok%20new%20copy.jpg" alt="Cocô de passarinho — ação para lava-rápido"></div>
      `;
    } else if (slug === 'gm-oleo') {
      media = `
        <div class="media"><img src="assets/jornal-GM%20copy.jpg" alt="General Motors — Peças Genuínas GM"></div>
      `;
    } else if (slug === 'hilux') {
      media = `
        <div class="media video-with-play">
          <video preload="metadata" playsinline src="assets/hilux.mp4"></video>
          <button class="center-play" type="button" aria-label="Reproduzir vídeo">▶</button>
        </div>
        <div class="media"><img src="assets/ans hilux pasta new port copy2.jpg" alt="Toyota Hilux — anúncio 2"></div>
        <div class="media"><img src="assets/ans hilux pasta new port copy1.jpg" alt="Toyota Hilux — anúncio 1"></div>
        <div class="media"><img src="assets/ans hilux pasta new port copy3.jpg" alt="Toyota Hilux — anúncio 3"></div>
      `;
    } else {
      media = `
        <div class="media">
          <img src="assets/${slug}-01.jpg" alt="${p[1]}"
            onerror="this.outerHTML='<span>Espaço reservado para a primeira peça da campanha</span>'">
        </div>
        <div class="media">
          <img src="assets/${slug}-02.jpg" alt="${p[1]}"
            onerror="this.parentElement.remove()">
        </div>
        <div class="media">
          <video controls src="assets/${slug}.mp4"
            onerror="this.parentElement.remove()"></video>
        </div>
      `;
    }

    const description = descriptions[slug] || '';

    project.innerHTML = `
      <section class="project-head">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:400;line-height:1.5;margin:0;padding:0;">
          ${description}
        </p>
      </section>
      <div class="project-media">${media}</div>
      <nav class="next">
        <a href="index.html">← HOMEPAGE</a>
        <a href="projeto.html?id=${next[0]}">PRÓXIMO PROJETO →</a>
      </nav>
    `;
  }
}

// Botão central para iniciar o vídeo; controles aparecem durante a reprodução.
if (project) {
  const playButton = project.querySelector('.center-play');
  const featuredVideo = project.querySelector('.video-with-play video');
  if (playButton && featuredVideo) {
    playButton.addEventListener('click', async () => {
      try {
        await featuredVideo.play();
        featuredVideo.controls = true;
        playButton.hidden = true;
      } catch (error) {
        featuredVideo.controls = true;
      }
    });
    featuredVideo.addEventListener('ended', () => {
      featuredVideo.controls = false;
      playButton.hidden = false;
    });
  }
}

// Ampliação das peças impressas em todas as páginas de projetos.
if (project) {
  const lightbox = document.createElement('div');
  lightbox.className = 'project-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Imagem ampliada');
  lightbox.hidden = true;
  lightbox.innerHTML = '<button type="button" class="lightbox-close" aria-label="Fechar imagem ampliada">×</button><img alt="">';
  document.body.appendChild(lightbox);
  const enlarged = lightbox.querySelector('img');
  let previousFocus = null;
  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    if (previousFocus) previousFocus.focus();
  };
  project.querySelectorAll('.project-media .media img').forEach(img => {
    img.classList.add('zoomable-image');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Ampliar imagem: ' + (img.alt || 'anúncio'));
    const open = () => {
      previousFocus = document.activeElement;
      enlarged.src = img.currentSrc || img.src;
      enlarged.alt = img.alt;
      lightbox.hidden = false;
      document.body.classList.add('lightbox-open');
      lightbox.querySelector('.lightbox-close').focus();
    };
    img.addEventListener('click', open);
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !lightbox.hidden) close();
  });
}
