// window.jsPDF = window.jspdf.jsPDF;

// function previewFile() {
//   var preview = document.getElementById("fimg");
//   var file = document.querySelector("input[type=file]").files[0];
//   var templateImg = document.getElementById("timg");
//   var reader = new FileReader();

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = "assets/images/user.png";
//   }

//   reader.onloadend = function () {
//     preview.src = reader.result;
//     templateImg.src = reader.result;
//   };
// }

function addNewWeField()
{
  console.log("Vishaal");

  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("wefield");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder", "Other work experiences");


  let weOb = document.getElementById("we");
  let weAddbuttonOb = document.getElementById('weAddbutton');

  weOb.insertBefore(newNode,weAddbuttonOb);


}

function removeNewWeField()
{
  


}

function addNewskField()
{

  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("skfield");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder", "Other skills");


  let skOb = document.getElementById("sk");
  let skAddbuttonOb = document.getElementById('skAddbutton');

  skOb.insertBefore(newNode,skAddbuttonOb);


}