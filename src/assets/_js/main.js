let showIntro = Cookies.get('inova-intro')
if (!showIntro) {
  // $('#introModal').modal();
  console.log("show modal");
}

$('#introModal').on('close', function () {
  Cookies.set('inova-intro', true)
});
