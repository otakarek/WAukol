function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  //prostor pro seberealizaci
  document.getElementById("vysledek").innerHTML = "Výsledek je: " + vyraz;
}

var input = document.getElementById("vyraz");

//spusti funkci, když uživatel zmáčkne enter
input.addEventListener("keyup", function(event) {
  //zrusi vychozi funkci klavesy
  event.preventDefault();
  //value of enter ==13
  if (event.keyCode === 13) {
    solveExpression();
  }
});
