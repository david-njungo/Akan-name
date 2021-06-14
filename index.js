function getData() {
    var DD = parseInt(document.getElementById("dname").value)
    var MM = parseInt(document.getElementById("mname").value)
    var CC = parseInt(document.getElementById("cname").value)
    var YY = parseInt(document.getElementById("yname").value)
    if (DD < 1 || DD > 31) {
        alert("Enter a valid day");
    }
    else if (MM < 1 || MM > 12) {
        alert("Enter a valid month")
    }
    else if (CC < 1 || CC > 20) {
        alert("Enter a valid century")
    }
    else if (YY < 0 || YY > 21) {
        alert("Enter a valid year")
    }
    let dayOfWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
