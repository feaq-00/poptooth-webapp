// Preloader
$(window).on('load', function() {                               //  when loading, preloader will pop up 
    const loader = $('#preloader')                      
    loader.hide()                                               //  once finished loading, preloader image will hide
})

// scroll to top function
$(document).ready(function() {                                  // when documents (body) finish loading, execute function
    const backTop = $('#back-to-top')

    backTop.hide()                                              // hide on load

    $(window).scroll(function() {                               // function is executed when user scroll the window
        if ($(this).scrollTop() > 3000) {                       // Change 3000 to the height of your footer
          backTop.fadeIn()
        } else {
          backTop.fadeOut()
        }
      })
    
      backTop.on('click', function() {
        $('html, body').animate({scrollTop : 0}, 100)           //  animates the scroll position of both HTML and body elements to the top
        // return false
      })
})

// Project secion
// arrow left and right
$(document).ready(function() {
    const P1 = $('#project1')                                     
    const P2 = $('#project2')                                      
    const P3 = $('#project3')                                      
    const P4 = $('#project4')
    const P5 = $('#project5')   
    const arrowLeft = $('#arrow-left')   
    const arrowRight = $('#arrow-right')   

    let currentPage = 1                                         //  set default page to 1
    let lastVisitedPage = 1                                     //  to update currentPage

    arrowRight.on('click', function() {                         //  upon clicking arrow-right, it will proceed to the next content
        currentPage++

        if (currentPage === 2) {
            P2.removeAttr('hidden')                             //  remove the attribute of hidden
            P1.after(P2)                                        //  swap the position of project1 and project2
            P1.detach()                                         //  detach project1 afterwards, detach meaning it remove the parent element but keeps the child element and event handlers intact
        } else if (currentPage === 3) {
            P3.removeAttr('hidden')                          
            P2.after(P3)     
            P2.detach()
        } else if (currentPage === 4) {
            P4.removeAttr('hidden')                          
            P3.after(P4)         
            P3.detach()
        } else if (currentPage === 5) {
            P5.removeAttr('hidden')                          
            P4.after(P5)     
            P4.detach()                 
        } else if (currentPage === 6) {
            currentPage = 1      
            P5.after(P1)     
            P5.detach()  
        } 

        if (currentPage > lastVisitedPage) {                    //  update lastVisitedPage if the user proceeds to a new page
            lastVisitedPage = currentPage
        }
    })

    arrowLeft.on('click', function() {                          // repeat but for previous content
        currentPage--

        if (currentPage === 1) {
            P2.before(P1);                                      //  inserts an HTML element before another element, effectively swapping them
            P2.detach();
        } else if (currentPage === 2) {
            P2.removeAttr('hidden');
            P3.before(P2);
            P3.detach();
        } else if (currentPage === 3) {
            P3.removeAttr('hidden');
            P4.before(P3);
            P4.detach();
        } else if (currentPage === 4) {
            P4.removeAttr('hidden');
            P5.before(P4);
            P5.detach();
        } else if (currentPage === 0) {
            currentPage = 5;
            P5.removeAttr('hidden')
            P1.before(P5);
            P1.detach();
        }

        if (currentPage < lastVisitedPage) {                    // update lastVisitedPage if the user goes back to a previous page
            lastVisitedPage = currentPage
        }
    })
})


// Video 1
// creates a function to open up a new pop-up to play video
$(document).ready(function() {
    $('#playButton1').on('click', function() {                  //  upon clicking the play button, open up a modal to display the videos
        const modal = $('#myModal1')
        const close = $('.close')

        modal.css('display', 'block')                           //  change css property of none to block

        close.on('click', function() {                          //  when clicking the X logo, closes the modal and resets the video playback
            modal.css('display', 'none')
            $('#myVideo1').get(0).pause()                       //  pause the video
            $('#myVideo1').get(0).currentTime = 0               //  restart the video
        })

        $(window).on('click', function() {                      //  when clicking outside of the modal, closes the modal and resets the video playback
            if ($(event.target).is(modal)) {
                modal.css('display', 'none')
                $('#myVideo1').get(0).pause()                   //  pause the video
                $('#myVideo1').get(0).currentTime = 0           //  resets the video
            }
        })
        $('#myVideo1').get(0).play()                            //  automatically play the video after clicking the play button
    })

// Video 2
    $('#playButton2').on('click', function() {                  //  repeat for other 4 videos
        const modal = $('#myModal2')
        const close = $('.close')

        modal.css('display', 'block')

        close.on('click', function() {
            modal.css('display', 'none')
            $('#myVideo2').get(0).pause()
            $('#myVideo2').get(0).currentTime = 0
        })

        $(window).on('click', function() {
            if ($(event.target).is(modal)) {
                modal.css('display', 'none')
                $('#myVideo2').get(0).pause()
                $('#myVideo2').get(0).currentTime = 0
            }
        })
        $('#myVideo2').get(0).play()
    })

// Video 3
    $('#playButton3').on('click', function() {
        const modal = $('#myModal3')
        const close = $('.close')

        modal.css('display', 'block')

        close.on('click', function() {
            modal.css('display', 'none')
            $('#myVideo3').get(0).pause()
            $('#myVideo3').get(0).currentTime = 0
        })

        $(window).on('click', function() {
            if ($(event.target).is(modal)) {
                modal.css('display', 'none')
                $('#myVideo3').get(0).pause()
                $('#myVideo3').get(0).currentTime = 0
            }
        })
        $('#myVideo3').get(0).play()
    })

// Video 4
    $('#playButton4').on('click', function() {
        const modal = $('#myModal4')
        const close = $('.close')

        modal.css('display', 'block')

        close.on('click', function() {
            modal.css('display', 'none')
            $('#myVideo4').get(0).pause()
            $('#myVideo4').get(0).currentTime = 0
        })

        $(window).on('click', function() {
            if ($(event.target).is(modal)) {
                modal.css('display', 'none')
                $('#myVideo4').get(0).pause()
                $('#myVideo4').get(0).currentTime = 0
            }
        })
        $('#myVideo4').get(0).play()
    })

// Video 5
    $('#playButton5').on('click', function() {
        const modal = $('#myModal5')
        const close = $('.close')

        modal.css('display', 'block')

        close.on('click', function() {
            modal.css('display', 'none')
            $('#myVideo5').get(0).pause()
            $('#myVideo5').get(0).currentTime = 0
        })

        $(window).on('click', function() {
            if ($(event.target).is(modal)) {
                modal.css('display', 'none')
                $('#myVideo5').get(0).pause()
                $('#myVideo5').get(0).currentTime = 0
            }
        })
        $('#myVideo5').get(0).play()
    })
})

// Submit button for contact page
$('#submit-button').on('click', function() {
    alert('Thank you for submitting, we will get back to you soon!')
})