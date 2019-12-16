// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>FizzBuzz</h1>`;

for(let i:number = 0; i < 100 ; i++){
  let fizzBuzz : string = "";
  if(i % 3 == 0){
    fizzBuzz += "Fizz";
  }
  if(i % 5 == 0){
    fizzBuzz += "Buzz";
  }
  if (fizzBuzz == ""){
    fizzBuzz = i.toString();
  }
  console.log(fizzBuzz);
}