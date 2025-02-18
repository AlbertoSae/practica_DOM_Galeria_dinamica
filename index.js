const products = [
    //0
    {
      name: 'HP Essentials 255 G8 AMD',
      price: 289,
      stars: 4,
      reviews: 250,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    // Añade aquí al menos 9 productos más para tener un total de 10 productos
    // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
    //1
    {
      name: 'Portátil Gaming',
      price: 999,
      stars: 4.8,
      reviews:180,
      seller: 'PcComponenetes',
      image:'https://m.media-amazon.com/images/I/714IyWGfFZL.jpg'
    },
    //2
    {
      name: 'Monitor 4K',
      price: 299,
      stars: 4.8,
      reviews:180,
      seller: 'PcComponenetes',
      image: 'https://m.media-amazon.com/images/I/71XO89tkW0L.jpg '
    },
    //3
    {
      name: 'Teclado Mecánico',
      price: 89,
      stars: 4.4,
      reviews:380,
      seller: 'PcComponenetes',
      image: ' https://m.media-amazon.com/images/I/61DPUzgNFjL.jpg'
    },
    //4
    {
      name: 'Ratón Gaming',
      price: 45,
      stars: 3.9,
      reviews:580,
      seller: 'PcComponenetes',
      image: 'https://m.media-amazon.com/images/I/61fEpBysnmL._AC_UF1000,1000_QL80_.jpg '
    },
    //5
    {
      name: 'Tarjeta Gráfica RTX',
      price: 595,
      stars: 4,
      reviews:218,
      seller: 'PcComponenetes',
      image: ' https://m.media-amazon.com/images/I/61q0rsE3ezL._AC_UF894,1000_QL80_.jpg'
    },
    //6
    {
      name: 'Auriculares Inalámbricos',
      price: 79,
      stars: 4.6,
      reviews:1850,
      seller: 'PcComponenetes',
      image: ' https://m.media-amazon.com/images/I/61r7lgyB2CL.jpg'
    },
    //7
    {
      name: 'Placa Base Gaming',
      price: 179,
      stars: 5,
      reviews:850,
      seller: 'PcComponenetes',
      image: 'https://www.intel.la/content/dam/www/central-libraries/us/en/images/rog-strix-z390-e-gaming-motherboard-rwd.png.rendition.intel.web.1280.720.png'
    },
    //8
    {
      name: 'Procesador Intel i9',
      price: 499,
      stars: 4.7,
      reviews:720,
      seller: 'PcComponenetes',
      image: 'https://m.media-amazon.com/images/I/61PX7Uh0LqL._AC_UF894,1000_QL80_.jpg '
    },
    //9
    {
      name: 'SSD NVMe 1TB',
      price: 129,
      stars: 4.8,
      reviews:520,
      seller: 'PcComponenetes',
      image: 'https://www.falconcomputers.co.uk/media/product/83908/0/0/samsung-1tb-1000gb-970-evo-m2-pcie-high-performance-nvme-ssd-solid-state-drive.jpg?'
    }
  ];



//funcion para crear la tarjeta

function createCard(product){

  const card= document.createElement('div');
  card.classList.add('card');
  //style
  card.style.backgroundColor= '#fcfcfc'
  card.style.padding='8%';
  card.style.borderRadius='5%';
  card.style.minWidth='30%'
  card.style.boxShadow=' 0 0 15px rgba(0, 0, 0, 0.1)'
  //:hover
  card.addEventListener('mouseover',()=>{
    card.style.backgroundColor='#147ceb88';

  });
  card.addEventListener('mouseleave',()=>{
    card.style.backgroundColor='';

  });
  
//img
  const img= document.createElement('img');
  img.src=product.image;
  img.alt=product.name;
  card.appendChild(img);
  //style
    img.style.width='350px';
    img.style.height='350px';
    img.style.borderRadius='5px';
    
    
//name
  const name=document.createElement('h3');
  name.textContent=product.name;
  card.appendChild(name);
//price
  const price=document.createElement("p");
  price.classList.add('price');
  price.textContent=`${product.price}€`;
  card.appendChild(price);
//stars&rewiews  
  const stars=document.createElement('p');
  stars.textContent=`⭐ ${product.stars} (${product.reviews} opiniones)`;
  card.appendChild(stars);
//seller
  const seller=document.createElement('p');
  seller.textContent=`Vendido por:${product.seller} `;
  card.appendChild(seller);

  return card;
}

const container= document.querySelector('.products-container');

//para crear las tarjetas en el htm de este array
products.forEach(product=>{
  const card=createCard(product);
  container.appendChild(card);
});

 






