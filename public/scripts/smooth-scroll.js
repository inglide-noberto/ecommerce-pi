$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        let  hash = this.hash;
        //position of to go srolled
        let position = 0;
  
        console.log(hash);
        if (hash == "#contact") {
            position= $(hash).offset().top
        } else {
            position = $(hash).offset().top - 160
        }
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (600) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body, main').animate({
            scrollTop: position
        }, 600, function(){});

        } 
    });
});

