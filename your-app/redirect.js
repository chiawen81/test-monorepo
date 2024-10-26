
var pathSegmentsToKeep = 2;
// NOTE:專案在第幾層目錄

var allowedPathSegments = ['your-app'];
// NOTE:目前有的 project

var l = window.location;
var pathSegments = l.pathname.split('/') - 1;
// NOTE:去除網域後面接的 "/"

var shouldRedirect =
  (pathSegments.length > pathSegmentsToKeep) &&
  (allowedPathSegments.indexOf(pathSegments[pathSegmentsToKeep - 1]) !== -1);

if (shouldRedirect) {
  let url = l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + '/test-monorepo/your-app/' + l.search + l.hash;
  window.location.replace(url);
}
