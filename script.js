window.jsPDF = window.jspdf.jsPDF;

function addNewWEField() {
 

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewPRField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("prField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let prOb = document.getElementById("pr");
  let prAddButtonOb = document.getElementById("prAddButton");

  prOb.insertBefore(newNode, prAddButtonOb);
}

//generating cv
function generateCV() {
  // console.log("generating CV");

  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;

  //direct

  document.getElementById("nameT2").innerHTML = nameField;

  //contact
  document.getElementById("contactT").innerHTML = document.getElementById(
    "contactField"
  ).value;

  document.getElementById("mailT").innerHTML = document.getElementById(
    "mailField"
  ).value;

  //address
  document.getElementById("addressT").innerHTML = document.getElementById(
    "addressField"
  ).value;

  document.getElementById("fbT").innerHTML = document.getElementById(
    "fbField"
  ).value;
  
  document.getElementById("instaT").innerHTML = document.getElementById(
    "instaField"
  ).value;
  document.getElementById("linkedT").innerHTML = document.getElementById(
    "linkedField"
  ).value;

  //objective

  document.getElementById("objectiveT").innerHTML = document.getElementById(
    "objectiveField"
  ).value;

  
  //we

  let wes = document.getElementsByClassName("weField");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //aq

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;


  let prs = document.getElementsByClassName("prField");

  let str2 = "";

  for (let e of prs) {
    str2 += `<li> ${e.value} </li>`;
  }

  document.getElementById("prT").innerHTML = str2;

  //code for setting image

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}


function printCV() {
  window.print();
}


// function downloadPDF() {
//   html2canvas(document.querySelector("#cv-template")).then((canvas) => {
//     let base64image = canvas.toDataURL("image/png");
//     console.log(base64image);

//     let pdf;

//     if (
//       toldCompany.textContent == "" &&
//       toldjob.textContent == "" &&
//       tstartDate.textContent == "" &&
//       tendDate.textContent == "" &&
//       tjobdesc.textContent == ""
//     ) {
//       pdf = new jsPDF("p", "px", [750, 700]); // 750 700
//       pdf.addImage(base64image, "PNG", 15, 15, 669, 722); //669 722
//     } else {
//       pdf = new jsPDF("p", "px", [940, 700]); // 750 700
//       pdf.addImage(base64image, "PNG", 15, 15, 669, 902); //669 722
//     }

//     pdf.save(nameT1.textContent + "'s Resume" + ".pdf");
//   });
// }