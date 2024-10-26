var pathSegmentsToKeep = 2;
// NOTE:
// project ex:`your-app` 在第幾層目錄
// 目前是第二層=> https://chiawen81.github.io/test-monorepo/your-app/

var allowedPathSegments = ['your-app'];
// NOTE:目前有的 project

var l = window.location;
var pathSegments = l.pathname.split('/');

var shouldRedirect =
  (pathSegments.length > pathSegmentsToKeep) &&
  (allowedPathSegments.indexOf(pathSegments[pathSegmentsToKeep - 1]) !== -1);

if (shouldRedirect) {
  window.location.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + '/test-monorepo/your-app/' + l.search + l.hash
  );
}
