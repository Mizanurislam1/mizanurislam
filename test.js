$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        
    });

    // slide-up script


    

    // toggle menu/navbar script
   

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});