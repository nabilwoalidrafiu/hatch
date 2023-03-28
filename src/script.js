jQuery(document).ready(function(){
  jQuery('#menu_bar').hide()
  jQuery('.toggle_btn').click(function(){
    jQuery('#menu_bar').animate({width: 'toggle'});
  })
   jQuery('.accordion-item > button > svg.upAC').hide();
        jQuery('.accordion > .accordion-item > .accordion-content').hide();
          jQuery('.accordion-item').each(function(){
              jQuery(this).on('click', function(){
                jQuery(this).find('.accordion-title').toggleClass('font-semibold');
                jQuery(this).find('svg.upAC').toggle();
                jQuery(this).find('svg.downAC').toggle();
                jQuery(this).find('.accordion-content').slideToggle();
              })
            }
          )
          jQuery('.forCandidate').click(function() {
            jQuery('.candidateDropdown').toggleClass("show")
          })
          jQuery('.forEmployer').click(function() {
            jQuery('.employerDropdown').toggleClass("show")
          })
          jQuery('.showSidebar').click(function() {
            // jQuery('.sidebar').toggleClass("show")
            jQuery('.sidebar').animate({width: 'toggle'}, 200);
          })
          jQuery('.closeSidebar').click(function() {
            $('.sidebar').toggle();
          })
          $( window ).resize(function() {
            if( $( window ).width()>767){
              $('.sidebar').toggle(true);
            }else{
              $('.sidebar').toggle(false);
            }
            });
        const dropdown = document.getElementById('dropdown');
        dropdown.style.display = 'hidden';
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
          
   })
   
   function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
 
  