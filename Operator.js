function task1()
{
    let num1 = parseInt(prompt("Enter a number 1: "));
    let num2 = parseInt(prompt("Enter a number 2: "));

    let result = (num1 + num2) < 4 ? "Below" : "Over";
    document.write(result);
}

function task2()
{
    let message = prompt("");
   message = message == 'Employee' ? 'Hello' : message == 'Director' ? 'Greetings' : 'No login';
    alert(message);
}