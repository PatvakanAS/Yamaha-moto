$(document).ready(function(){
    var Menu = {

        el: {
            ham: $('.menu'),
            menuTop: $('.menu-top'),
            menuMiddle: $('.menu-middle'),
            menuBottom: $('.menu-bottom')
        },

        init: function() {
            Menu.bindUIactions();
        },

        bindUIactions: function() {
            Menu.el.ham
                .on(
                    'click',
                    function(event) {
                        Menu.activateMenu(event);
                        event.preventDefault();
                    }
                );
        },

        activateMenu: function() {
            Menu.el.menuTop.toggleClass('menu-top-click');
            Menu.el.menuMiddle.toggleClass('menu-middle-click');
            Menu.el.menuBottom.toggleClass('menu-bottom-click');
        }
    };

    Menu.init();
    $("#hamburger_menu").on("click", function () {
        $("#menu ,#menu_2").toggle(500)
            $("#menu, #menu_2").css({
                "display" : "block",
        });
    });


    // top caroucel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:5,
        loop:true,
        
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,

        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    // $(".plusLeft").on("click", function(){
    //     $("#moto_models_left img").css({
    //         "transform": "rotateY(-180deg)",
    //     })
    // })


    $(".moto_items img").on("click", function(){
        var imgSrc =  $(this).attr('src');
        $(".moto_model_images").attr("src", imgSrc);
    })

        
    $(".moto_items").on("click", function(){
        var selected = $(this).addClass("selected");
        var motoName = $(".selected p").html();
        $("#models_right_head h2").text(motoName);
        selected.removeClass("selected");
        // alert(motoName)
        
        var price = $("#price");
        switch (motoName) {
            case "YZF-R1S": price.text("$18,350"); break;
            case "YZF-R1M": price.text("$29,150"); break;
            case "YZF-R1": price.text("$17,350"); break;
            case "YZF-R6": price.text("$15,350"); break;
            case "YZF-R3": price.text("$38,850"); break;
              
            default:
              alert("Looking forward to the Weekend");
          }
    })

    // alert($("#models_right_head h2").text())







    

    

});
