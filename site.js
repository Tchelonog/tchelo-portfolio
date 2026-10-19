
const projects = [
  ['mercedes-sprinter', 'Mercedes-Benz Sprinter', 'Anúncio'],
  ['sony-microsystem', 'Sony Microsystem', 'Anúncio'],
  ['monkey-cyber-cafe', 'Monkey Cyber Cafe', 'Campanha'],
  ['sony-bravia', 'Sony Bravia', 'Anúncio'],
  ['ciam', 'CIAM', 'Campanha'],
  ['salompas', 'Salompas — Pescoço', 'Filme'],
  ['sony-walkman', 'Sony Walkman', 'Anúncio'],
  ['centro-cultura-judaica', 'Centro da Cultura Judaica', 'Anúncio'],
  ['hopi-hari-brinquedos', 'Hopi Hari — Brinquedos', 'Campanha impressa'],
  ['metro', 'Metrô de São Paulo', 'Campanha impressa'],
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
  'mercedes-sprinter': '',
  'sony-microsystem': 'Anúncio publicado na seção de classificados de jornal para divulgar o microsystem Sony.',
  'monkey-cyber-cafe': 'Campanha integrada de conscientização sobre o desarmamento, composta por filme e anúncios impressos para o Monkey Cyber Café.',
  'sony-bravia': 'Peça de mídia alternativa veiculada em revista para destacar a espessura ultrafina da TV Sony Bravia.',
  'ciam': 'Comercial e ação de rua para incentivar doações ao CIAM (Centro Israelita de Apoio Multidisciplinar).',
  'salompas': 'Comercial para Salompas, destacando o alívio de dores musculares e torcicolos.',
  'sony-walkman': 'Anúncio de página dupla central de jornal para a Sony. A página da direita, aparentemente em branco, utiliza a transferência de tinta da página oposta para revelar o texto.',
  'centro-cultura-judaica': 'Anúncio para a mostra de cinema Cultura Judaica no Brasil.',
  'hopi-hari-brinquedos': 'Campanha de anúncios impressos para incentivar o público a conhecer os brinquedos do Hopi Hari.',
  'metro': 'Campanha de anúncios impressos para o Metrô de São Paulo.',
  'derdic': 'Comercial publicado no Anuário do Clube de Criação de São Paulo (CCSP). Criado para a Derdic, instituição dedicada à educação bilíngue de Surdos, ao ensino em Libras e à inclusão profissional de pessoas com deficiência auditiva.',
  'onu': 'Campanha internacional da ONU de conscientização contra a violência em conflitos armados.',
  'gm-oleo': 'Anúncio finalista na categoria Mídia do Festival de Cannes e vencedor do Prêmio ANJ (Associação Nacional de Jornais). Publicada em página dupla de jornal, a peça simula uma folha colocada sob um carro para absorver um vazamento de óleo do motor.',
  'hilux': 'Campanha integrada de lançamento da nova Toyota Hilux, composta por filme e anúncios.',
  'hopi-hari': 'Peça publicada no Anuário do Clube de Criação de São Paulo (CCSP). Adesivos aplicados em escadas rolantes anunciam a nova montanha-russa do Hopi Hari.',
  'corolla': 'Campanha integrada de lançamento do novo Toyota Corolla, composta por filme e anúncios.',
  'droga-raia': 'Peça de mídia alternativa para a Droga Raia, publicada no Anuário do Clube de Criação de São Paulo (CCSP).',
  'sw4': 'Campanha integrada de lançamento da nova Toyota SW4, composta por filme e anúncios.',
  'coco-de-passarinho': 'Peça finalista na categoria Mídia do Festival de Cannes e publicada no Anuário do Clube de Criação de São Paulo (CCSP). Adesivo eletrostático aplicado nos vidros de carros estacionados nas proximidades de um lava-rápido.',
  '3m': 'Campanha de cartazes para os headphones Surround Sound da 3M.'
};

function cover(p) {
  return `<div class="cover">
    <img src="assets/${p[0]}-capa.jpg" alt="${p[1]}"
      onerror="this.outerHTML='<div class=placeholder>${p[1]}</div>'">
  </div>`;
}

// Página inicial: 22 thumbnails na ordem numérica definida pelo portfólio.
// Somente trabalhos com páginas já criadas têm links ativos.
const thumbnails = [
  {
    "image": "assets/01%20hilux%20thumb%20copy.jpg",
    "title": "Toyota Hilux",
    "advertiser": "Toyota Hilux",
    "slug": "hilux"
  },
  {
    "image": "assets/02%20oleo%20thumb%20copy.jpg",
    "title": "General Motors — Óleo",
    "advertiser": "General Motors",
    "slug": "gm-oleo"
  },
  {
    "image": "assets/03%20derdic%20thumb%20copy.jpg",
    "title": "Derdic",
    "advertiser": "Derdic",
    "slug": "derdic"
  },
  {
    "image": "assets/04%20un%20thumb%20copy.jpg",
    "title": "ONU",
    "advertiser": "ONU",
    "slug": "onu"
  },
  {
    "image": "assets/05%20coco%20thumb%20copy.jpg",
    "title": "Cocô de passarinho",
    "advertiser": "Lava-Rápido Metálico",
    "slug": "coco-de-passarinho"
  },
  {
    "image": "assets/06%20corolla%20thumb%20copy.jpg",
    "title": "Toyota Corolla",
    "advertiser": "Toyota Corolla",
    "slug": "corolla"
  },
  {
    "image": "assets/07%20escada%20thumb%20copy.jpg",
    "title": "Hopi Hari — Escada Rolante",
    "advertiser": "Hopi Hari",
    "slug": "hopi-hari"
  },
  {
    "image": "assets/08%20metro%20thumb%20copy.jpg",
    "title": "Metrô",
    "advertiser": "Metrô",
    "slug": "metro"
  },
  {
    "image": "assets/09%203m%20thumb%20copy.jpg",
    "title": "3M — Surround Sound",
    "advertiser": "3M",
    "slug": "3m"
  },
  {
    "image": "assets/10%20sw4%20thumb%20copy.jpg",
    "title": "Toyota SW4",
    "advertiser": "Toyota SW4",
    "slug": "sw4"
  },
  {
    "image": "assets/12%20presente%20thumb%20copy.jpg",
    "title": "Hopi Hari — Brinquedos",
    "advertiser": "Hopi Hari",
    "slug": "hopi-hari-brinquedos"
  },
  {
    "image": "assets/13%20judeu%20thumb%20copy.jpg",
    "title": "Centro da Cultura Judaica",
    "advertiser": "Centro da Cultura Judaica",
    "slug": "centro-cultura-judaica"
  },
  {
    "image": "assets/14%20raia%20thumb%20copy.jpg",
    "title": "Droga Raia",
    "advertiser": "Droga Raia",
    "slug": "droga-raia"
  },
  {
    "image": "assets/15%20walkman%20thumb%20copy.jpg",
    "title": "Walkman",
    "advertiser": "Sony",
    "slug": "sony-walkman"
  },
  {
    "image": "assets/16%20salompas%20thumb%20copy.jpg",
    "title": "Salompas",
    "advertiser": "Salompas",
    "slug": "salompas"
  },
  {
    "image": "assets/18%20ciam%20thumb%20copy.jpg",
    "title": "CIAM",
    "advertiser": "CIAM",
    "slug": "ciam"
  },
  {
    "image": "assets/19%20bravia%20thumb%20copy.jpg",
    "title": "Bravia",
    "advertiser": "Sony",
    "slug": "sony-bravia"
  },
  {
    "image": "assets/22%20monkey%20thumb%20copy.jpg",
    "title": "Monkey",
    "advertiser": "Monkey Cyber Café",
    "slug": "monkey-cyber-cafe"
  },
  {
    "image": "assets/23%20nota%20escla%20thumb%20copy.jpg",
    "title": "Nota de esclarecimento",
    "advertiser": "Microsystem Sony",
    "slug": "sony-microsystem"
  },
  {
    "image": "assets/24%20sprinter%20thumb%20copy.jpg",
    "title": "Mercedes-Benz Sprinter",
    "advertiser": "Mercedes-Benz",
    "slug": "mercedes-sprinter"
  }
];
const grid = document.getElementById('grid');
if (grid) {
  grid.innerHTML = thumbnails.map(item => {
    const image = `<div class="cover"><img src="${item.image}" alt="${item.title}" loading="lazy"><span class="tile-advertiser" aria-hidden="true">${item.advertiser}</span></div>`;
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

    if (slug === 'mercedes-sprinter') {
      media = `
        <div class="media"><img src="assets/an%20sprinter(1).jpg" alt="Anúncio Mercedes-Benz Sprinter"></div>
      `;
    } else if (slug === 'sony-microsystem') {
      media = `
        <div class="media sony-microsystem-media"><img src="assets/nota%20esclarecimento%20ok%20copy.jpg" alt="Sony Microsystem — Nota de Esclarecimento"></div>
      `;
    } else if (slug === 'monkey-cyber-cafe') {
      media = `
        <div class="media"><img src="assets/Young%20man%20copy.jpg" alt="Monkey Cyber Cafe — Young man"></div>
        <div class="media"><img src="assets/Woman%20copy.jpg" alt="Monkey Cyber Cafe — Woman"></div>
        <div class="media"><img src="assets/Man%20copy.jpg" alt="Monkey Cyber Cafe — Man"></div>
        <div class="media"><img src="assets/FAVELA%20FINAL%20copy.jpg" alt="Monkey Cyber Cafe — Favela"></div>
        <div class="media video-with-play">
          <video preload="metadata" playsinline src="assets/Monkey%20Game.mp4"></video>
          <button class="center-play" type="button" aria-label="Reproduzir vídeo">▶</button>
        </div>
      `;
    } else if (slug === 'sony-bravia') {
      media = `
        <div class="media"><img src="assets/puxe%20tv%20port%20pasta%20novo%20copy.jpg" alt="Sony Bravia — anúncio com encarte e cartão destacável"></div>
      `;
    } else if (slug === 'ciam') {
      media = `
        <div class="media video-with-play">
          <video preload="metadata" playsinline src="assets/Ciam%20Portugue%CC%82s%20com%20efeito.mp4"></video>
          <button class="center-play" type="button" aria-label="Reproduzir vídeo">▶</button>
        </div>
        <div class="media"><img src="assets/pranchabalinha52X36%20copy.jpg" alt="CIAM — ação com balinhas, composição de duas fotografias"></div>
      `;
    } else if (slug === 'salompas') {
      media = `
        <div class="media video-with-play">
          <video preload="metadata" playsinline src="assets/Salompas%20Pescoc%CC%A7o.mp4"></video>
          <button class="center-play" type="button" aria-label="Reproduzir vídeo">▶</button>
        </div>
      `;
    } else if (slug === 'sony-walkman') {
      media = `
        <div class="media"><img src="assets/an%20walkman%20pasta%20ok%20copy.jpg" alt="Sony Walkman — A cópia nunca é igual ao original"></div>
      `;
    } else if (slug === 'droga-raia') {
      media = `
        <div class="media"><img src="assets/Montagem%20Disfunc%CC%A7a%CC%83o.jpg" alt="Droga Raia — intervenção Disfunção Erétil"></div>
      `;
    } else if (slug === 'centro-cultura-judaica') {
      media = `
        <div class="media"><img src="assets/ccj%20gratuita%20copy.jpg" alt="Centro da Cultura Judaica — A entrada é gratuita"></div>
      `;
    } else if (slug === 'hopi-hari-brinquedos') {
      media = `
        <div class="media"><img src="assets/hopi%20pasta%20brinquedos%203.jpg" alt="Hopi Hari Brinquedos — Montanha-russa"></div>
        <div class="media"><img src="assets/hopi%20pasta%20brinquedos%201.jpg" alt="Hopi Hari Brinquedos — Ekatomb"></div>
        <div class="media"><img src="assets/hopi%20pasta%20brinquedos%202.jpg" alt="Hopi Hari Brinquedos — La Tour Eiffel"></div>
      `;
    } else if (slug === 'sw4') {
      media = `
        <div class="media video-with-play">
          <video preload="metadata" playsinline src="assets/SW4%20Ladrao.mp4"></video>
          <button class="center-play" type="button" aria-label="Reproduzir vídeo">▶</button>
        </div>
        <div class="media"><img src="assets/ans%20sw4%20pasta%20port%20copy3.jpg" alt="Toyota SW4 — Um jeito esperto de manter a família unida. Dê espaço."></div>
        <div class="media"><img src="assets/ans%20sw4%20pasta%20port%20copy2.jpg" alt="Toyota SW4 — Cabem até 7 rabudos."></div>
        <div class="media"><img src="assets/ans%20sw4%20pasta%20port%20copy1.jpg" alt="Toyota SW4 — Você nunca ficou tão confortável causando inveja."></div>
      `;
    } else if (slug === '3m') {
      media = `
        <div class="three-m-grid">
          <div class="media"><img src="assets/cartaz.jpg" alt="3M Surround Sound Headphones — anúncio rosa"></div>
          <div class="media"><img src="assets/cartaz2.jpg" alt="3M Surround Sound Headphones — anúncio amarelo"></div>
          <div class="media"><img src="assets/cartaz3.jpg" alt="3M Surround Sound Headphones — anúncio azul"></div>
        </div>
      `;
    } else if (slug === 'metro') {
      media = `
        <div class="media"><img src="assets/lay%20metro%20copy1.jpg" alt="Metrô de São Paulo — Do Carandiru à Liberdade em 5 minutos"></div>
        <div class="media"><img src="assets/lay%20metro%20copy2.jpg" alt="Metrô de São Paulo — Tá com pressa? Passa por baixo"></div>
        <div class="media"><img src="assets/lay%20metro%20copy3.jpg" alt="Metrô de São Paulo — Toda vez que aparece um buraco na cidade a gente comemora"></div>
      `;
    } else if (slug === 'derdic') {
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
  project.querySelectorAll('.video-with-play').forEach(container => {
    const playButton = container.querySelector('.center-play');
    const featuredVideo = container.querySelector('video');
    if (!playButton || !featuredVideo) return;
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
  });
}

// Zoom real nas peças impressas: roda do mouse e arrastar para explorar detalhes.
if (project) {
  const lightbox = document.createElement('div');
  lightbox.className = 'project-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Imagem ampliada');
  lightbox.hidden = true;
  lightbox.innerHTML = '<button type="button" class="lightbox-close" aria-label="Fechar imagem ampliada">×</button><div class="lightbox-viewport"><img alt="" draggable="false"></div><div class="lightbox-tools"><button type="button" class="zoom-out" aria-label="Diminuir zoom">−</button><span class="zoom-value">200%</span><button type="button" class="zoom-in" aria-label="Aumentar zoom">+</button><button type="button" class="zoom-reset">Ajustar</button></div>';
  document.body.appendChild(lightbox);
  const viewport = lightbox.querySelector('.lightbox-viewport');
  const enlarged = lightbox.querySelector('img');
  const zoomValue = lightbox.querySelector('.zoom-value');
  let previousFocus = null, scale = 2, x = 0, y = 0, drag = null;
  const render = () => {
    enlarged.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')';
    zoomValue.textContent = Math.round(scale * 100) + '%';
    viewport.classList.toggle('can-drag', scale > 1);
  };
  const setZoom = (next, clientX, clientY) => {
    const old = scale;
    scale = Math.max(1, Math.min(6, next));
    if (clientX !== undefined && clientY !== undefined) {
      const rect = viewport.getBoundingClientRect();
      const px = clientX - rect.left - rect.width / 2;
      const py = clientY - rect.top - rect.height / 2;
      x = px - (px - x) * scale / old;
      y = py - (py - y) * scale / old;
    }
    if (scale === 1) { x = 0; y = 0; }
    render();
  };
  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    drag = null;
    if (previousFocus) previousFocus.focus();
  };
  project.querySelectorAll('.project-media .media img').forEach(img => {
    img.classList.add('zoomable-image');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Ampliar detalhes: ' + (img.alt || 'anúncio'));
    const open = () => {
      previousFocus = document.activeElement;
      enlarged.src = img.currentSrc || img.src;
      enlarged.alt = img.alt;
      scale = 2; x = 0; y = 0;
      lightbox.hidden = false;
      document.body.classList.add('lightbox-open');
      render();
      lightbox.querySelector('.lightbox-close').focus();
    };
    img.addEventListener('click', open);
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
    });
  });
  viewport.addEventListener('wheel', event => {
    event.preventDefault();
    setZoom(scale * (event.deltaY < 0 ? 1.2 : 1 / 1.2), event.clientX, event.clientY);
  }, { passive: false });
  viewport.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    drag = { px: event.clientX, py: event.clientY, x, y };
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('dragging');
  });
  viewport.addEventListener('pointermove', event => {
    if (!drag) return;
    x = drag.x + event.clientX - drag.px;
    y = drag.y + event.clientY - drag.py;
    render();
  });
  const stopDrag = () => { drag = null; viewport.classList.remove('dragging'); };
  viewport.addEventListener('pointerup', stopDrag);
  viewport.addEventListener('pointercancel', stopDrag);
  lightbox.querySelector('.zoom-in').addEventListener('click', () => setZoom(scale * 1.5));
  lightbox.querySelector('.zoom-out').addEventListener('click', () => setZoom(scale / 1.5));
  lightbox.querySelector('.zoom-reset').addEventListener('click', () => { scale = 1; x = 0; y = 0; render(); });
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !lightbox.hidden) close();
  });
}
