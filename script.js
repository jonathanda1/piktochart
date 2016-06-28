console.log("connected")

// Adding images to canvas
$("#submit").click(function (e) {
  console.log("submitImg clicked")
  var value = $("#imgFile").val()
  $("#canvas").append("<img class='images' src='" + value + "'><br>")
})

// function uploadImg () {
//   console.log("clicked")
//   $(function () {
//     console.log("first")
//     $(":file").change(function () {
//       console.log("second")
//         if (this.files && this.files[0]) {
//       console.log("third")
//             var reader = new FileReader();
//       console.log("fourth")
//             reader.onload = imageIsLoaded;
//       console.log("fifth")
//             reader.readAsDataURL(this.files[0]);
//         }
//     });
// });
// }

// function imageIsLoaded(e) {
//     $('#myImg').attr('src', e.target.result);
// };

// Adding text to canvas
$("#addText").click(function (e) {
  console.log("addText clicked")
  var value = $("#addTextForm").val()
  $("#canvas").append("<div class='text'>" + value + "</div><br>")
  $("#addTextForm").val('')
})
