function addNumber(num) {
    document.getElementById('result').value += num;
}

function addOperator(op) {
    document.getElementById('result').value += op;
}

function calculate() {
    var expr = document.getElementById('result').value;
    var result;

    if (expr.includes('matrix')) {
        result = performMatrixOperation(expr);
    } else {
        result = eval(expr);
    }

    document.getElementById('result').value = result;
}

function performMatrixOperation(expr) {
    var operation = expr.split('matrix')[1].trim();

    if (operation === 'add') {
        // Perform matrix addition
        return performMatrixAddition();
    } else if (operation === 'subtract') {
        // Perform matrix subtraction
        return performMatrixSubtraction();
    } else if (operation === 'multiply') {
        // Perform matrix multiplication
        return performMatrixMultiplication();
    } else {
        // Handle invalid matrix operation
        return "Invalid matrix operation";
    }
}

function performMatrixAddition() {
    // Implement matrix addition logic here
    // ...

    return "Matrix addition result";
}

function performMatrixSubtraction() {
    // Implement matrix subtraction logic here
    // ...

    return "Matrix subtraction result";
}

function performMatrixMultiplication() {
    // Implement matrix multiplication logic here
    // ...

    return "Matrix multiplication result";
}

function clearResult() {
    document.getElementById('result').value = '';
}
