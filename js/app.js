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

const pageHeader = document.querySelector(".page__header");
const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");
const toTopBtn = document.querySelector("#toTopBtn");
let timer = null;

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

const scrollToTop = () => {
    const myBody = document.querySelector("HTML")
    myBody.scrollIntoView({
        behavior: "smooth"
    });
}

const setBtnVisibility = () => {
    if (document.body.scrollTop > 200) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

const buildTheNav = () => {

    const ulList = document.createDocumentFragment();
    // loop over all sections
    for (section of sections) {

        //store section data to vars
        let secId = section.id;
        let navText = section.getAttribute("data-nav");

        // create <a> tag
        let liLink = document.createElement("a");
        liLink.textContent = navText;
        liLink.setAttribute("class", `menu__link ${secId}`);
        liLink.setAttribute("data-target", `${secId}`);
        liLink.setAttribute("href", `#${secId}`);
        // liLink.setAttribute("href", `#${secId}`);
        (secId == sections[0].id) ? liLink.classList.add("active"): "";

        // create <li> tag and put <a> tag into it
        let newLi = document.createElement("li");
        newLi.appendChild(liLink);

        // append element to list
        ulList.appendChild(newLi);
    }
    navList.appendChild(ulList);
}

// Add class 'active' to section when near top of viewport
const addActiveClass = (sectionId) => {
    navLi.forEach((a) => {
        if (!(a.classList.contains(sectionId))) {
            a.classList.remove("active");
        }
        if (a.classList.contains(sectionId)) {
            a.classList.add("active");
        }
    });

    sections.forEach((section) => {
        if (!(section.id == sectionId)) {
            section.classList.remove("your-active-class");
        }
        if (section.id == sectionId) {
            section.classList.add("your-active-class");
        }
    });
}

// Scroll to anchor ID using scrollTO event
const scrollToSection = (event) => {
    const sectionId = event.target.getAttribute("data-target");
    let section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: "smooth"
    });
    event.preventDefault();
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildTheNav();

// Scroll to section on link click
navList.addEventListener('click', scrollToSection);


// Set sections as active
const navLi = document.querySelectorAll("#navbar__list li a");
window.addEventListener("scroll", () => {

    setBtnVisibility()
    let currentSectionId = "";

    //loop over sections to select current section
    sections.forEach((section) => {
        const sectionHeight = section.clientHeight;
        sectionPostion = section.getBoundingClientRect();
        if (sectionPostion.top <= (sectionHeight / 4)) {
            currentSectionId = (section.id)
        }
    });
    // add active class to nav link and section
    addActiveClass(currentSectionId);


    // chek if scrolling
    if (timer !== null) {
        pageHeader.style.opacity = 1;
        clearTimeout(timer);
    }

    // Hide nav after scrolling stop with setTimeout
    timer = setTimeout(() => {
        // check if usser scrolled over than 250px (~ main__hero height)
        if (document.body.getBoundingClientRect().top < -250) {
            pageHeader.style.opacity = 0;
        }
    }, 2500);
});