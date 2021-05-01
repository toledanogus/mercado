
let list = [
  "Ejote",
  "Chile Poblano",
  "Manzana",
  "Mango",
  "Guayaba",
  "Zanahoria",
  "Chile Serrano",
  "Tomate",
  "Jitomate",
  "Cebolla",
  "Morrón",
  "Aguacate",
  "Uva",
];
let listUnitaria =[
  "Elote",
  "Melón",
]
let cantidad = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];
document.write('<table><tbody>');
for (let i = 0; i < list.length; i++) {
  document.write('<tr><td>' + '<label type="text" class="vv">' + list[i] + "</label>  <br></td>" +  '<td><select class="pp" name="' +  list[i] +  '">' );
  for (let j = 0; j < cantidad.length; j++) {
    document.write('<option value="' + cantidad[j] + '">' + cantidad[j] + "</option>");
  }
  document.write("</select>" + "&nbsp;</td>  </tr>");
}
document.write("</tbody></table>");

let cantidadUnitaria = [0,1,2,3,4,5,6,7,8,9,10];
document.write('<br /><table><tbody>');
for (let i = 0; i < listUnitaria.length; i++) {
  document.write('<tr><td>' + '<label type="text" class="vvu">' + listUnitaria[i] + "</label>  <br></td>" +  '<td><select class="ppu" name="' +  listUnitaria[i] +  '">' );
  for (let j = 0; j < cantidadUnitaria.length; j++) {
    document.write('<option value="' + cantidadUnitaria[j] + '">' + cantidadUnitaria[j] + "</option>");
  }
  document.write("</select>" + "&nbsp;</td>  </tr>");
}
document.write("</tbody></table>");