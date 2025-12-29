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

// --- TOPへ戻る（FVより下で表示） ---

function onScrollToTop() {
  const y = $(window).scrollTop();
  const threshold = 100;
  if (y > threshold) $toTopBtn.addClass('is-show');
  else $toTopBtn.removeClass('is-show');
}
$(window).on('scroll resize load', onScrollToTop);
onScrollToTop();


$toTopBtn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 500, 'linear');
});


/* ===============================================
# プラン表のカスタムスクロールバー連動
=============================================== */
$(function () {
  const $scrollArea = $('.p-plan-table__scroll'); // 表のスクロール枠
  const $scrollThumb = $('.p-plan-table__scroll-thumb'); // グレーの動く棒
  const $scrollBar = $('.p-plan-table__scroll-bar'); // 棒の土台

  // 要素が存在しないときのエラーを防ぐ
  if (!$scrollArea.length || !$scrollThumb.length) return;

  $scrollArea.on('scroll', function () {
    // 1. 表がどれくらいスクロールされたかの割合 (0〜1) を計算
    let scrollLeft = $(this).scrollLeft();
    let scrollWidth = $(this).get(0).scrollWidth - $(this).innerWidth();
    let ratio = scrollLeft / scrollWidth;

    // 2. 下のバーが動ける範囲を計算
    let barWidth = $scrollBar.width();
    let thumbWidth = $scrollThumb.width();
    let moveRange = barWidth - thumbWidth;

    // 3. 割合に応じて棒を移動
    $scrollThumb.css('transform', 'translateX(' + (moveRange * ratio) + 'px)');
  });
});