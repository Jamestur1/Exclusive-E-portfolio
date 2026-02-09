// template_z94r6am
// service_f5mumen
// 7XGCy_rpvXcyWBWD0

let ismodalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt= isOdd ? -1 : 1;
       shapes[i].styles.transform = `translate(${x * boolInt }px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
    
}


function contact(event) {
    event.preventDefault();
     const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    
    emailjs
        .sendForm(
            "service_f5mumen",
            "template_z94r6am",
            event.target,
            "7XGCy_rpvXcyWBWD0"
        ) .then(() => {
            loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("Something went wrong, please try again.");
        })
  }

  
  function toggleModal() {
    if (ismodalOpen) {
        ismodalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    ismodalOpen = !ismodalOpen;
    document.body.classList += " modal--open";}

