// English homepage uses the same artwork and order as the Portuguese homepage.
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
    "image": "assets/microsystem-en-thumb.jpg",
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
const labels = {
  "gm-oleo": "General Motors — Engine Oil",
  "coco-de-passarinho": "Bird Droppings",
  "metro": "São Paulo Metro",
  "hopi-hari": "Hopi Hari — Escalator",
  "hopi-hari-brinquedos": "Hopi Hari — Rides",
  "sony-microsystem": "Clarification Notice",
  "centro-cultura-judaica": "Centro da Cultura Judaica",
  "droga-raia": "Droga Raia",
  "onu": "United Nations"
};
for(const item of thumbnails){
  item.image = "../" + item.image;
  if(labels[item.slug]) item.title=labels[item.slug];
  if(item.slug==="metro")item.advertiser="São Paulo Metro";
  if(item.slug==="onu")item.advertiser="United Nations";
}
const grid=document.getElementById("grid");
if(grid){
  grid.innerHTML=thumbnails.map(item=>{
    const image='<div class="cover"><img src="'+item.image+'" alt="'+item.title+'" loading="lazy"><span class="tile-advertiser" aria-hidden="true">'+item.advertiser+'</span></div>';
    const url=item.slug==="metro"?"metro.html":"projeto.html?id="+encodeURIComponent(item.slug);
    return '<a class="tile" href="'+url+'" aria-label="'+item.title+'">'+image+'</a>';
  }).join("");
}
