function Calculate(){
    let para = document.getElementById('para');
    const currentYear = document.getElementById('currentYear').value;
    const birthYear = document.getElementById('birthYear').value;
    if (!currentYear || !birthYear ) {
        // Show an error message if any field is empty
        para.innerHTML = "Please fill out all the fields.";
        para.style.color = 'red';
        return;
      }
    const age = currentYear - birthYear;
    para.innerHTML = `Your age is ${age}.`
    para.style.color = 'green';
}