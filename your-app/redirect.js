(function () {
  console.log(location);
  sessionStorage.redirect = location.href;
  var redirectTo = "/test-monorepo/your-app/";

  if (location.pathname.startsWith("/your-app/")) {
    redirectTo = "/test-monorepo/your-app/";
  };

  location.replace(redirectTo);
})();
