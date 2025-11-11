const URLparams = new URLSearchParams(window.location.search);
const productId = parseInt(URLparams.get("id"));

let products = [
  {
    id: 1,
    price: 250,
    brand: "Rihana",
    name: "Carlisle Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_50fcc03a-35ee-4f2d-ad66-b04bea0659d1_600x600.png?v=1700112624",
    description: "Carlisle by Rihana offers a rich, bold aroma blending warm spices and sensual woods—perfect for evenings filled with charm and confidence."
  },
  {
    id: 2,
    price: 90,
    brand: "Dior",
    name: "Greenly Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_9f32f89b-6c0a-431c-8219-f977cd60e07d_600x600.png?v=1700112789",
    description: "Greenly by Dior brings the freshness of lush green landscapes into a bottle—vibrant, crisp, and invigorating for daily wear."
  },
  {
    id: 3,
    price: 8,
    brand: "Gucci",
    name: "Herod Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_0fd5c05a-db0a-46e5-a4a4-f43e86a179c1_600x600.png?v=1700112944",
    description: "Herod by Gucci is a bold and masculine fragrance with rich tobacco, cinnamon, and a smoky base—perfect for cooler months."
  },
  {
    id: 4,
    price: 230,
    brand: "Rihana",
    name: "Althair Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_58fb376a-3871-47ea-9f91-439c0b1f556f_600x600.png?v=1700112436",
    description: "Althair by Rihana combines creamy vanilla with musky undertones to create an elegant scent with long-lasting depth."
  },
  {
    id: 5,
    price: 145,
    brand: "Chanel",
    name: "Pegasus Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_bdea8612-3d08-4f82-ba03-3541ab67020d_600x600.png?v=1700113123",
    description: "Pegasus by Chanel delivers a powerful blend of almond, vanilla, and sandalwood—strong, stylish, and full of character."
  },
  {
    id: 6,
    price: 51,
    brand: "Swiss",
    name: "Valaya Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_b73caffe-8acf-46f9-a49d-228b958e2609_600x600.png?v=1700117105",
    description: "Valaya by Swiss is a delicate and refreshing scent inspired by spring florals—light, airy, and effortlessly beautiful."
  },
  {
    id: 7,
    price: 170,
    brand: "Swiss",
    name: "Oriana Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_5d7f7c06-056c-4471-b62f-78fdb174ffe7_600x600.png?v=1700116930",
    description: "Oriana by Swiss is a modern floral-gourmand fragrance with juicy fruits and a soft, creamy finish—fun and feminine."
  },
  {
    id: 8,
    price: 196,
    brand: "Swiss",
    name: "Roses Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_6e9dd3e5-441e-47db-9286-6b14dc374a56_600x600.png?v=1700116770",
    description: "Roses by Swiss is an enchanting floral scent with layers of fresh rose petals and soft musk—romantic and timeless."
  },
  {
    id: 9,
    price: 151,
    brand: "Arabic",
    name: "Dolce Eau De parfum",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_d4b60e26-1d9b-4251-b42a-e6f1b17aa127_600x600.png?v=1700115319",
    description: "Dolce by Arabic blends oriental spices with floral accords to deliver a rich, luxurious scent rooted in tradition."
  },
  {
    id: 10,
    price: 20,
    brand: "Arabic",
    name: "Cologone To The Races",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_fd7a60cf-b793-4089-948e-65c3101347df_600x600.png?v=1700114920",
    description: "Cologone To The Races is a sporty, energetic scent with citrus bursts and woody undertones—built for speed and spirit."
  },
  {
    id: 11,
    price: 70,
    brand: "Arabic",
    name: "Cologone Sapphire Sea",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_01ee1320-8362-48af-b5a5-b806a3494e8c_600x600.png?v=1700115134",
    description: "Cologone Sapphire Sea is a refreshing marine-inspired fragrance that evokes ocean breeze, coastal herbs, and crisp blue skies."
  },
  {
    id: 12,
    price: 38,
    brand: "Arabic",
    name: "Cologone Gripped Rose",
    status: "View More",
    isAvailable: "true",
    image: "https://sprays-workdo.myshopify.com/cdn/shop/files/2_c081675d-52c6-4643-b252-a2074e8c228d_600x600.png?v=1700114747",
    description: "Cologone Gripped Rose is an intense, modern take on a classic rose—infused with dark woods and velvety spice."
  },
];
 const product=products.find(p=>p.id===productId);

 if (product) {
  document.getElementById("products-brand").textContent = product.brand;

  document.getElementById("products-title").textContent = product.name;

    document.getElementById("products-title").textContent = product.name;
    
    document.getElementById("products-image").src = product.image;

    document.getElementById("products-description").textContent = product.description;

   document.getElementById("products-available").textContent = `isAvailable: ${product.isAvailable}`;

    document.getElementById("products-price").textContent = `Price: $${product.price}`;

    document.getElementById("add-to-cart-btn").addEventListener("click",()=> {
      let cart=JSON.parse(localStorage.getItem("cart"))||[]
      const  existingItem = cart.find(item => item.id === product.id);
      if(existingItem){
        existingItem.qty=1
        if(product.brand== product.brand){
          alert("this product already in the cart")
        }
      }else{
            cart.push({ ...product, qty: 1 });
            localStorage.setItem("cart",JSON.stringify(cart));
        alert(`Products ${product.name} added to cart!`);
      }
    });

    document.getElementById("wishlist-btn").addEventListener("click",()=>{
      let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
      const existingItem=wishlist.find(item=>item.id===product.id);

      if(existingItem){
         alert("This product is already in your wishlist!");
          document.getElementById("wishlist-btn").textContent = "In Wishlist";
      }else{  
        wishlist.push({...product});
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
        alert(`product ${product.name} added to wishlist!`)
         document.getElementById("wishlist-btn").textContent = "In Wishlist";
      }
        });
        document.addEventListener("DOMContentLoaded", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartLength = cart.length;
        document.getElementById("cart-count").textContent = cartLength;
      });
      document.addEventListener("DOMContentLoaded", function () {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  document.getElementById("wishlist-count").textContent = wishlist.length;
});

} else {
    window.location.href = "index.html";
}