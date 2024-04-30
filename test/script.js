let value = parseFloat(prompt("Enter a value in meters:"));
let options = parseFloat(prompt(
  "Choose one of the options:\n" +
  "\n1. Milímetro (mm)" +
  "\n2. Centímetro (cm)" +
  "\n3. Decímetro (dm)" +
  "\n4. Decâmetro (dam)" +
  "\n5. Hectômetro (hm)" +
  "\n6. Quilômetro (km)"
));

switch(options){
  case 1:
    alert(
      `The value of ${value}m converted to Millimeter(mm) is: ${value * 1000}mm`
    );
    break
  case 2:
    alert(
      `The value of ${value}m converted to Centimeter(cm) is: ${value * 100}cm`
    );
    break
  case 3:
    alert(
      `The value of ${value}m converted to Decimeter(dm) is: ${value * 10}dm`
    );
    break
  case 4:
    alert(
      `The value of ${value}m converted to Decameter(dam) is: ${value / 10}dam`
    );
    break
  case 5:
    alert(
      `The value of ${value}m converted to Hectometer(hm) is: ${value / 100}hm`
    );
    break
  case 6:
    alert(
      `The value of ${value}m converted to Kilometer(km) is: ${value / 1000}km`
    );
    break
  default:
    alert("Invalid option...")
}