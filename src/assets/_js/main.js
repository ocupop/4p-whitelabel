let showIntro = Cookies.get('inova-intro')
if (!showIntro) {
  // $('#introModal').modal('show');
  console.log("Add show modal");
}

$('#introModal').on('shown.bs.modal', function () {
  Cookies.set('inova-intro', true)
});
