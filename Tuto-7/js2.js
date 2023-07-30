function calculate() {
    //input marks
    const mark1 = parseInt(document.getElementById('mark1').value);
    const mark2 = parseInt(document.getElementById('mark2').value);
    const mark3 = parseInt(document.getElementById('mark3').value);
    const mark4 = parseInt(document.getElementById('mark4').value);
    const mark5 = parseInt(document.getElementById('mark5').value);

    //calculate
    const total = mark1 + mark2 + mark3 + mark4 + mark5;
    const average = total/5;

    //display output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
                <p>Total Marks : ${total}</p>
                <p>Average Marks : ${average}</p> `;

    //check if
    if (average > 30) {
        alert('Congrats! you passed');
    }
    else {
        alert('Better luck next time')
    }
}