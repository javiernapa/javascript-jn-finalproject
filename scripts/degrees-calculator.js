
//Calculate Tip
function calculateDegrees() {
  var degrees = document.getElementById("degrees").value;
  
  if (degrees === '') {
    return alert('Please specify some value');
  }
  
  var result = (degrees * 9/5) + 32;
  document.querySelector('#result span').innerHTML = result;
}

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateDegrees();
  
  // Prevents form submit
  return false;
}
