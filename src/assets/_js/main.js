// Cookie Management
Cookies.defaults = {
  path: '/',
  domain: '4pfoods.com',
  secure: true
};

let showIntro = Cookies.get('inova-intro');
let loggedIn = Cookies.get('loggedIn');
if (!showIntro) {
  $('#introModal').modal('show');
  Cookies.set('inova-intro', "shown");
}

$('#introModal').on('shown.bs.modal', function () {
  Cookies.set('inova-intro', "shown");
});




