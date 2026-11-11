
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
  'mercedes-sprinter': '<span class="ph-title">Mercedes-Benz Sprinter<br>Ou você tem ou você quer.</span><span class="ph-open">Uma van pode ser objeto de desejo? A Sprinter se propunha a ser a premium do segmento de vans e furgões, e o anúncio tratou ela assim, como um Mercedes-Benz de verdade. Daí a manchete: \'Ou você tem ou você quer.\'</span>',
  'sony-microsystem': '<span class="ph-title">Sony Microsystem<br>Nota de Esclarecimento</span><span class="ph-open">Para apresentar um microsystem potente, nada como um pedido de desculpas. Publicado nos classificados do jornal, o anúncio simulava uma nota de esclarecimento da Sony, alertando que o aparelho podia derrubar vasos, estilhaçar vidros e rachar paredes.</span>',
  'monkey-cyber-cafe': '<span class="ph-title">Monkey Cyber Cafe<br>Load games, not guns.</span><span class="ph-open">Numa campanha de conscientização sobre o desarmamento, os anúncios colocaram pessoas reais dentro de cenas de videogame: o susto é real, a arma é de jogo. Filme e impressos para o Monkey Cyber Café.</span>',
  'sony-bravia': '<span class="ph-title">Sony Bravia<br>Fina como você nunca viu.</span><span class="ph-open">Como provar que uma TV é ultrafina usando uma revista? Com um encarte que o leitor puxa: no lugar da página, uma Bravia fina como um cartão, para sair da revista direto para a mão de quem lê.</span>',
  'ciam': '<span class="ph-title">CIAM<br>Pode ficar com as balinhas.</span><span class="ph-open">Quem aborda carros no semáforo costuma pedir. A ação do CIAM fez o contrário: voluntários distribuíam balinhas com um bilhete propondo que, em vez de R$ 1 na hora, a pessoa fizesse uma doação no site. A campanha teve ainda um comercial para incentivar doações à instituição.</span>',
  'salompas': '<span class="ph-title">Salompas — Pescoço<br>O alívio visto por dentro</span><span class="ph-open">Para mostrar como Salompas alivia dores musculares e torcicolos, o comercial foi por dentro: uma animação acompanha o adesivo agindo direto no músculo.</span>',
  'sony-walkman': '<span class="ph-title">Sony Walkman<br>A cópia nunca é igual ao original.</span><span class="ph-open">Uma página dupla de jornal contra os MP3 players falsificados. A página da esquerda trazia o anúncio; a da direita parecia em branco, até a tinta da página oposta se transferir e revelar a mensagem, espelhada e borrada. A cópia nunca é igual ao original, provada na própria impressão do jornal.</span>',
  'centro-cultura-judaica': '<span class="ph-title">Centro da Cultura Judaica<br>Influência logo na entrada</span><span class="ph-open">Para anunciar a mostra de cinema \'Cultura Judaica no Brasil\', o anúncio preencheu a silhueta de chapéu e barba com letras coloridas e um aviso: \'Você percebe a influência do Brasil na cultura judaica logo na entrada: é gratuita.\'</span>',
  'hopi-hari-brinquedos': '<span class="ph-title">Hopi Hari — Brinquedos<br>O presente que todo mundo quer no mês das crianças</span><span class="ph-open">No mês das crianças, a campanha impressa embalou os brinquedos do parque como presente de loja de brinquedos: a montanha-russa virou caixa nas mãos de uma criança, \'para crianças de 0 a 100 anos\'.</span>',
  'metro': '<span class="ph-title">Metrô de São Paulo<br>Tá com pressa? Passa por baixo.</span><span class="ph-open">São Paulo trava em cima, o Metrô corre por baixo. A campanha impressa traduziu isso em promessas diretas, como \'Do Carandiru à Liberdade em 5 minutos\' e \'Tá com pressa? Passa por baixo\'.</span>',
  'derdic': '<span class="ph-title">Derdic<br>Quem sinaliza é o protagonista</span><span class="ph-open">Um comercial em Libras publicado no Anuário do Clube de Criação de São Paulo. Na tela grande, quem se comunica por sinais; na janelinha, quem fala. Uma inversão simples para apresentar a Derdic, instituição dedicada à educação bilíngue de surdos.</span>',
  'onu': '<span class="ph-title">ONU<br>Unarm, undo, untie, unload.</span><span class="ph-open">Campanha internacional da ONU contra a violência dos conflitos armados. Cada peça trabalha um verbo em inglês que começa com UN, a sigla da organização: unarm, undo, untie, unload. A ONU como prefixo de quem desfaz a violência.</span>',
  'gm-oleo': '<span class="ph-title">General Motors — Óleo<br>Da próxima vez, use Peças Genuínas GM.</span><span class="ph-open">Um anúncio de página dupla de jornal que simulava a folha colocada sob um carro para absorver um vazamento de óleo do motor. A peça ganhou medalha de prata no Clube de Criação de São Paulo, foi finalista na categoria Mídia do Festival de Cannes e venceu o Prêmio ANJ (Associação Nacional de Jornais).</span>',
  'hilux': '<span class="ph-title">Toyota Hilux<br>Faça Seu Destino</span><span class="ph-open">Uma vida sem obstáculos seria bem melhor, certo? Não para os picapeiros, segundo as pesquisas de que participei. A campanha de lançamento da nova Hilux apostou exatamente nisso: barro, buraco e desafio como convite e desejo, não como problema. Daí o conceito "Faça seu destino". Acompanhei a produção e a realização da campanha: filmagens, fotos, finalização e entrega ao cliente.</span><span class="ph-credit">Atuação: cocriação/conceito/direção de arte/redação de títulos</span>',
  'hopi-hari': '<span class="ph-title">Hopi Hari — Escada Rolante<br>A escada que virou montanha-russa</span><span class="ph-open">Para anunciar a nova montanha-russa do Hopi Hari, adesivos aplicados nos degraus de escadas rolantes transformaram a subida no brinquedo, com fileiras de passageiros de braços levantados. A peça foi publicada no Anuário do Clube de Criação de São Paulo.</span>',
  'corolla': '<span class="ph-title">Toyota Corolla 2.0<br>Consulte um cardiologista.</span><span class="ph-open">No lançamento do novo Corolla, a aceleração do motor 2.0 virou questão de saúde: \'A maior aceleração da categoria. Para mais informações, consulte um cardiologista.\' Campanha integrada, com filme e anúncios.</span><span class="ph-credit">Atuação: redação</span>',
  'droga-raia': '<span class="ph-title">Droga Raia — Disfunção Erétil<br>O inflável que nem sempre se mantém de pé</span><span class="ph-open">Para falar de disfunção erétil na porta da farmácia, a peça usou o boneco inflável de rua: ora de pé, ora caído, sempre com a pergunta \'Disfunção erétil?\' e os 30% OFF da Droga Raia. Mídia alternativa publicada no Anuário do Clube de Criação de São Paulo.</span>',
  'sw4': '<span class="ph-title">Toyota SW4<br>Você nunca ficou tão confortável causando inveja.</span><span class="ph-open">No lançamento da nova SW4, a campanha apostou no desejo: o conforto de quem está dentro medido pelo desconforto de quem está fora. Campanha integrada, com filme e anúncios.</span>',
  'coco-de-passarinho': '<span class="ph-title">Cocô de passarinho<br>O anúncio que sujou o carro</span><span class="ph-open">Para anunciar um lava-rápido, nada como sujar o carro do cliente. Adesivos eletrostáticos em forma de cocô de passarinho foram aplicados nos vidros de carros estacionados perto do Lava-Rápido Metálico. A peça foi finalista na categoria Mídia do Festival de Cannes e publicada no Anuário do Clube de Criação de São Paulo.</span>',
  '3m': '<span class="ph-title">3M — Surround Sound<br>O som que vem de todos os lados</span><span class="ph-open">Para vender headphones com som surround, os cartazes mostraram o que só se ouve: ondas sonoras explodindo em volta de quem escuta, vindas de todos os lados.</span>'
};

function cover(p) {
  return `<div class="cover">
    <img src="assets/${p[0]}-capa.jpg" alt="${p[1]}"
      onerror="this.outerHTML='<div class=placeholder>${p[1]}</div>'">
  </div>`;
}

// Página inicial: 20 thumbnails na ordem de apresentação do portfólio.
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
    "image": "assets/24%20sprinter%20thumb%20copy.jpg",
    "title": "Mercedes-Benz Sprinter",
    "advertiser": "Mercedes-Benz",
    "slug": "mercedes-sprinter"
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
    "image": "assets/23%20nota%20escla%20thumb%20copy.jpg",
    "title": "Nota de esclarecimento",
    "advertiser": "Microsystem Sony",
    "slug": "sony-microsystem"
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
    const orderedProjects = thumbnails.map(item => projects.find(p => p[0] === item.slug)).filter(Boolean);
    const currentIndex = orderedProjects.findIndex(p => p[0] === slug);
    const next = orderedProjects[(currentIndex + 1) % orderedProjects.length];

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
      <section class="project-head project-${slug}">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;line-height:1.5;margin:0;padding:0;">
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
