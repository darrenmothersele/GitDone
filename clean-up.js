
isIssueListPage = function (url) {
  return url.match(/.*\/issues\/.*/i);
}
isIssuesPage = function (url) {
  return url.match(/.*\/issues/i);
}
isRepoPage = function (url) {
  return url.match(/.*\/github.com\/[^\/]+\/[^\/]+$/i);
}

cleanInterface = function () {
  url = document.URL;
  // Reset some clean-ups between pages
  $('.sunken-menu, .sunken-menu-group li').show();

  // Apply clean-up for this page
  if (isIssueListPage(url)) {
    $('.header, .pagehead-actions, .sunken-menu').hide();
    $('.subnav-item:nth-child(2)').hide();
  }
  if (isIssuesPage(url)) {
    $('.header, .pagehead-actions, .sunken-menu').hide();
    $('.protip').hide();
  }
  if (isRepoPage(url)) {
    $('.header, .pagehead-actions').hide();
    $('.sunken-menu-group li:not([aria-label=Issues])').hide();
    $('.overall-summary, .repository-lang-stats-graph').hide();
    $('.file-navigation, .commit-tease, .file-wrap').hide();
    $('.only-with-full-nav').hide();
  }
}

$(document).on('pjax:end', function(content, options) {
  cleanInterface();
});

$(document).ready(function () {
  cleanInterface();
});