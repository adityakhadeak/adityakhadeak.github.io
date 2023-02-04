// For showing the about section's skill education and experience
let abtitems = document.getElementsByClassName("abt-items");
let tabcontents = document.getElementsByClassName("tab-content");
function show(tabname) {
    for (abtitem of abtitems)
        abtitem.classList.remove("active-item");

    for (tabcontent of tabcontents)
        tabcontent.classList.remove("active-content");

    event.currentTarget.classList.add("active-item");
    document.getElementById(tabname).classList.add("active-content")
}

// For showing and hiding of menu nav bar in mobile view
let menu = document.getElementById("menu")
let body=document.querySelector("body")
let navlist2 = document.getElementsByClassName("nav-list2")
let closemenu = document.getElementById("close")
menu.addEventListener('click', () => {
    navlist2[0].classList.remove("nav-toggle")
    body.style.overflow="hidden"

})
closemenu.addEventListener('click', () => {
    navlist2[0].classList.add("nav-toggle")
    body.style.overflow="auto"
})

// For contact form 
let msg = document.getElementById("msg")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwZYwIri3Ug75F1eXdg3FJG_ewORV38Dh-aYnGR9HhmFdmYCsdq7RkVZJnFNyG8k5-ekQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent Successfully"
            setTimeout(function () {
                msg.innerHTML = ""
                form.reset()
            }, 3000)
        })
        .catch(error => {
            msg.innerHTML = "Error occured"

            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
        })
})

// For hiding the navbar when scrolling down
let navbar = document.getElementsByClassName("nav-bar");
let prepos = window.pageYOffset;
window.onscroll = function () {
    let currentpos = window.pageYOffset;
    if (prepos < currentpos) {
        navbar[0].style.top = "-90";
    }
    else {
        navbar[0].style.top = "0";
    }
    prepos = currentpos;
}
