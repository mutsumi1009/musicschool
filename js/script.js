//  --- ハンバーガーメニュー ---
$(function () {
    const $hamburger   = $('.c-hamburger');
    const $navSp       = $('.p-header__nav-sp');
   
    const $spLinks     = $('.p-header__nav-sp a');
    const $toTopBtn    = $('.js-to-top');  
  
    function toggleMenu() {
      $hamburger.toggleClass('is-open');
      $navSp.toggleClass('is-open');
    //   $hamburgerBg.toggleClass('is-open');
  
      if ($toTopBtn.length) {
        $toTopBtn.toggleClass('is-hidden-temp');
      }
    }
      /*：閉じる関数 */
    function closeHamburger() {
      $hamburger.removeClass('is-open');
      $navSp.removeClass('is-open');
    //   $hamburgerBg.removeClass('is-open');
  
      if ($toTopBtn.length) {
        $toTopBtn.removeClass('is-hidden-temp');
      }
    }

  
    $hamburger.on('click', toggleMenu);
    // $hamburgerBg.on('click',closeHamburger);
    $spLinks.on('click', closeHamburger);
  });

  
// // --- ヘッダーの背景色切り替え ---
// const $header = $('.js-header');
// const $fv = $('.fv');
// const $toTopBtn = $('.js-to-top');

// function changeHeaderBg() {
//   if (!$header.length || !$fv.length) return;
//   const fvBottom = $fv.offset().top + $fv.outerHeight();
//   if ($(window).scrollTop() > fvBottom) {
//     $header.css('background-color', '#4D9600');
//   } else {
//     $header.css('background-color', 'transparent');
//   }
// }
// $(window).on('scroll resize load', changeHeaderBg);
// changeHeaderBg();




//  // --- TOPへ戻る（FVより下で表示） ---

//  function onScrollToTop() {
//   const y = $(window).scrollTop();
//   const threshold = 100;
//   if (y > threshold) $toTopBtn.addClass('is-show');
//   else $toTopBtn.removeClass('is-show');
// }
// $(window).on('scroll resize load', onScrollToTop);
// onScrollToTop();


// $toTopBtn.on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: 0 }, 500, 'linear');
// });


// // --- スクロールでアニメーション発火 ---
// AOS.init({
// once: true,
// duration: 900,
// offset: 150,
// easing: 'ease-out',
// startEvent: 'load',
// disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
// });
// window.addEventListener('load', () => AOS.refresh());

$(function () {
  // 1. 操作する対象（2つのボタンが入った親要素）を取得
  const $fixedButtons = $('.js-fixed-buttons');

  // 2. 出し入れの判定関数
  function toggleFixedButtons() {
    const scrollY = $(window).scrollTop();
    const threshold = 100; // 100px以上スクロールしたら表示

    if (scrollY > threshold) {
      $fixedButtons.addClass('is-show'); // 表示用のクラスをつける
    } else {
      $fixedButtons.removeClass('is-show'); // 消す
    }
  }

  // 3. スクロール・リサイズ・読み込み時に実行
  $(window).on('scroll resize load', toggleFixedButtons);

  // 4. 初回実行（一番上でリロードした時に確実に消すため）
  toggleFixedButtons();

  // 5. TOPへ戻るボタン単体のクリック処理
  $('.js-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500, 'linear');
  });
});