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
          // For candidate 
          jQuery('.forCandidate').click(function() {
            jQuery('.candidateDropdown').toggle()
          })
          jQuery(document).mouseup(function(e) {
            var container = $(".candidateDropdown");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
            });
            // For employer
          jQuery('.forEmployer').click(function() {
            // jQuery('.employerDropdown').toggleClass("show")
            jQuery('.employerDropdown').toggle()
          })
         jQuery(document).mouseup(function(e) {
          var container = $(".employerDropdown");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
              container.hide();
          }
          });
          jQuery('.showSidebar').click(function() {
            jQuery('.sidebar').animate({width: 'toggle'}, 200);
          })
          jQuery('.closeSidebar').click(function() {
            jQuery('.sidebar').animate({width: 'toggle'}, 200);
          })
          jQuery('.showIcon').hide()
          jQuery('.iconDiv').each(function () {
            jQuery(this).on('click', function () {
              jQuery(this).find('.showIcon').toggle();
            })
          })
          jQuery('.message-box').hide();
          jQuery('.user').click(function(){
            jQuery('.all-user').toggle()
            jQuery('.message-box').toggle()
          })
          jQuery('.back-message').click(function(){
            jQuery('.all-user').show()
            jQuery('.message-box').hide()
          })
          jQuery( window ).resize(function() {
            if( jQuery( window ).width()>768){
              jQuery('.sidebar').toggle(true);
            }else{
              jQuery('.sidebar').toggle(false);
            }
            });
          jQuery('.filterDropdown').hide()
          jQuery('.filterLabel').click(function(){
            jQuery(this).closest('.filterDiv').find('.filterDropdown').slideToggle();
          })
          
   })
   