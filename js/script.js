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
