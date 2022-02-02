/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 *
 * 
 * *
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



/**
 * End Main Functions
 * Begin Events
 * 
*/



// Create section 5
let main = document.getElementById('main');
let section5 = document.createElement('section');
let div5 = document.createElement('div');
let h2 = document.createElement('h2');
let p1 = document.createElement('p');
let p2 = document.createElement('p');

div5.className = 'landing__container';
section5.id = 'section5';
section5.setAttribute('data-nav', 'Section 5');
h2.innerHTML = 'Section 5';
p1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
p2.innerHTML = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';

main.appendChild(section5);
section5.appendChild(div5);
div5.appendChild(h2);
div5.appendChild(p1);
div5.appendChild(p2);


// Create navbar
//select all sections present and put them in an array
const sections = Array.from(document.getElementsByTagName("section"));

// Create a function to create <li> dynamically
// Select the #navbar__list, where we want to add <li> items
const menu = document.getElementById('navbar__list');

for(section of sections){
       const listItem = document.createElement('li');
       const listItemLink = document.createElement('a');
       listItemLink.className = 'link';
       // use the section data-nav to fill the <a> tag
       listItemLink.textContent = section.dataset.nav;
       listItem.appendChild(listItemLink);
       menu.appendChild(listItem);
}


// Create a loop that creates nav click and scroll event
const menuLinks = document.querySelectorAll('li');

menuLinks.forEach((item, index) => {
     item.addEventListener("click", () => {
       const el = document.getElementById(`section${index + 1}`);
       el.scrollIntoView({ behavior: "smooth", block: "start" });
       console.log(item.parentElement.children);
       // remove the class from all elements
       for (element of item.parentElement.children) {
         element.classList.remove("active");
       }
       item.classList.add("active");
     });
   });



// Add active class to sections
let secMain = document.querySelectorAll("section");

document.addEventListener("scroll", () => {
	let currentPosition = 0;
  currentPosition = this.scrollY;
  let secMainPositions = [];
	secMain.forEach((element) => secMainPositions.push(element.getBoundingClientRect().top + 50));
  
  let addIndex = secMainPositions.findIndex((element) => element > 0);
  for (let i = 0; i < secMain.length; i++) {
    if (addIndex === i) {
			document.querySelector(`#section${addIndex + 1}`).classList.add("your-active-class");
		} else {
			document.querySelector(`#section${i + 1}`).classList.remove("your-active-class");
		}
  }

});
 


// Create to-top button
const toTopButton = document.querySelector('#to-top');

const scrollFunc = function () {
    const y = window.scrollY;
    if (y >= 300) {
        toTopButton.className = "to-top-show";
    } else {
        toTopButton.className = "to-top-hide";
    }
};

window.addEventListener("scroll", scrollFunc);

toTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

