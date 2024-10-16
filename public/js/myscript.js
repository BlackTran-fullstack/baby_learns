document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operatorElement = document.querySelector(
        'input[name="operator"]:checked'
    );

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please fill all fields");
        return;
    }

    if (!operatorElement) {
        alert("Please select an operator");
        return;
    }

    const operator = operatorElement.value;

    let result;

    switch (operator) {
        case "add":
            result = number1 + number2;
            break;
        case "sub":
            result = number1 - number2;
            break;
        case "mul":
            result = number1 * number2;
            break;
        case "div":
            if (number2 === 0) {
                alert("Cannot divide by zero");
                break;
            }
            result = number1 / number2;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").value = result;
});
