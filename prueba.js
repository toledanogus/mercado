var list = [
  "Jitomate",
  "Cebolla",
  "Tomate",
  "Aguacate",
  "Mango",
  "Papaya",
  "Lechuga",
  "Sandía",
  "Calabaza",
  "Chile Serrano",
  "Uva",
  "Guayaba",
  "Yansenes"
];
var cantidad = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];
document.write('<table width="200" border="1"> <tbody>');
for (let i = 0; i < list.length; i++) {
  document.write('<tr> <td align="center" valign="middle" bgcolor="#FFFFFF">' + '<label for="prod">' + list[i] + "</span></label>  <br></td>" +  '<td align="center"><select name="' +  list[i] +  '">' );
  for (let j = 0; j < cantidad.length; j++) {
    document.write('<option value="' + cantidad[j] + '">' + cantidad[j] + "</option>");
  }
  document.write("</select>" + "&nbsp;</td>  </tr>");
}
document.write("</tbody></table>");
