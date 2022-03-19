$(function() {
    // navbar color change on scroll
    $(document).scroll(function() {
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    })
    // login modal
    $("#loginButton").click(function() {
        $("#loginModal").modal("show")
    })

    $("#signupButton").click(function() {
        $("#signupModal").modal("show")
    })

    $("#tryButton").click(function() {
        $("#signupModal").modal("show")
    })

  })