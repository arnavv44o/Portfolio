/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    reset: false
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

sr.reveal('.qualif__icon',{delay:400});
sr.reveal('.qualif__subtitle',{delay:400});
sr.reveal('.qualif__text',{delay:400});
/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{delay:600}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});
sr.reveal('.skills__imgg',{delay: 600});
//SCROLL FAMILIAR
sr.reveal('.familiar_cont',{interval: 200});
sr.reveal('.familiar__img',{interval: 200});
sr.reveal('.familiar__subtitle',{interval:200});
/*SCROLL WORK*/
//sr.reveal('.work__img',{}); 
//acheivement section
//sr.reveal('.certificate__img',{});
/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 50}); 
var typed = new Typed(".typing",{
  strings: ["Web Developer","Programmer","","Quick Learner","Problem Solver"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbx4wCeFw-JWChqE82R7XCH5RLNro49-NEFQWVhXAUu-qvV1zcjua8E8SVQjSBJToqIbbg/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML ="Message sent successfully"
      setTimeout(function(){
        msg.innerHTML=""
      },4000
      )
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})




