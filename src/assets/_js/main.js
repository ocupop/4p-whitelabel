// Cookie Management

let showIntro = Cookies.get('inova-intro');
if (!showIntro) {
  // $('#introModal').modal('show');
  console.log("Add show modal");
}

$('#introModal').on('shown.bs.modal', function () {
  Cookies.set('inova-intro', true)
});

// const ocuCookies = {
//   path: '/',
//   domain: '',
//   expires: '',
//   secure: true
// }
// Cookies.defaults = {
//   path: '/',
//   secure: true
// };

// Cookies.set('key', 'value'); // Will be secure and have a path of '/'
// Cookies.expire('key'); // Will expire the cookie with a path of '/'

console.log(Cookies.get('wordpress_test_cookie'));