// Part 1: Friends Data
const friends = [
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    hobby: "Photography",
    quote: "Capture moments, not things.",
    contact: "alice@google.com"
  },
  {
    name: "Brian Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    hobby: "Cycling",
    quote: "Two wheels move the soul.",
    contact: "brian@google.com"
  },
  {
    name: "Clara White",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    hobby: "Painting",
    quote: "Art is freedom.",
    contact: "clara@google.com"
  },
  {
    name: "David Lee",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    hobby: "Gaming",
    quote: "Level up your life.",
    contact: "david@google.com"
  },
  {
    name: "Emily Rose",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    hobby: "Reading",
    quote: "Books are portals.",
    contact: "emily@google.com"
  }
];

function FriendCard({ name, image, hobby, quote, contact }) {
  return `
    <div class="card">
      <img src="${image}" alt="${name}" />
      <h3>${name}</h3>
      <p><strong>Hobby:</strong> ${hobby}</p>
      <p><em>"${quote}"</em></p>
      <p><strong>Contact:</strong> ${contact}</p>
    </div>
  `;
}

document.getElementById("friends-container").innerHTML = friends
  .map(friend => FriendCard(friend))
  .join("");

// Part 2: Products Data
const products = [
  {
    name: "Wireless Headphones",
    image: "https://m.media-amazon.com/images/I/61XuLr92V3L._UF1000,1000_QL80_.jpg",
    price: "$79.99",
    description: "High-quality sound and noise cancellation.",
    stock: "In Stock"
  },
  {
    name: "Smart Watch",
    image: "https://images-cdn.ubuy.co.in/6593d3e0692bd14e1760d7b5-apple-watch-ultra-2-49-mm-titanium.jpg",
    price: "$129.00",
    description: "Track fitness, heart rate, and more.",
    stock: "Out of Stock"
  },
  {
    name: "Bluetooth Speaker",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzO2aUkPx4r1SIu1Q6_GPnQu-XQG-1F8Pow&s",
    price: "$45.50",
    description: "Crystal clear sound with portable design.",
    stock: "In Stock"
  },
  {
    name: "Laptop Stand",
    image: "https://alogic.in/cdn/shop/files/FLEXAdjustableLaptopStandwith5-in-14KUSB-CHub_1.webp?v=1720438437",
    price: "$25.00",
    description: "Ergonomic design for comfortable typing.",
    stock: "In Stock"
  },
  {
    name: "Gaming Mouse",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfj_YcTTuyutVLHPQvNPuKxr9c-LOfA0J4g&s",
    price: "$35.99",
    description: "Precision and speed for pro gaming.",
    stock: "Out of Stock"
  }
];

function ProductCard({ name, image, price, description, stock }) {
  const stockClass = stock === "In Stock" ? "in" : "out";
  return `
    <div class="card">
      <img src="${image}" alt="${name}" />
      <h3>${name}</h3>
      <p>${description}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p class="stock ${stockClass}">${stock}</p>
    </div>
  `;
}

document.getElementById("products-container").innerHTML = products
  .map(product => ProductCard(product))
  .join("");
