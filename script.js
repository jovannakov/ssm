document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]");

  // Initial slide-in animation on page load
  document.body.classList.add("zoom-in");

  links.forEach(link => {
    const href = link.getAttribute("href");

    // Only handle internal links (avoiding external, anchors, etc.)
    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("javascript:") &&
      !href.startsWith("http") &&
      !href.endsWith(".pdf")
    ) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Apply the slide-out effect when clicking a link
        document.body.classList.add("zoom-out");

        // Wait for the slide-out to complete before navigating
        setTimeout(() => {
          // Navigate after the transition is done
          window.location.href = href;
        }, 500); // Match the delay with your CSS transition duration
      });
    }
  });
});

// Once the page has loaded, we can add the slide-in class to make it slide in from the left
window.addEventListener("load", () => {
  // Add slide-in effect when new page is loaded
  document.body.classList.add("slide-in");
});

// Toggle the navigation menu when the hamburger icon is clicked
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


// fetch('menu.csv')
//   .then(response => response.text())
//   .then(csv => {
//     const rows = csv.trim().split('\n').map(r => r.split(','));
//     console.log(rows);
//     const [headerRow, ...dataRows] = rows;
// 
//     const container = document.getElementById('menu-items');
//     dataRows.forEach(row => {
//       const card = document.createElement('div');
//       card.className = 'menu-card';
//       card.innerHTML = `<h3>${row[0]}</h3><p>${row[1]}</p>`;
//       container.appendChild(card);
//     });
//   });
const menuItems = [
  { name: "Strawberry Cupcake", price: "$3.50" },
  { name: "Rose Latte", price: "$4.00" },
  { name: "Pink Macaron", price: "$2.00" },
  { name: "Cherry Cheesecake", price: "$5.00" }
];
const container = document.getElementById('menu-items');
menuItems.forEach(row => {
  const card = document.createElement('div');
  card.className = 'menu-card';
  card.innerHTML = `<h3>${row.name}</h3><p>${row.price}</p>`;
  container.appendChild(card);
});