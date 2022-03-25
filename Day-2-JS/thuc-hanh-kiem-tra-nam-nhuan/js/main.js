while (leapYear()) {
    leapYear();
}
function leapYear() {
    let year = parseInt(prompt("Enter the year: "));
    let yearType = "";
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        yearType = "leap year";
    } else {
        yearType = "Not leap year";
    }
    if (isNaN(year)) {
        alert("You not enter year yet!")
    } else  {
        alert(`${year} is ${yearType}`);
    }
    return year;
}