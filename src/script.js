const dropdown = document.getElementById('dropdown');
// dropdown.style.display = 'hidden';
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // accordion
  // const accordionHeader = document.querySelectorAll('.accordion-header')
  // accordionHeader.addEventListener('click', () => {
  //   console.log('clicked')
  // })
  // accordionHeader.forEach(accordionHeader => {
  //   accordionHeader.addEventListener('click', event =>{
  //     console.log('acc')
  //     accordionHeader.classList.toggle("active")
  //     const accordionBody = accordionHeader.nextElementSibling
  //     if(accordionHeader.classList.contains("active")){
  //       accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
  //     }
  //     else{
  //       accordionBody.style.maxHeight = 0
  //     }
  //   })
  // })



  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    title.addEventListener('click', () => {
      // Toggle the active class on the accordion item
      item.classList.toggle('active');
  
      // Toggle the display of the accordion content
      const content = item.querySelector('.accordion-content');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });