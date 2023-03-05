
       

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

   jQuery(document).ready(function(){
   
  
        jQuery('.accordion > .accordion-item > .accordion-content').hide();
        jQuery('.chevron-up').hide();
        jQuery('.chevron-down').show();
        jQuery('.accordion-item').on('click', function(){
          if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active").find(".accordion-content").slideUp();
          } else {
            jQuery(".accordion > .accordion-item.active > .accordion-content").slideUp();
            jQuery(".accordion > .accordion-item.active").removeClass("active");
            jQuery(this).addClass("active").find(".accordion-content").slideDown();
            
          }
          return false;
        })
   })