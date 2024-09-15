
function addTransaction(){
    let text = document.getElementById("text").value;
    let amount = parseFloat(document.getElementById("amount").value);
    
    // html wali list uthayi humne
    const list = document.getElementById("list");

    // naya li element banaya
    const element = document.createElement('li');

    // adding dynamic class to element based on type of transaction
    if(amount>0){
        element.className = "income";
    }
    else{
        element.className = "expense";
    }

    // change value of income and expense
    updateBalance(amount);

    // storing positive value
    amount = Math.abs(amount);

    // setting content / values to new created list element
    element.textContent = text + " - $"+amount;

    // adding newly created list element (<li> tag) to the parent List
    list.appendChild(element);

    // clear fields
   document.getElementById("text").value="";
   document.getElementById("amount").value="";
}

function updateBalance(amount){

    // yaha pr hum income and expense ki values html se uthaenge
    let income = document.getElementById("money_income");
    let expense = document.getElementById("money_expense");

    // ab amount ke basis pr usse income ya toh expense mein add krenge
    // expense pr aage minus lagaya hai bcz final value store krte waqt hum usme abs value daalte hain 
    // toh expense pr naya expense add krne ke liye old ke aage -laga dete hain
    if (amount < 0){
        expense.innerHTML = Math.abs(-parseFloat(expense.innerHTML) + amount);
    }
    else{
        income.innerHTML = parseFloat(income.innerHTML) + amount;
    }

    // yaha hum final balance update krte hain based on income - expense
    let balance =document.getElementById("money_balance");
    balance.innerHTML = income.innerHTML - expense.innerHTML;

}