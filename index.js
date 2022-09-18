import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
app.innerHTML = `<h1>JS Starter</h1>`;

/*   for ( let diez ="#"; diez.length < 8; diez+="#"){  
console.log(diez)
}
 */

/* for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

 */

let grid = 8;
let fullgrid = grid * grid;
let output = '';

for (let i = 1; i <= fullgrid; i++) {
  if (i % 2 === 0) {
    output += ' ';
  } else {
    output += '#';
  }
  if (i % grid == 0) {
    output += '\n';
  }
}

console.log(output);

function toggleByte(arr1, arr2) {
  output = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] == 0) {
      if (arr1[i] == 255) {
        output.push(254);
      } else if (arr1[i] % 2 == 1) {
        output.push(arr1[i] + 1);
      } else {
        output.push(arr1[i]);
      }
    }
    if (arr2[i] == 1) {
      if (arr1[i] % 2 == 0) {
        output.push(arr1[i] + 1);
      } else {
        output.push(arr1[i]);
      }
    }
  }
  console.log(output);
}
toggleByte([12, 11, 255], [1, 1, 0]);
