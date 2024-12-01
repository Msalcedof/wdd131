// Dynamic copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Select hamburger button and navigation links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Temple data
const temples = [

    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

       // Adding the 3 extra temple objects //
        
    {
      templeName: "Idaho Falls Idaho",
      location: "Idaho Falls, Idaho, United States",
      dedicated: "1945, September, 23",
      area: 85624,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"

    },
    {
      templeName: "Kinshasa Democratic Republic of the Congo",
      location: "Kinshasa, Democratic Republic of the Congo",
      dedicated: "2019, April, 14",
      area: 12000,
      imageUrl:         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"

    },
    {
      templeName: "Kyiv Ukraine",
      location: "Kyiv, Ukraine",
      dedicated: "2010, August, 29",
      area: 22184,
      imageUrl:         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"

    }
        
    
    // Add your three custom temple objects here...
  ];
  
  // Reference to gallery container
  const gallery = document.querySelector(".gallery");
  
  // Function to generate temple cards
  const renderTemples = (templeList) => {
    gallery.innerHTML = ""; // Clear the gallery
    templeList.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("temple-card");
  
      card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq. ft.</p>
      `;
  
    document.querySelector('.gallery').appendChild(card);
    });
  };
  
  // Render all temples on load
  renderTemples(temples);
  
  // Filter temples based on criteria
  const filterTemples = (criteria) => {
    switch (criteria) {
      case "Old":
        renderTemples(temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900));
        break;
      case "New":
        renderTemples(temples.filter((t) => new Date(t.dedicated).getFullYear() > 2000));
        break;
      case "Large":
        renderTemples(temples.filter((t) => t.area > 90000));
        break;
      case "Small":
        renderTemples(temples.filter((t) => t.area < 10000));
        break;
      default:
        renderTemples(temples); // Show all temples
    }
        

  };
  
  // Add event listeners for navigation links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      filterTemples(link.textContent.trim());
    });
  });
  
  // Footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
  

// Toggle the menu visibility when the hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.textContent = navLinks.classList.contains("show") ? "X" : "☰";
});

