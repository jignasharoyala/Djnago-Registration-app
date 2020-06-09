//fixed navbar
       
        $(window).scroll(function() {
            $('nav').toggleClass('down', $(this).scrollTop() > 10);
        });
   
// Dropdown

$('select').each(function () {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


// Owl Craousel

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000,
       nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.ambassadors .custom-nav', //Set AutoPlay to 3 seconds
 
      items : 6,
      responsive: {
        0:{
          items: 1
        },
        480:{
          items: 3
        },
        769:{
          items: 6
        },
        1024:{
            items: 4
        },
        1200:{
            items: 6
        }
    }
 
  });
 
});


//admin sidebar

  jQuery(function($) {

            $(".sidebar-dropdown").hover(function() {

                $(".sidebar-submenu").slideUp(200);
                if ($(this).hasClass("active")) {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this).removeClass("active");
                } else if($("sidebar-dropdown").hasClass("active")){
                    $(".sidebar-submenu").css("display","block");
                }


                 else {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this).next(".sidebar-submenu")
                        .slideDown(200);

                    $(this).addClass("active");

                    //$(".sidebar-dropdown.active").css("display","block");
                  

                }

                     $(".sidebar-wrapper .sidebar-menu .sidebar-dropdown.active .sidebar-submenu").css("display","block");
               
            });
        });

// -----------

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "+ Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "- Read less"; 
    moreText.style.display = "inline";
  }
}

$('#show-more-content').hide();

$('#show-more').click(function(){
    $('#show-more-content').show();
    $('#show-less').hide();
    $(this).hide();
});

$('#show-less').click(function(){
    $('#show-more-content').hide();
    $('#show-more').show();
    $(this).hide();
});

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $(".main-header").toggleClass("active");
});
$(".mobile-menu-overlay").click(function(){
  $(".main-header").removeClass("active");
});

 $(document).ready(function () {
            $('.switch').click(function () {
                $('.toggle-sec').css('display', 'block');
                $('.near-sweat').css('display', 'none');
                 $('#near1').css('display', 'none');
                 $('.near-sweat.sweat-block2.near1').css('display', 'block');
                 $('.near-sweat.block3').css('display', 'block');
            });
        });

  $(document).ready(function () {
            $('.switch.switch1').click(function () {
                $('.toggle-sec').css('display', 'none');
                $('.near-sweat').css('display', 'block');
                 $('#near1').css('display', 'block');
                 $('.near-sweat.sweat-block2.near1').css('display', 'none');
                 $('.near-sweat.block3').css('display', 'none');
            });
        });


  //partner slider

  $('#owl-demo1').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fal fa-angle-left'></i>",
    "<i class='fal fa-angle-right'></i>"
  ],
 
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

// CKEDITOR.replace( 'editor1' );
// CKEDITOR.on( 'instanceReady', function( evt )
//   {
//     var editor = evt.editor;
   
//    editor.on('change', function (e) { 
//    var text = $("<div/>").html(editor.getData()).text();
//     console.log(text);
//     });
//  });

 CKEDITOR.stylesSet.add('myStylesComboBox',[{
  name: 'Email Style',
  element: 'p',
  styles: {
            'margin-top':'0',
            'margin-right':'0',
            'margin-left':'0',
            'margin-bottom': '10px',
            'font-family':'Helvetica, Arial, sans-serif',
            'font-weight':'normal',
            'padding':'0',
            'text-align':'left',
            'line-height':'1.3',
            'font-size':'14px',
            'background-color':'yellow'
        }
}]);

  var ContentsCss = ['p{margin-top:0;margin-right:0;margin-left:0,margin-bottom: 10px,font-family:\'Helvetica, Arial, sans-serif\',font-weight:normal,padding:0,text-align:left,line-height:1.3,font-size:14px,background-color:yellow}'];

CKEDITOR.replace( 'editor1',{
  stylesSet: 'myStylesComboBox',
  contentsCss: ContentsCss
} );



$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});



// sidebar toggle

$(document).ready(function(){
  $(".toggle-btn").click(function(){
    $(".sidebar-toggle").addClass("active");
  });
});



        $('.pro_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            slide: 'li',
            asNavFor: '.pro_thumb'
        });
        $('.pro_thumb').slick({
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: false,
            centerPadding: "60px",
            infinite: true,
            vertical: true,
            speed: 1000,
            centerMode: true,
            autoplaySpeed: 2000,
            asNavFor: '.pro_slider',
            useTransform: true,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            adaptiveHeight: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 568,
                settings: {
                    vertical: false,
                }
            }]

        });





        /* smooth scroling start */
// $('.scroll').on('click', function(e){
//     $('html,body').animate({
//       scrollTop: $($(this).attr('href')).offset().top - 70
//     },100);
//     e.preventDefault();
//   });
    


// $(".toggle-btn").click(function(e) {
//         e.preventDefault();
//         $(".admin-page").toggleClass("active");
// });


