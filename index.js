function getData() {
  var DD = parseInt(document.getElementById("dname").value)
  var MM = parseInt(document.getElementById("mname").value)
  var CC = parseInt(document.getElementById("cname").value)
  var YY = parseInt(document.getElementById("yname").value)
  var checkBox=document.getElementById("male")
  if (DD < 1 || DD > 31) {
      alert("Enter a valid day");
  }
  else if (MM < 1 || MM > 12) {
      alert("Enter a valid month")
  }
  else if (CC < 1 || CC > 99) {
      alert("Enter a valid century")
  }
  else if (YY < 00 || YY > 99) {
      alert("Enter a valid year")
  }

  var dayOfWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7.;
  var num =  Math.abs(dayOfWeek.toFixed());
  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (checkBox.checked==true) {
      document.getElementById("output").innerHTML = ("Your Akan name is " + maleNames[num]);
  }
  else{
      document.getElementById("output").innerHTML = ("Your Akan name is " + femaleNames[num]);
  }
}