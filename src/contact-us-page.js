function createContactSection() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";
  contactContainer.appendChild(heading);

  const info = document.createElement("p");
  info.textContent = "Feel free to reach out to us for orders, collaborations, or any general inquiries.";
  contactContainer.appendChild(info);

  const team = [
    {
      name: "Mira Patel",
      role: "Founder & Head Chef",
      phone: "+91 98765 43210",
      email: "mira@mindfulcafe.com",
    },
    {
      name: "Ravi Mehta",
      role: "Operations Manager",
      phone: "+91 98452 77889",
      email: "ravi@mindfulcafe.com",
    },
    {
      name: "Ananya Sharma",
      role: "Customer Support",
      phone: "+91 98123 45678",
      email: "support@mindfulcafe.com",
    }
  ];

  const teamList = document.createElement("div");
  teamList.classList.add("team-list");

  team.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("contact-card");

    const name = document.createElement("h3");
    name.textContent = member.name;

    const role = document.createElement("p");
    role.textContent = `Role: ${member.role}`;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${member.phone}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${member.email}`;

    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(phone);
    card.appendChild(email);

    teamList.appendChild(card);
  });

  contactContainer.appendChild(teamList);

  return contactContainer;
}

function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = '';
  content.appendChild(createContactSection());
}

export {loadContact};