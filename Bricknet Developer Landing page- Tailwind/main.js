// Toggle btn With For Mobile


 const openBtn = document.getElementById("toggleBtn");
  const closeBtn = document.getElementById("toggleClose");
  const openBox = document.getElementById("box");

  openBtn.addEventListener("click", function (e) {
    
    openBox.classList.add("show-menu");
  });

  closeBtn.addEventListener("click", function (e) {
    // e.preventDefault();
    openBox.classList.remove("show-menu");
  });


  ScrollReveal().reveal('*', {
    origin: 'bottom',     // নিচ থেকে আসবে
    distance: '40px',     // কত দূর থেকে আসবে
    duration: 1000,       // কত সময় ধরে animate হবে
    easing: 'ease-in-out',// smooth transition
    interval: 100,        // একটার পর একটা করে আসবে
    reset: false          // একবারই animate হবে
  });



