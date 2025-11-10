let products = [
  {
    id: 1,
    price: 250,
    brand: "Rihana",
    name: "Carlisle Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_50fcc03a-35ee-4f2d-ad66-b04bea0659d1_600x600.png?v=1700112624",
  },
  {
    id: 2,
    price: 210,
    brand: "Dior",
    name: "Greenly Eau De parfum ",
    status:"View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_9f32f89b-6c0a-431c-8219-f977cd60e07d_600x600.png?v=1700112789",
  },
  {
    id: 3,
    price: 90,
    brand: "Gucci",
    name: "Herod Eau De parfum",
    status:"View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_0fd5c05a-db0a-46e5-a4a4-f43e86a179c1_600x600.png?v=1700112944",
  },
  {
    id: 4,
    price: 230,
    brand: "Rihana",
    name: "Althair Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_58fb376a-3871-47ea-9f91-439c0b1f556f_600x600.png?v=1700112436",
  },
  {
    id: 5,
    price: 145,
    brand: "Chanel",
    name: "Pegasus Eau De parfum",
    status:"View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_bdea8612-3d08-4f82-ba03-3541ab67020d_600x600.png?v=1700113123",
  },
  {
    id: 6,
    price: 78,
    brand: "Swiss",
    name: "Valaya Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_b73caffe-8acf-46f9-a49d-228b958e2609_600x600.png?v=1700117105",
  },
  {
    id: 7,
    price: 170,
    brand: "Swiss",
    name: "Oriana Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_5d7f7c06-056c-4471-b62f-78fdb174ffe7_600x600.png?v=1700116930",
  },
  {
    id: 8,
    price: 190,
    brand: "Swiss",
    name: "Roses Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_6e9dd3e5-441e-47db-9286-6b14dc374a56_600x600.png?v=1700116770",
  },
  {
    id: 9,
    price: 151,
    brand: "Arabic",
    name: "Dolce Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_d4b60e26-1d9b-4251-b42a-e6f1b17aa127_600x600.png?v=1700115319",
  },
  {
    id: 10,
    price: 65,
    brand: "Arabic",
    name: "Cologone To The Races",
    status: "View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_fd7a60cf-b793-4089-948e-65c3101347df_600x600.png?v=1700114920",
  },
  {
    id: 11,
    price: 70,
    brand: "Arabic",
    name: "Cologone Sapphire Sea",
    status:"View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_01ee1320-8362-48af-b5a5-b806a3494e8c_600x600.png?v=1700115134",
  },
  {
    id: 12,
    price: 56,
    brand: "Arabic",
    name: "Cologone Gripped Rose",
    status: "View More",
    isAvailable: "true",
    image:
      "https://sprays-workdo.myshopify.com/cdn/shop/files/2_c081675d-52c6-4643-b252-a2074e8c228d_600x600.png?v=1700114747",
  },
];

let con = document.querySelector(".con");
function displayProducts(productList) {
  con.innerHTML = "";
  productList.map((products) => {
    let card = document.createElement("div");
    con.appendChild(card);
    card.innerHTML = `
  <img src="${products.image}"/>
  <p>${products.brand}</p>
  <h4>${products.name}</h4>
  <h5>Price:$ ${products.price.toFixed(2)}</h5>
  <button><a href="single.html?id=${products.id}" target="_blank">${products.status}</a></button>
  `;
  con.appendChild(card);
  });
}

let brandfilter = document.getElementById("brandfilter");
displayProducts(products);

brandfilter.addEventListener("change", () => {
  let selected = brandfilter.value;
  if (selected === "all") {
    displayProducts(products);
  } else {
    let filtered = products.filter((pro) => pro.brand === selected);
    displayProducts(filtered);
  }
});
let pricefilter = document.getElementById("pricefilter");
displayProducts(products);

pricefilter.addEventListener("change", () => {
  let filtered = [...products];
  let selected = pricefilter.value;
  if (selected === "all") {
    displayProducts(products);
  } else if (selected === "p1") {
    filtered = filtered.filter((p) => p.price > 0 && p.price < 10);
  } else if (selected === "p2") {
    filtered = filtered.filter((p) => p.price > 10 && p.price < 99);
  } else if (selected === "p3") {
    filtered = filtered.filter((p) => p.price > 99 && p.price < 199);
  } else if (selected === "p4") {
    filtered = filtered.filter((p) => p.price > 199 && p.price < 299);
  }
  displayProducts(filtered);
});

let sortname = document.getElementById("sortname");

sortname.addEventListener("change", () => {
  let selected = sortname.value;
  let sorted = [...products];

  if (selected === "az") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selected === "za") {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  }
  displayProducts(sorted);
});

let searchinput = document.getElementById("searchinput");
searchinput.addEventListener("input",()=>{
  let key=searchinput.value.toLowerCase().trim();
  let filtered=products.filter((p)=>p.name.toLowerCase().includes(key));
  displayProducts(filtered)
      });

      function show(){
        document.getElementById("loader-container").style.display="none";
        document.getElementById("content-container").style.display="block";
      }
      setTimeout(show,3000);

      document.addEventListener("DOMContentLoaded", function () {
        createProductElements();
      })

       document.addEventListener("DOMContentLoaded", function () {
          const userName = localStorage.getItem("loggedInName");
          const isLoggedIn = localStorage.getItem("isLoggedIn");

          if (isLoggedIn && userName) {
            document.getElementById("user-name").textContent = userName;
          } else {
            document.getElementById("user-name").textContent = "";
          }
        });
       document.addEventListener("DOMContentLoaded", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartLength = cart.length;
        document.getElementById("cart-count").textContent = cartLength;
        localStorage.setItem("cartItems", JSON.stringify(cart));
      });
      document.addEventListener("DOMContentLoaded", function () {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        document.getElementById("wishlist-count").textContent = wishlist.length;
      });
        function logout() {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("loggedInName");
          window.location.href = "login.html";
        }