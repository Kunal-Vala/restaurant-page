// home-page.js

function createHeading() {
    const headingContainer = document.createElement('div');
    headingContainer.classList.add("heading-container");

    const title = document.createElement('h1');
    title.classList.add("title");

    title.textContent = "Mira's Mindful Cafe";

    headingContainer.appendChild(title);

    return headingContainer;
}

function createIntro() {
    const introContainer = document.createElement('div');
    introContainer.classList.add("intro-container");

    const infoPara = document.createElement('p');
    infoPara.classList.add("info-para");

    infoPara.textContent =
        `Mira's Mindful Cafe is a delightful haven where fast service meets soulful, freshly prepared Indian cuisine. With a philosophy rooted in simplicity and authenticity, the cafe prides itself on using real ingredients—never canned—and hand-ground spices that elevate every dish with rich, vibrant flavors. Enjoy a warm, welcoming space that feels both efficient and heartfelt. It’s not just about eating—it’s about enjoying food that’s thoughtfully made and served with care.`

    introContainer.appendChild(infoPara);

    return introContainer;
}

function createHourContainer() {

    const timeLine = ['Sunday: 8am - 8pm',
                'Monday: 6am - 6pm',
                'Tuesday: 6am - 6pm',
                'Wednesday: 6am - 6pm',
                'Thursday: 6am - 10pm',
                'Friday: 6am - 10pm',
                'Saturday: 8am - 10pm'];

    const introHourContainer = document.createElement('div');
    introHourContainer.classList.add('intro-hour-container');

    const hourTitle = document.createElement('h3');
    hourTitle.classList.add('hour-title');
    hourTitle.textContent = "Hours";

    const hourUl = document.createElement('ul');
    hourUl.classList.add('hour-list');


    timeLine.forEach((day) =>{
        const hourList = document.createElement('li');
        hourList.classList.add('days');
        hourList.textContent = `${day}`;
        hourUl.appendChild(hourList);
    });

    introHourContainer.appendChild(hourTitle);
    introHourContainer.appendChild(hourUl);

    return introHourContainer;
}

function createAddress(){
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address-container');

    const addressTitle = document.createElement('h3');
    addressTitle.classList.add('address-title');
    addressTitle.textContent = "Address";

    addressContainer.appendChild(addressTitle);

    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = "69th Race Street Drive, Townsik, NYC";

    addressContainer.appendChild(address);


    return addressContainer;
}

function loadHome(){
    const content = document.querySelector('#content');

    content.appendChild(createHeading());
    content.appendChild(createIntro());
    content.appendChild(createHourContainer());
    content.appendChild(createAddress());

    return content;
}


export { loadHome };