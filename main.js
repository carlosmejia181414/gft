import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swal from 'sweetalert2'

document.querySelector('#app').innerHTML = `
  <h3 class="text-center fw-bold mt-3">GFT INVESTMENT</h3>
  <div class="container mt-4 ">

  <form id="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Capital :</label>
    <input class="form-control" type="number" name="capital" id="capital" placeholder="Insert your Capital" aria-label="default input example">
  </div>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Compound interest rate :</label>
  <input class="form-control" type="text" name="tasa" id="tasa" value="2.8%" placeholder="3%" aria-label="default input example">
</div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">How many Days :</label>
    <input class="form-control" type="number" name="days" id="days"  placeholder="Insert How many Days?" aria-label="default input example">
  </div>
  <button type="submit" class="btn btn-success mt-2">Submit</button>
  </form>


  <div id="table-responsive" class="table-responsive mt-4">
  <h5 class="mt-3 text-center mb-4 fw-bold"> TABLE OF PROFITS</h5> 
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
  </div>



  <div id="table-responsive16" class="table-responsive mt-5">
  <h5 class="mt-3 text-center mb-4 fw-bold"> TABLE OF PROFITS 16%</h5> 
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Days</th>
      <th scope="col">Capital</th>
      <th scope="col">Profits</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody id="bodyTable16">
  </tbody>
</table>
  </div>



  <div id="table-responsive11" class="table-responsive mt-5">
  <h5 class="mt-3 text-center mb-4 fw-bold"> TABLE OF PROFITS 11%</h5> 
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Days</th>
      <th scope="col">Capital</th>
      <th scope="col">Profits</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody id="bodyTable11">
  </tbody>
</table>
  </div>


  <div id="table-responsive6" class="table-responsive mt-5">
  <h5 class="mt-3 text-center mb-4 fw-bold"> TABLE OF PROFITS 6%</h5> 
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Days</th>
      <th scope="col">Capital</th>
      <th scope="col">Profits</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody id="bodyTable6">
  </tbody>
</table>
  </div>

  <div id="table-responsivet" class="table-responsive mt-5">
  <h5 class="mt-3 text-center mb-4 fw-bold"> TOTAL OF GAINS</h5> 
  <table class="table table-striped">
  <thead>
    <tr>
     </tr>
  </thead>
  <tbody id="bodyTablet">
  </tbody>
</table>
  </div>



  </div>
`
document.getElementById('form').addEventListener('submit', function(e){
e.preventDefault();
//get values from form
let capitalInput = document.getElementById('capital').value.trim(); // Obtener el valor y eliminar espacios en blanco al inicio y al final
let capital = parseFloat(capitalInput); // Convertir a un número de punto flotante
let daysInput = document.getElementById('days').value.trim(); // Obtener el valor y eliminar espacios en blanco al inicio y al final
let days = parseFloat(daysInput); // Convertir a un número de punto flotante
let tasaVal = document.getElementById('tasa').value;
let tasa = tasaVal.replace('%', '');
let totalInterest = 0;
let totalInterest16 = 0;
let totalInterest11 = 0;
let totalInterest6 = 0;

if(capitalInput === ""){
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Insert your Capital Amount"
  });
  return;
}

if(daysInput === ""){
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Insert the day investment"
  });
  return;
}

let divTables = document.getElementById('table-responsive');
divTables.style.display = 'block';
let divTables16 = document.getElementById('table-responsive16');
divTables16.style.display = 'block';
let divTables11 = document.getElementById('table-responsive11');
divTables11.style.display = 'block';
let divTables6 = document.getElementById('table-responsive6');
divTables6.style.display = 'block';
let divTablest = document.getElementById('table-responsivet');
divTablest.style.display = 'block';

let tasaP = tasa/100
let table = document.getElementById('bodyTable');
let table16 = document.getElementById('bodyTable16');
let table11 = document.getElementById('bodyTable11');
let table6 = document.getElementById('bodyTable6');
let tablet = document.getElementById('bodyTablet');
table.innerHTML = "";
table16.innerHTML = "";
table11.innerHTML = "";
table6.innerHTML = "";
tablet.innerHTML = "";

let capital16 = 0;
let capital11 = 0;
let capital6 = 0;
let capitalt = 0;

for (let i = 1; i <= days; i++) {
  let interestGain = capital * tasaP;
  let total = capital + interestGain;
  totalInterest = totalInterest + interestGain;

  //16%
  let interestGain16 = interestGain * 0.16;
  let total16 = capital16 + interestGain16;
  totalInterest16 = totalInterest16 + interestGain16;

    //11%
    let interestGain11 = (interestGain * 0.11) + (interestGain16 * 0.16);
    let total11 = capital11 + interestGain11;
    totalInterest11 = totalInterest11 + interestGain11;

        //6%
        let interestGain6 = (interestGain * 0.06) + (interestGain11 * 0.16) +  (interestGain16 * 0.11);
        let total6 = capital6 + interestGain6;
        totalInterest6 = totalInterest6 + interestGain6;

  //create line in the table
  const row =  document.createElement('tr');
  row.innerHTML = "<td>" + i + "</td>" +
                  "<td>" + capital.toFixed(2).toLocaleString() + "</td>" +
                  "<td>" + interestGain.toFixed(2).toLocaleString() + "</td>" +
                  "<td>" + total.toFixed(2).toLocaleString() + "</td>";

                  const row16 =  document.createElement('tr');
                  row16.innerHTML = "<td>" + i + "</td>" +
                                  "<td>" + capital16.toFixed(2).toLocaleString() + "</td>" +
                                  "<td>" + interestGain16.toFixed(2).toLocaleString() + "</td>" +
                                  "<td>" + total16.toFixed(2).toLocaleString() + "</td>";

                                  const row11 =  document.createElement('tr');
                                  row11.innerHTML = "<td>" + i + "</td>" +
                                                  "<td>" + capital11.toFixed(2).toLocaleString() + "</td>" +
                                                  "<td>" + interestGain11.toFixed(2).toLocaleString() + "</td>" +
                                                  "<td>" + total11.toFixed(2).toLocaleString() + "</td>";

                                                  const row6 =  document.createElement('tr');
                                                  row6.innerHTML = "<td>" + i + "</td>" +
                                                                  "<td>" + capital6.toFixed(2).toLocaleString() + "</td>" +
                                                                  "<td>" + interestGain6.toFixed(2).toLocaleString() + "</td>" +
                                                                  "<td>" + total6.toFixed(2).toLocaleString() + "</td>";

                                                                  const rowt =  document.createElement('tr');
                                                                  rowt.innerHTML = "<td>" + i + "</td>" +
                                                                                  "<td>Nivel" + i + "</td>" +
                                                                                  "<td>" + capital16.toFixed(2).toLocaleString() + "</td>" +
                                                                                  "<td>" + capital16.toFixed(2).toLocaleString() + "</td>";

//add information to the table
table.appendChild(row);
table16.appendChild(row16);
table11.appendChild(row11);
table6.appendChild(row6);

capital = total;
capital16 = total16;
capital11 = total11;
capital6 = total6;
}
const rowFinals = document.createElement('tr'); 
rowFinals.innerHTML = `<td colspan="2" class="text-right derecha">TOTAL</td>` + 
                      `<td class="negrita">${totalInterest.toFixed(2).toLocaleString()} </td>` +
                      `<td class="negrita">${capital.toFixed(2).toLocaleString()} </td>`;                      
table.appendChild(rowFinals);


const rowFinals16 = document.createElement('tr'); 
rowFinals16.innerHTML = `<td colspan="2" class="text-right derecha">TOTAL</td>` + 
                      `<td class="negrita">${totalInterest16.toFixed(2).toLocaleString()} </td>` +
                      `<td class="negrita">${capital16.toFixed(2).toLocaleString()} </td>`;
table16.appendChild(rowFinals16);

const rowFinals11 = document.createElement('tr'); 
rowFinals11.innerHTML = `<td colspan="2" class="text-right derecha">TOTAL</td>` + 
                      `<td class="negrita">${totalInterest11.toFixed(2).toLocaleString()} </td>` +
                      `<td class="negrita">${capital11.toFixed(2).toLocaleString()} </td>`;                      
table11.appendChild(rowFinals11);

const rowFinals6 = document.createElement('tr'); 
rowFinals6.innerHTML = `<td colspan="2" class="text-right derecha">TOTAL</td>` + 
                      `<td class="negrita">${totalInterest6.toFixed(2).toLocaleString()} </td>` +
                      `<td class="negrita">${capital6.toFixed(2).toLocaleString()} </td>`;                      
table6.appendChild(rowFinals6);

const rowFinalst = document.createElement('tr'); 
rowFinalst.innerHTML = `<td class="text-center negrita">TOTAL</td>` + 
                      `<td class="text-center negrita">${(totalInterest+totalInterest16+totalInterest11+totalInterest6).toFixed(2).toLocaleString()} </td>`;                      
tablet.appendChild(rowFinalst);

});
