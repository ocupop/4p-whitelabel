// Cookie Management
Cookies.defaults = {
  path: '/',
  domain: '4pfoods.com',
  secure: true
};

let showIntro = Cookies.get('inova-intro');
let auth = Cookies.get('4pAuth');
if (!showIntro) {
  $('#introModal').modal('show');
  Cookies.set('inova-intro', "shown");
}

$('#introModal').on('shown.bs.modal', function () {
  Cookies.set('inova-intro', "shown");
});


// Test to see if the user is already authenticated and adjust wrapper accordingly.
if (auth) {
  console.log("Authenticated", auth);
} else {
  console.log("NOT Authenticated");
}

