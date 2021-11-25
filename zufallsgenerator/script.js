function generate() {
    let Number1 = document.getElementById("number1").value;
    let Number2 = document.getElementById("number2").value;

    let AreaOfNumbers = parseInt(Number2) - parseInt(Number1);
    console.log(Number1 + " : " + Number2);

    let generatedNumber = Math.floor(Math.random() * AreaOfNumbers) + parseInt(Number1);
    document.getElementById("generatedNumber").innerHTML = generatedNumber;
}