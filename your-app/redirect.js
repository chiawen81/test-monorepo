
var projectLevek = 2;
// NOTE:專案在第幾層目錄
var pathSegmentsToKeep = 2 + 1;
// NOTE:加上網域後面接的 "/"
var allowedPathSegments = ['your-app'];
// NOTE:目前有的 project

var l = window.location;
var pathSegments = l.pathname.split('/');

var shouldRedirect =
  (pathSegments.length > pathSegmentsToKeep) &&
  (allowedPathSegments.indexOf(pathSegments[pathSegmentsToKeep - 1]) !== -1);

if (shouldRedirect) {
  let url = l.protocol + '//' + l.hostname +
    (l.port ? ':' + l.port : '') +
    '/test-monorepo/your-app/' +
    pathSegments.slice(pathSegmentsToKeep).join('/') +  // 保留未找到的路徑部分
    (l.search || '') +
    (l.hash || '');
  window.location.replace(url);
}
