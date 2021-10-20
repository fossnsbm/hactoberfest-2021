const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const cashGivenDiv = document.querySelector(".cash-given-input");
const returnChangeDiv = document.querySelector(".returnChange");

const output = document.querySelector("#output");

const nextButton = document.querySelector("#next-button")
const checkButton = document.querySelector("#check-button");

const errMessage = document.querySelector("#error-message");

const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", () => {
    hideError();
    if(Number(billAmount.value)>0){
        nextButton.style.display="none";
        cashGivenDiv.style.display = "block"
    }else{
        showErrorMessage("Please enter valid bill amount");
    }
})

checkButton.addEventListener("click", () => {
    clearNoOfNotes();
    hideError();

    let billAmountValue = Number(billAmount.value);
    let cashGivenValue = Number(cashGiven.value);
    
    if(billAmountValue > 0 && cashGivenValue > 0){
        if(!Number.isInteger(cashGivenValue)){
            showErrorMessage("Please enter valid cash amount");
            return;
        }
        if(billAmountValue > cashGivenValue){
            showErrorMessage("Given cash is less than bill amount");
            return;
        }
        calculateNotes(billAmountValue, cashGivenValue);
    }else{
        showErrorMessage("Please enter valid amounts")
    }
})

function calculateNotes(bill, cash) {
    let returnAmount = cash-bill;

    if(returnAmount < 1){
        showErrorMessage("No cash need to be returned");
        return;
    }
    returnChangeDiv.style.display = "block";

    for(let i = 0; i < availableNotes.length; i++){
        returnAmount = compare(returnAmount, availableNotes[i], i);
    }
}

function compare(remainder, noteAmount, index){
    if(remainder >= noteAmount){
        let notes = Math.floor(remainder/noteAmount);
        remainder = remainder - notes*noteAmount;
        noOfNotes[index].innerText = `${notes}`;
    }
    return remainder
}

function clearNoOfNotes(){
    for(let notes of availableNotes){
        notes.innerText = "";
    }
}

function hideError() {
    errMessage.style.display = "none";
}

function showErrorMessage(msg) {
    errMessage.style.display = "block";
    errMessage.innerText = msg;   
}