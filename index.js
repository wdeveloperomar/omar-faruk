document.getElementById('menu-show').addEventListener('click', function () {
    const menu = document.getElementById('menu').classList.remove('menu-hidden')
    const hiddenMenuButton = document.getElementById('menu-show').classList.add('button-hidden')
    const showMenuButton = document.getElementById('menu-hidden').classList.remove('button-hidden')
    
})



 const menuLinks = document.querySelectorAll('#menu a');

  // Function to remove active class from all links
  function removeActive() {
    menuLinks.forEach(link => link.classList.remove('active'));
  }

  // Listen for scroll event
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    menuLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section.offsetTop <= scrollY + 50) { // 50px offset
        current = link.getAttribute('href');
      }
    });

    removeActive();
    if(current) {
      const activeLink = document.querySelector(`#menu a[href="${current}"]`);
      activeLink.classList.add('active');
    }
  });

document.getElementById('menu-hidden').addEventListener('click', function () {
    const menu = document.getElementById('menu').classList.add('menu-hidden')
    const hiddenMenuButton = document.getElementById('menu-show').classList.remove('button-hidden')
    const showMenuButton = document.getElementById('menu-hidden').classList.add('button-hidden')
    
})


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
  
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");  
}


// message send scripts
const scriptURL = 'https://script.google.com/macros/s/AKfycbxWhVBpkqjamyabfYghvwIFoto6IHatfOqjXkAdLemRjhMnuqZryu7SbdyFwY3qltbr/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Succesfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        } )
        .catch(error => console.error('Error!', error.message))
    })
