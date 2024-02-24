import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.querySelector('#app').innerHTML = `
  <h1 class="text-center mt-5">Earnings in GFT</h1>
  <div class="container mt-4 ">

  <form id="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Capital :</label>
    <input class="form-control" type="number" name="capital" id="capital" placeholder="Insert your Capital" aria-label="default input example">
  </div>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Compound interest rate :</label>
  <input class="form-control" type="text" name="tasa" id="tasa" value="3%" placeholder="3%" aria-label="default input example" disabled>
</div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">How many Days :</label>
    <input class="form-control" type="number" name="days" id="days"  placeholder="Insert How many Days?" aria-label="default input example">
  </div>
  <button type="submit" class="btn btn-success mt-2">Submit</button>
  </form>

  <h4 class="mt-3 text-center mb-2"> Table of Profits</h4> 
  <div id="table-responsive" class="table-responsive mt-3">

  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Days</th>
      <th scope="col">Capital</th>
      <th scope="col">Profits</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody id="bodyTable">
  </tbody>
</table>
<div class="descarga">
Descargar en Excel:
<button  onclick="descargarExcel() class="imgButton"><img src="./excel.png" /></button>
</div>
  </div>
  </div>
`
document.getElementById('form').addEventListener('submit', function(e){
e.preventDefault();

//get values from form
let capital = parseFloat(document.getElementById('capital').value);
let days = parseFloat(document.getElementById('days').value);
let tasaVal = document.getElementById('tasa').value;
let tasa = tasaVal.replace('%', '');
let totalInterest = 0;

let tasaP = tasa/100
let table = document.getElementById('bodyTable');

table.innerHTML = "";

for (let i = 1; i <= days; i++) {
  let interestGain = capital * tasaP;
  let total = capital + interestGain;
  totalInterest = totalInterest + interestGain;

  //create line in the table
  const row =  document.createElement('tr');
  row.innerHTML = "<td>" + i + "</td>" +
                  "<td>" + capital.toFixed(2) + "</td>" +
                  "<td>" + interestGain.toFixed(2) + "</td>" +
                  "<td>" + total.toFixed(2) + "</td>";

//add information to the table
table.appendChild(row);
capital = total;
}
const rowFinals = document.createElement('tr'); 
rowFinals.innerHTML = `<td colspan="2" class="text-right derecha">TOTAL</td>` + 
                      `<td class="negrita">${totalInterest.toFixed(2)} </td>` +
                      `<td class="negrita">${capital.toFixed(2)} </td>`;
                      ;
table.appendChild(rowFinals);

});

// function descargarExcel() {
//   // Seleccionar la tabla
//   var tabla = document.getElementById("table-responsive");

//   // Crear una matriz vacía para almacenar los datos de la tabla
//   var data = [];

//   // Recorrer las filas de la tabla y agregar los datos a la matriz
//   for (var i = 0; i < tabla.rows.length; i++) {
//       var rowData = [];
//       for (var j = 0; j < tabla.rows[i].cells.length; j++) {
//           rowData.push(tabla.rows[i].cells[j].innerText);
//       }
//       data.push(rowData);
//   }

//   // Crear un nuevo libro de Excel
//   var workbook = XLSX.utils.book_new();

//   // Convertir la matriz de datos a una hoja de Excel
//   var worksheet = XLSX.utils.aoa_to_sheet(data);

//   // Añadir la hoja de Excel al libro
//   XLSX.utils.book_append_sheet(workbook, worksheet, 'Tabla');

//   // Generar un archivo binario de Excel
//   var archivoBinario = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

//   // Convertir el archivo binario a Blob
//   var blob = new Blob([s2ab(archivoBinario)], { type: "application/octet-stream" });

//   // Descargar el archivo Excel
//   saveAs(blob, "tabla.xlsx");
// }

// // Función para convertir texto en binario
// function s2ab(s) {
//   var buf = new ArrayBuffer(s.length);
//   var view = new Uint8Array(buf);
//   for (var i = 0; i < s.length; i++) {
//       view[i] = s.charCodeAt(i) & 0xFF;
//   }
//   return buf;
// }


