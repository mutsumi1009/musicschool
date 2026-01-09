
  // 生徒さんたちの声
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('.p-top-voice__slider', {
      type: 'loop',
      perPage: 3,      // PCでは3枚
      gap: '3.5rem',
      arrows: true,
      pagination: true,
    
      breakpoints: {
        767: {         
          perPage: 1,  
          gap: '1rem', 
          
        },
      },
    }).mount();
  });