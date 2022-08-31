// fonction to hide element 
const hide = (element) => {
    element.style.display = "none";
}
// function to show element in flex
const showInFlex = (element) => {
    element.style.display = "flex";
}
// function to show element in block
const showInBlock = (element) => {
    element.style.display = "block";
}

// params status is th element's opacity 0 or 1
const changeOpacity = (status, position) => {
    const menuItems = document.querySelectorAll(".menu-menu-principal-container > ul > li");
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.transitionDelay = `${(i + 1) / 2}s`;
        menuItems[i].style.transition = `${(i + 1) / 3}s ease-in-out`;
        menuItems[i].style.transform = `translateY(${position})`;
        menuItems[i].style.opacity = status;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // change top postion of menu list and search modal
    const searchModal = document.getElementById("search_form_modal");
    const menuNav = document.querySelector(" ul#primary-menu");
    const rect = document.querySelector(".header-top").getBoundingClientRect();
    menuNav.style.top = rect.bottom + "px";
    searchModal.style.top = rect.bottom + "px";
    // ------------------- menu modal ----------------

    const burger = document.querySelector("#site-navigation > .menu-toggle");
    burger.addEventListener("click", () => {
        // display main navigation
        // remove active class to search if this is set and add scroll class to the body to forbidden the scroll on the site
        document.body.classList.toggle("noScroll");
        searchModal.classList.remove("active");
        if (document.querySelector("#site-navigation").className.includes("toggled")) {
            changeOpacity("1", "0")
        } else {
            changeOpacity("0", "20px");
        }

    })

    menuNav.addEventListener("click", () => {
        // if click outside link, nav will be hide
        changeOpacity("0", "20px");
        document.getElementById("site-navigation").classList.remove("toggled");
        document.body.classList.remove("noScroll");
    })

    // add icon to toggle link in menu

    // select parent element
    const elementToggle = document.getElementById("menu-item-28874");
    // create current element
    const divElementToggle = document.createElement("div");
    // add classes
    divElementToggle.classList.add("toggleIcon");
    // add value
    divElementToggle.innerHTML = "+";
    // add event to click on the link toggle to show or not the sub menu
    elementToggle.childNodes[0].addEventListener("touchstart", (e) => {
        console.log(e);
        if (divElementToggle.innerHTML == "+") divElementToggle.innerHTML = "-"
        else divElementToggle.innerHTML = "+"
    });
    elementToggle.childNodes[0].appendChild(divElementToggle);

    // ------------------ search modal --------------------
    const searchBtn = document.getElementById("search-icon");
    const searchForm = document.querySelector(".custom_search_form > form ");
    // show search modal
    searchBtn.addEventListener("click", () => {
        // add active class to search modal and search modal and noScroll (not allowad scroll to the site if the menu is open)
        searchModal.classList.toggle("active");
        searchForm.classList.toggle("active");
        document.body.classList.toggle("noScroll");

    })

    // add custom button modal with search icon
    // create button
    const buttonSubmit = document.createElement("button");
    // add type attribute
    buttonSubmit.setAttribute("type", "submit")
    // add class
    buttonSubmit.classList.add("btn-submit-search-form")
    // create i to set inside search icon
    const i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-magnifying-glass");
    // affect each parent with children
    buttonSubmit.appendChild(i);
    searchForm.appendChild(buttonSubmit);



})