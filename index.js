/* Future project add-ons?
1. Add a function to convert miles to kilometers (the reverse of convertToMiles() )

*/


let convertToMiles = () => {
  let output = document.querySelector("#output");
  let input = document.getElementById("kiloInput")
  let inputVal = input.value;
  
  let inputValConversion = inputVal * 0.62137;
  
  document.getElementById("output").innerHTML =  'The Number of Miles is:' + " " + inputValConversion;
  
}
