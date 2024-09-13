
$( function() {
    $( "#input-checkIn" ).datepicker();
    $( "#input-checkOut" ).datepicker();
    $('.level-slider').slick({
      dots:true,
      slidesToShow:2,
     
      slidesToScrol:1,
      arrows:false,
      
      });
    });
    /*video */
    function videoToggle(){
        var video = $('.level-video').get(0); 
        if (video.paused) { 
            video.play();
            $('.video-control-play').hide();
            $('.video-control-pause').show();} else {
            video.pause();
            $('.video-control-play').show();
            $('.video-control-pause').hide();
        }
    }
    
    $('.video-control-play').click(function(){
        videoToggle();
    })
    
    $('.video-control-pause').click(function(){
        videoToggle();
    });
    