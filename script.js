console.log("connected")


// var addText = document.getElementById("addText")

// if (addText) {
// addText.addEventListener("click", function(event) {
//   console.log("clicked")
// })
// }

$("#submit").click(function (e) {
  console.log("clicked")
})

$("#addText").click(function (e) {
  console.log("clicked")
  var value = $("#addTextForm").val()
  $("#canvas").append("<div class="text">" + value + "</div><br>")
})
