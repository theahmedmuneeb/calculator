const inputt1 = document.getElementById("input_t1");
const inputt2 = document.getElementById("input_t2");
const inputt3 = document.getElementById("input_t3");
const inputt4 = document.getElementById("input_t4");
const inputa1 = document.getElementById("input_a1");
const inputa2 = document.getElementById("input_a2");
const inputa3 = document.getElementById("input_a3");
const inputa4 = document.getElementById("input_a4");
const TArea = document.querySelector(".t_area_in");
const TGpd = document.querySelector(".t_gpd");
const TDensity = document.querySelector(".t_density");
const TCpd = document.querySelector(".t_cpd");
const AArea = document.querySelector(".a_area_in");
const AGpd = document.querySelector(".a_gpd");
const ADensity = document.querySelector(".a_density");
const ACpd = document.querySelector(".a_cpd");

// Function to add commas to a number for better formatting
function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// add value from T to A
var v2aNcpp = document.getElementById('input_t4');
var v2aDcpp = document.getElementById('input_a4');
v2aNcpp.addEventListener('input', function() {
  v2aDcpp.value = v2aNcpp.value;
});
var v2aNdst = document.getElementById('input_t3');
var v2aDdst = document.getElementById('input_a3');
v2aNdst.addEventListener('input', function() {
  v2aDdst.value = v2aNdst.value;
});
// Calculate T area
function calculateTArea() {
  const value1 = parseFloat(inputt1.value);
  const value2 = parseFloat(inputt3.value);

  if (isNaN(value1) || isNaN(value2)) {
    TArea.textContent = "0";
  } else {
    const result = Math.round(value1 * 12 * value2);
    const formattedResult = addCommas(result);
    TArea.textContent = formattedResult;
  }
}
inputt1.addEventListener("input", calculateTArea);
inputt3.addEventListener("input", calculateTArea);
// Calculate T GPD
function calculateTGpd() {
  const value1 = parseFloat(inputt1.value);
  const value2 = parseFloat(inputt2.value);
  const value3 = parseFloat(inputt3.value);

  if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
    TGpd.textContent = "0";
  } else {
    const result = Math.round(((value1 * 12 * value3)*(value2*0.001))/231);
    const formattedResult = addCommas(result);
    TGpd.textContent = formattedResult;
  }
}
inputt1.addEventListener("input", calculateTGpd);
inputt2.addEventListener("input", calculateTGpd);
inputt3.addEventListener("input", calculateTGpd);
// Calculate T CPD
function calculateTCpd() {
  const value1 = parseFloat(inputt1.value);
  const value2 = parseFloat(inputt2.value);
  const value3 = parseFloat(inputt3.value);
  const value4 = parseFloat(inputt4.value);
  if (isNaN(value1) || isNaN(value2) || isNaN(value3) || isNaN(value4)) {
    TCpd.textContent = "0";
  } else {
    const result = Math.round((((value1 * 12 * value3)*(value2*0.001))/231)*16.8*value4);
    const formattedResult = addCommas(result);
    TCpd.textContent = formattedResult;
  }
}
inputt1.addEventListener("input", calculateTCpd);
inputt2.addEventListener("input", calculateTCpd);
inputt3.addEventListener("input", calculateTCpd);
inputt4.addEventListener("input", calculateTCpd);
// Calculate A area
function calculateAArea() {
  const value1 = parseFloat(inputa1.value);
  const value2 = parseFloat(inputt3.value);

  if (isNaN(value1) || isNaN(value2)) {
    AArea.textContent = "0";
  } else {
    const result = Math.round(value1 * 12 * value2);
    const formattedResult = addCommas(result);
    AArea.textContent = formattedResult;
  }
}
inputa1.addEventListener("input", calculateAArea);
inputt3.addEventListener("input", calculateAArea);
// Calculate A GPD
function calculateAGpd() {
  const value1 = parseFloat(inputa1.value);
  const value2 = parseFloat(inputa2.value);
  const value3 = parseFloat(inputt3.value);

  if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
    AGpd.textContent = "0";
  } else {
    const result = Math.round(((value1 * 12 * value3)*(value2*0.001))/231);
    const formattedResult = addCommas(result);
    AGpd.textContent = formattedResult;
  }
}
inputa1.addEventListener("input", calculateAGpd);
inputa2.addEventListener("input", calculateAGpd);
inputt3.addEventListener("input", calculateAGpd);
// Calculate A CPD
function calculateACpd() {
  const value1 = parseFloat(inputa1.value);
  const value2 = parseFloat(inputa2.value);
  const value3 = parseFloat(inputt3.value);
  const value4 = parseFloat(inputt4.value);
  if (isNaN(value1) || isNaN(value2) || isNaN(value3) || isNaN(value4)) {
    ACpd.textContent = "0";
  } else {
    const result = Math.round((((value1 * 12 * value3)*(value2*0.001))/231)*16.8*value4);
    const formattedResult = addCommas(result);
    ACpd.textContent = formattedResult;
  }
}
inputa1.addEventListener("input", calculateACpd);
inputa2.addEventListener("input", calculateACpd);
inputt3.addEventListener("input", calculateACpd);
inputt4.addEventListener("input", calculateACpd);
// calculate AMCPD
function AMCPD() {
  var aValue = parseFloat(document.querySelector('.a_cpd').innerText.replace(/,/g, ''));
  var tValue = parseFloat(document.querySelector('.t_cpd').innerText.replace(/,/g, ''));
  var result = aValue - tValue;
  document.querySelector('.amcpd').innerText = result.toLocaleString(); 
}
document.querySelector('.a_cpd').addEventListener('DOMSubtreeModified', AMCPD);
document.querySelector('.t_cpd').addEventListener('DOMSubtreeModified', AMCPD);
AMCPD();