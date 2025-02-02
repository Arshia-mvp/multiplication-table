const select1 = document.getElementById('num1');
const select2 = document.getElementById('num2');
const errorDiv = document.getElementById('error');
const table = document.getElementById('multiplicationTable');
for (let i = 1; i <= 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    select1.appendChild(option);
    select2.appendChild(option.cloneNode(true));
}
const option0 = document.createElement('option');
option0.value = "";
option0.text = "نمیخوام عددی انتخاب کنم";
select1.insertBefore(option0, select1.firstChild);
select2.insertBefore(option0.cloneNode(true), select2.firstChild);
function generateTable() {
    const num1 = parseInt(select1.value);
    const num2 = parseInt(select2.value);
    errorDiv.textContent = '';
    table.innerHTML = '';
    if (select1.value === "" || select2.value === "" || isNaN(num1) || isNaN(num2)) {
        errorDiv.textContent = 'عددی را انتخاب نکردین | لطفا دو عدد انتخاب کنید';
        return;
    }
    for (let i = 1; i <= num2; i++) {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        cell1.textContent = num1 + " x " + i + " = ";
        cell2.textContent = num1 * i;
    }
}
function generateTable() {
    const num1 = parseInt(select1.value);
    const num2 = parseInt(select2.value);
    errorDiv.textContent = '';
    table.innerHTML = '';
    if (select1.value === "" || select2.value === "" || isNaN(num1) || isNaN(num2)) {
        errorDiv.textContent = 'عددی را انتخاب نکردین | لطفا دو عدد انتخاب کنید';
        return;
    }
    for (let i = 1; i <= num2; i++) {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        cell1.textContent = num1 + " x " + i + " = ";
        cell2.textContent = num1 * i;
    }
}