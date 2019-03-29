// $('[target="whtlbl"]').on('click', function () {
//   console.log("iFrame source being updated");
// });

// Cookie Management
Cookies.defaults = {
  path: "/",
  domain: "4pfoods.com",
  secure: true
};

let showIntro = Cookies.get("inova-intro");
let auth = Cookies.get("4pAuth", { domain: '4pfoods.com' });
if (!showIntro) {
  $("#introModal").modal("show");
  Cookies.set("inova-intro", "shown");
}

$("#introModal").on("shown.bs.modal", function () {
  Cookies.set("inova-intro", "shown");
});

// Test to see if the user is already authenticated and adjust wrapper accordingly.
if (auth) {
  console.log("Authenticated", auth);
} else {
  console.log("NOT Authenticated");
}

// Prevent variables from being global
(function () {
  /*
      1. Inject CSS which makes iframe invisible
  */

  var div = document.createElement("div"),
    ref =
      document.getElementsByTagName("base")[0] ||
      document.getElementsByTagName("script")[0];

  div.innerHTML = "&shy;<style> iframe { visibility: hidden; } </style>";

  ref.parentNode.insertBefore(div, ref);

  /*
      2. When window loads, remove that CSS,
         making iframe visible again
  */

  window.onload = function () {
    div.parentNode.removeChild(div);
  };
})();
