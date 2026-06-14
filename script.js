const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML =
        '<i class="fas fa-xmark"></i>';

    }else{

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    }

});
// close navlinks when a link is clicked
const links =
document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    });

});

// close nav links when outside is cicked
/* document.addEventListener("click", (e) => {

    const clickedMenu =
    navLinks.contains(e.target);

    const clickedButton =
    menuBtn.contains(e.target);

    if(
        !clickedMenu &&
        !clickedButton &&
        navLinks.classList.contains("active")
    ){

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    }

}); */

/////

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 100;

        if(top < trigger){

            section.classList.add("active");

        }

    });

});


// Anumated Stat numbers
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target =
        +counter.dataset.target;

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(update, 20);

        }else{

            counter.innerText =
            target + "+";

        }

    };

    update();

});

// light and dark mood tiggle
const themeBtn =
document.getElementById("themeBtn");

const body =
document.body;

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "light"){

    themeBtn.innerHTML =
    '<i class="fas fa-sun"></i>';

}else{

    body.classList.add("dark");

    themeBtn.innerHTML =
    '<i class="fas fa-moon"></i>';

}

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
        '<i class="fas fa-moon"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
        '<i class="fas fa-sun"></i>';

    }

});