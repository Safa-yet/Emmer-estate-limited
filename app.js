  
 $(document).ready(function(){
    $("#owlemo").owlCarousel({
      loop: true,             // শেষের পর আবার শুরু হবে
      margin: 10,             // স্লাইডের মাঝে ফাঁকা জায়গা
      nav: true,              // previous / next arrow দেখাবে
      autoplay: true,         // অটো স্লাইড হবে
      autoplayTimeout: 5000,  // ৩ সেকেন্ড পর পর পরিবর্তন হবে
      responsive:{
        0:{ items:1 },        // মোবাইলে ১টা স্লাইড
          // ডেস্কটপে ৩টা
      }
    });
  });

