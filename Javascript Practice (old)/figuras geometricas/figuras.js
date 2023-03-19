function square_perimeter(){
    let inputget = parseFloat(document.getElementById("inputget").value);
    console.log(inputget)
    document.getElementById("inputset").value = inputget*4 +"cm";
}


function square_area(){
    let inputget = parseFloat(document.getElementById("inputget").value);
    console.log(inputget)
    document.getElementById("inputset").value = inputget**2 +"cm²";
}
function triangle_perimeter(){
    let inputget1 = parseFloat(document.getElementById("inputget1").value);
    let inputget2= parseFloat(document.getElementById("inputget2").value);
    let inputget3 = parseFloat(document.getElementById("inputget3").value);
    let plus = inputget1 + inputget2 + inputget3;
    document.getElementById("inputset1").value = plus +"cm";
}
function triangle_area(){
    let inputget1 = parseFloat(document.getElementById("inputget1").value);
    let inputget2= parseFloat(document.getElementById("inputget4").value);
    let plus = (inputget1 * inputget2)/2;
    document.getElementById("inputset1").value = plus +"cm²";
}
function diameter(){
    let radio = parseFloat(document.getElementById("inputget5").value);
    document.getElementById("diameter_result").value= (radio*2) + "cm";
}
function circunference(){
    let radio = parseFloat(document.getElementById("inputget5").value);
    let plus = 2* radio *Math.PI;
    plus = Number.parseFloat(plus).toFixed(2)
    document.getElementById("diameter_result").value= plus + "cm";


}
function tri_area(){
    let radio = parseFloat(document.getElementById("inputget5").value);
    let plus = (radio**2)*Math.PI;
    plus = Number.parseFloat(plus).toFixed(2)
    document.getElementById("diameter_result").value= plus + "cm²";
}