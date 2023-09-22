const div = document.querySelector("div");
let img = document.createElement("img");

const phones = [
  {
    brand: "Samsung",
    model: "S20",
    image: "galaxy-s20-ultra.jpg",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: "75,000",
  },
  {
    brand: "Xiomi",
    model: "note10",
    image: "Redmi-Note-10.jpg",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: "35,000",
  },
  {
    brand: "Infinix",
    model: "z10",
    image: "Infinix-Zero-10.jpg",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: "15,999",
  },
  {
    brand: "Tecno",
    model: "spark10",
    image: "spark-10jpg.jpg",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: "32,000",
  },
  {
    brand: "Iphone",
    model: "14",
    image: "iphone-14-.jpg",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: "380,000",
  },
  {
    brand: "Oppo",
    model: "F11",
    image: "Oppo-F11.jpg",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: "56,000",
  },
  {
    brand: "Vivo",
    model: "y20",
    image: "vivo y20.jpg",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: "29,000",
  },
  {
    brand: "Lenovo",
    model: "K14 PlUs",
    image: "LENOVO.png",
    ram: 4,
    rom: 64,
    camera: "12 megapixel",
    price: "20,000",
  },
  {
    brand: "LG",
    model: "W1 PRO",
    image: "LG-W41-Pro.jpg",
    ram: 6,
    rom: 64,
    camera: "18 megapixel",
    price: "29,000",
  },
  {
    brand: "Motorola",
    model: "Z4-Play",
    image: "Motorola-z4-1.jpg",
    ram: 3,
    rom: 32,
    camera: "12 megapixel",
    price: "18,000",
  },
  {
    brand: "Samsung",
    model: "S20",
    image: "galaxy-s20-ultra.jpg",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: "75,000",
  },
  {
    brand: "Xiomi",
    model: "note10",
    image: "Redmi-Note-10.jpg",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: "35,000",
  },
  {
    brand: "Infinix",
    model: "z10",
    image: "Infinix-Zero-10.jpg",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: "15,999",
  },
  {
    brand: "Tecno",
    model: "spark10",
    image: "spark-10jpg.jpg",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: "32,000",
  },
  {
    brand: "Iphone",
    model: "14",
    image: "iphone-14-.jpg",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: "380,000",
  },
  {
    brand: "Oppo",
    model: "F11",
    image: "Oppo-F11.jpg",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: "56,000",
  },
  {
    brand: "Vivo",
    model: "y20",
    image: "vivo y20.jpg",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: "29,000",
  },
  {
    brand: "Lenovo",
    model: "K14 PlUs",
    image: "LENOVO.png",
    ram: 4,
    rom: 64,
    camera: "12 megapixel",
    price: "20,000",
  },
  {
    brand: "LG",
    model: "W1 PRO",
    image: "LG-W41-Pro.jpg",
    ram: 6,
    rom: 64,
    camera: "18 megapixel",
    price: "29,000",
  },
  {
    brand: "Motorola",
    model: "Z4-Play",
    image: "Motorola-z4-1.jpg",
    ram: 3,
    rom: 32,
    camera: "12 megapixel",
    price: "18,000",
  }


];

for (let i = 0; i < phones.length; i++) {
  div.innerHTML += `<div class="maindiv"><img src="./assets/${phones[i].image}" alt="">
  <h1>${phones[i].brand} ${phones[i].model}</br>
     Ram:${phones[i].ram}GB </br>
      Rom:${phones[i].rom}GB </br>
       Camera:${phones[i].camera} </br>
       <span class="price">Price: R.S ${phones[i].price}/- </span></h1>
       <button onclick='addToCart(${i})'>Add To Cart</button></div>`;
}

const cartArr = [];

function addToCart(i) {
  // console.log(phones[i]);

  if (cartArr.includes(phones[i]) === true) {
    console.log('bhai item mujood h');
    cartArr[i].quantity+= 1;
    console.log(cartArr);
  }
  else {
    phones[i].quantity = 1
    cartArr.push(phones[i]);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Item Added to cart successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  console.log(cartArr);
}



