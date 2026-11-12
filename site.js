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
  'mercedes-sprinter': '<span class="ph-title">Mercedes-Benz Sprinter<br><span class="ph-sub">Ou Você Tem Ou Você Quer</span></span><span class="ph-open">Nem todo mundo sonha com um furgão na garagem. Mas coloque uma estrela da Mercedes-Benz na frente e a conversa muda. A ideia foi tratar a Sprinter como o que ela é: um veículo premium no segmento de veículos utilitários, com status de objeto de desejo. Para quem já tem, motivo de orgulho. Para quem não tem, motivo para desejar.</span><span class="ph-credit">Atuação: conceito / redação</span>',
  'sony-microsystem': '<span class="ph-title">Sony Microsystem<br>Nota de Esclarecimento</span><span class="ph-open">Tem ideia criativa que precisa de uma página dupla colorida para vender o produto. Essa precisou só de um quadradinho na página dos classificados. Para apresentar o microsystem MHC-GTX88, a Sony publica uma nota de esclarecimento, daquelas bem formais. O que parece um comunicado sério é o jeito mais bem-humorado de provar a potência do aparelho.</span><span class="ph-credit">Atuação: criação / redação</span>',
  'monkey-cyber-cafe': '<span class="ph-title">Monkey Cyber Cafe<br>Load games, not guns.</span><span class="ph-open">Numa campanha de conscientização sobre o desarmamento, os anúncios colocaram pessoas reais dentro de cenas de videogame: o susto é real, a arma é de jogo. Filme e impressos para o Monkey Cyber Café.</span><span class="ph-credit">Atuação:</span>',
  'sony-bravia': '<span class="ph-title">Sony Bravia<br>Fina como você nunca viu.</span><span class="ph-open">Como provar que uma TV é ultrafina usando uma revista? Com um encarte que o leitor puxa: no lugar da página, uma Bravia fina como um cartão, para sair da revista direto para a mão de quem lê.</span><span class="ph-credit">Atuação:</span>',
  'ciam': '<span class="ph-title">CIAM<br>Pode ficar com as balinhas.</span><span class="ph-open">Quem aborda carros no semáforo costuma pedir. A ação do CIAM fez o contrário: voluntários distribuíam balinhas com um bilhete propondo que, em vez de R$ 1 na hora, a pessoa fizesse uma doação no site. A campanha teve ainda um comercial para incentivar doações à instituição.</span><span class="ph-credit">Atuação:</span>',
  'salompas': '<span class="ph-title">Salompas — Pescoço<br>O alívio visto por dentro</span><span class="ph-open">Para mostrar como Salompas alivia dores musculares e torcicolos, o comercial foi por dentro: uma animação acompanha o adesivo agindo direto no músculo.</span><span class="ph-credit">Atuação:</span>',
  'sony-walkman': '<span class="ph-title">Sony Walkman<br>A cópia nunca é igual ao original.</span><span class="ph-open">Uma página dupla de jornal contra os MP3 players falsificados. A página da esquerda trazia o anúncio; a da direita parecia em branco, até a tinta da página oposta se transferir e revelar a mensagem, espelhada e borrada. A cópia nunca é igual ao original, provada na própria impressão do jornal.</span><span class="ph-credit">Atuação:</span>',
  'centro-cultura-judaica': '<span class="ph-title">Centro da Cultura Judaica<br>Influência logo na entrada</span><span class="ph-open">Para anunciar a mostra de cinema \'Cultura Judaica no Brasil\', o anúncio preencheu a silhueta de chapéu e barba com letras coloridas e um aviso: \'Você percebe a influência do Brasil na cultura judaica logo na entrada: é gratuita.\'</span><span class="ph-credit">Atuação:</span>',
  'hopi-hari-brinquedos': '<span class="ph-title">Hopi Hari — Brinquedos<br>O presente que todo mundo quer no mês das crianças</span><span class="ph-open">No mês das crianças, a campanha impressa embalou os brinquedos do parque como presente de loja de brinquedos: a montanha-russa virou caixa nas mãos de uma criança, \'para crianças de 0 a 100 anos\'.</span><span class="ph-credit">Atuação:</span>',
  'metro': '<span class="ph-title">Metrô De São Paulo<br><span class="ph-sub">Tá Com Pressa? Passa Por Baixo</span></span><span class="ph-open">São Paulo trava em cima, o Metrô corre por baixo. Enquanto lá fora todo mundo procura uma saída, a campanha aponta com humor outra direção. E o Metrô entra na conversa de quem não tem tempo a perder. Afinal, para passar na frente do trânsito, nem sempre é preciso ultrapassar. Às vezes, basta passar por baixo.</span><span class="ph-credit">Atuação: redação / direção de arte</span>',
  'derdic': '<span class="ph-title">Derdic<br><span class="ph-sub">Mais Visibilidade Para As Pessoas Surdas</span></span><span class="ph-open">A Derdic, Divisão de Educação e Reabilitação dos Distúrbios da Comunicação, é uma instituição dedicada à acessibilidade. Num tempo em que tanta gente fala de inclusão, este comercial fez a sua dentro da própria tela: quem se comunica por sinais virou o protagonista, e a fala foi para a janelinha. Um filme que deu muita alegria de fazer, especialmente quando foi apresentado dentro da Derdic às pessoas surdas atendidas pela instituição, que reagiram com muita emoção.</span><span class="ph-credit">Atuação: criação</span><span class="ph-awards">Prêmio:<br>Anuário do Clube de <br class="ph-br-d">Criação de São Paulo</span>',
  'onu': '<span class="ph-title">ONU<br><span class="ph-sub">Desfaça Guerra</span></span><span class="ph-open">O mundo vive em guerra, uma atrás da outra. Para isso existe a ONU: trabalhar pela paz. A ideia desta campanha está no próprio nome. UN, de United Nations, ganha a força de um prefixo que desfaz. Em cada peça, um verbo que começa com a sigla e termina com a violência desfeita. Campanha internacional não veiculada.</span><span class="ph-credit">Atuação: criação / redação / direção de arte</span>',
  'gm-oleo': '<span class="ph-title">General Motors<br><span class="ph-sub">Vazamento De Óleo</span></span><span class="ph-open">Sabe aquela folha de jornal estendida sob o carro para absorver o vazamento de óleo? Num domingo, ela estava na página central do jornal. A página dupla da GM simulava o jornal manchado pelo óleo do motor, igualzinho à que ficava no chão da garagem. Pois é, melhor usar peças genuínas.</span><span class="ph-credit">Atuação: criação / direção de arte</span><span class="ph-awards">Prêmios:<br><span class="ph-dot">•</span> Medalha de prata no CCSP<br><span class="ph-dot">•</span> Shortlist em mídia no <br class="ph-br-d">Festival Cannes Lions<br><span class="ph-dot">•</span> Vencedor do Prêmio ANJ de <br class="ph-br-d">Criação Publicitária, <br class="ph-br-m">concedido pela <br class="ph-br-d">Associação Nacional de Jornais.</span>',
  'hilux': '<span class="ph-title">Toyota Hilux<br><span class="ph-sub">Faça Seu Destino</span></span><span class="ph-open">Uma vida sem obstáculos seria bem melhor, certo? Não para os picapeiros, segundo as pesquisas de que participei. A campanha de lançamento da nova Hilux apostou exatamente nisso: barro, buraco e desafio como convite e desejo, não como problema. Daí o conceito "Faça seu destino". Acompanhei a produção e a realização da campanha: filmagens, fotos, finalização e entrega ao cliente.</span><span class="ph-credit">Atuação: cocriação / conceito / direção de arte / redação dos títulos</span>',
  'hopi-hari': '<span class="ph-title">Hopi Hari<br><span class="ph-sub">A Escada Que Virou Montanha-Russa</span></span><span class="ph-open">Uma escada rolante costuma ser a parte menos emocionante do passeio. Até o Hopi Hari entrar na história. Com adesivos nos degraus, a escada que descia ganhou fileiras de passageiros de braços para o alto e virou uma montanha-russa. Um convite para trocar aquela descida tranquila por outra nem tanto.</span><span class="ph-credit">Atuação: criação / redação / direção de arte</span><span class="ph-awards">Prêmio:<br>Anuário do Clube de <br class="ph-br-d">Criação de São Paulo</span>',
  'corolla': '<span class="ph-title">Toyota Corolla<br><span class="ph-sub">Motor City</span></span><span class="ph-open">Como mostrar que o Corolla chegou com um motor novo, mais potente? Colocando o carro para rodar dentro dele. Para apresentar o novo 2.0 Dual VVT-i, transformamos o motor numa cidade. Uma metrópole construída para o Corolla mostrar o que o move.</span><span class="ph-credit">Atuação: criação / redação / direção de arte</span>',
  'droga-raia': '<span class="ph-title">Droga Raia — Disfunção Erétil<br>O inflável que nem sempre se mantém de pé</span><span class="ph-open">Para falar de disfunção erétil na porta da farmácia, a peça usou o boneco inflável de rua: ora de pé, ora caído, sempre com a pergunta \'Disfunção erétil?\' e os 30% OFF da Droga Raia.</span><span class="ph-credit">Atuação:</span><span class="ph-awards">Prêmio:<br>Anuário do Clube de <br class="ph-br-d">Criação de São Paulo</span>',
  'sw4': '<span class="ph-title">Toyota SW4<br>Você nunca ficou tão confortável causando inveja.</span><span class="ph-open">No lançamento da nova SW4, a campanha apostou no desejo: o conforto de quem está dentro medido pelo desconforto de quem está fora. Campanha integrada, com filme e anúncios.</span><span class="ph-credit">Atuação:</span>',
  'coco-de-passarinho': '<span class="ph-title">LAVA RÁPIDO METÁLICO<br><span class="ph-sub">Cocô De Passarinho</span></span><span class="ph-open">Imagina que você estacionou para tomar um cafezinho. Não deu nem 5 minutos e, quando você voltou, deu de cara com cocô de passarinho gigante escorrendo na janela do seu carro. Já bate aquele desânimo. Até chegar perto e descobrir que é um adesivo eletrostático com o nome, o endereço e o telefone do Lava-Rápido Metálico. Esses adesivos foram colados em vidros de carros nas redondezas do lava-rápido.</span><span class="ph-credit">Atuação: criação</span><span class="ph-awards">Prêmios:<br><span class="ph-dot">•</span> Shortlist em mídia no <br class="ph-br-d">Festival Cannes Lions<br><span class="ph-dot">•</span> Anuário do Clube de <br class="ph-br-d">Criação de São Paulo</span>',
  '3m': '<span class="ph-title">3M Surround Sound Headphones<br><span class="ph-sub">Ondas Sonoras</span></span><span class="ph-open">Música e imagem deixam de ser coisas separadas. Ondas sonoras partem de onde o som nasce e constroem a figura de quem o produz. Uma explosão que ganha corpo e se expande pela página: a expressão gráfica da potência dos headphones e da ideia de surround, em que a música ocupa tudo ao redor.</span><span class="ph-credit">Atuação: criação / redação / direção de arte</span>'
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
