function createMenuSection() {
  const menuData = {
    "Beverages": [
      { name: "Masala Chai", description: "Traditional Indian spiced tea brewed with milk.", price: "₹30", image: "https://i.imgur.com/8fKQpTg.jpg" },
      { name: "Cold Coffee", description: "Chilled coffee with a scoop of vanilla ice cream.", price: "₹60", image: "https://i.imgur.com/jE9YFvW.jpg" },
      { name: "Lemon Iced Tea", description: "Refreshing black tea with lemon and ice.", price: "₹45", image: "https://i.imgur.com/XmOEzgL.jpg" }
    ],
    "Soft Drinks": [
      { name: "Pepsi", description: "Classic cola drink.", price: "₹20", image: "https://i.imgur.com/j3WOROE.jpg" },
      { name: "Sprite", description: "Lemon-lime carbonated soft drink.", price: "₹20", image: "https://i.imgur.com/MZ7RXaa.jpg" }
    ],
    "Main Dishes": [
      { name: "Paneer Butter Masala", description: "Cottage cheese in rich tomato gravy.", price: "₹160", image: "https://i.imgur.com/  Tmrv6hh.jpg" },
      { name: "Veg Biryani", description: "Fragrant basmati rice with vegetables and spices.", price: "₹130", image: "https://i.imgur.com/RA9aSHh.jpg" },
      { name: "Chole Bhature", description: "Spicy chickpeas with fluffy fried bread.", price: "₹100", image: "https://i.imgur.com/6OguFdj.jpg" }
    ],
    "Snacks": [
      { name: "Samosa", description: "Crispy pastry filled with spiced potatoes.", price: "₹20", image: "https://i.imgur.com/zgtzkEp.jpg" },
      { name: "Aloo Tikki", description: "Potato patty spiced and shallow fried.", price: "₹30", image: "https://i.imgur.com/ppvjM6y.jpg" },
      { name: "Kachori", description: "Crispy fried dough ball with spicy lentil filling.", price: "₹25", image: "https://i.imgur.com/vAkgrkG.jpg" }
    ],
    "Desserts": [
      { name: "Gulab Jamun", description: "Soft milk balls soaked in sugar syrup.", price: "₹40", image: "https://i.imgur.com/cZJNV8r.jpg" },
      { name: "Rasgulla", description: "Sponge balls in light sugar syrup.", price: "₹40", image: "https://i.imgur.com/qUeK0bc.jpg" }
    ]
  };

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  for (let category in menuData) {
    const section = document.createElement("section");
    section.classList.add("menu-section");

    const heading = document.createElement("h2");
    heading.classList.add("menu-heading");
    heading.textContent = category;
    section.appendChild(heading);

    const itemsWrapper = document.createElement("div");
    itemsWrapper.classList.add("card-wrapper");

    menuData[category].forEach(item => {
      const card = document.createElement("div");
      card.classList.add("menu-card");

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.classList.add("menu-img");

      const title = document.createElement("h3");
      title.textContent = item.name;

      const desc = document.createElement("p");
      desc.textContent = item.description;

      const price = document.createElement("p");
      price.textContent = item.price;
      price.classList.add("menu-price");

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(price);

      itemsWrapper.appendChild(card);
    });

    section.appendChild(itemsWrapper);
    menuContainer.appendChild(section);
  }

  return menuContainer;
}

function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = '';
  content.appendChild(createMenuSection());
}

export {loadMenu};