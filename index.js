function getSeason() {
  month = document.forms.date.month.value;
  // season = "";
  switch (month) {
    case "12":
    case "1":
    case "2":
      document.getElementsByTagName("p")[0].innerHTML = "The Season is : <B>WINTER</B>";
      break;
    case "3":
    case "4":
    case "5":
      document.getElementsByTagName("p")[0].innerHTML = "The Season is : <B>SPRING</B>";
      break;
    case "6":
    case "7":
    case "8":
        document.getElementsByTagName("p")[0].innerHTML = "The Season is : <B>SUMMER</B>";
      break;
    case "9":
    case "10":
    case "11":
      document.getElementsByTagName("p")[0].innerHTML = "The Season is : <B>AUTUMN</B>";
      break;

    default:
      // Handles the condition if number entered is not among the valid 12 months
      document.getElementsByTagName("p")[0].innerHTML = "";
      alert("Invalid Month number");
      break;
  }

  // document.write(season + "<br/>");
}
