// template_z94r6am
// service_f5mumen
// 7XGCy_rpvXcyWBWD0

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

  let ismodalOpen = false;
  function toggleModal() {
    if (ismodalOpen) {
        ismodalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    ismodalOpen = !ismodalOpen;
    document.body.classList += " modal--open";}

