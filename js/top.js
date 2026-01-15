
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

  // よくあるご質問
  $(function () {
    // 最初の回答以外は隠しておく（最初からすべて閉じたい場合は .hide() だけでOK）
    $(".p-faq__answer").hide();
  
    $(".p-faq__question").on("click", function () {
      // クリックされた質問の次の要素（回答）をスライドで開閉
      $(this).next(".p-faq__answer").slideToggle(300);
      
      // クリックされた質問自体に 'is-open' クラスを付け外しする（矢印の回転用）
      $(this).toggleClass("is-open");
    });
  });