// template_6j174dj
// service_e0cmeyn
// pDlKgbHRQ6pawlQE9

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

//   emailjs
//     .sendForm(
//       "service_e0cmeyn",
//       "template_6j174dj",
//       event.target,
//       "pDlKgbHRQ6pawlQE9"
//     )
//     .then(() => {
//       loading.classList.remove("modal__overlay--visible");
//       success.classList += " modal__overlay--visible";
//     })
//     .catch(() => {
//       loading.classList.remove("modal__overlay--visible");
//       alert(
//         "The email service is temporarily unavailable. Please contact me directly at tstanmay2000@gmail.com"
//       );
//     });

   setTimeout(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
   }, 1000);

}

let isModalOpen = false;
function toggleModal(){
    // toggle modal
    
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
        
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
    
}
