function getCalculatePrice(inoutId){
    const inputeField = document.getElementById(inoutId);
    const inputeFieldStiring = inputeField.value;
    const carentInputField = parseFloat(inputeFieldStiring);
    inputeField.value = '';
    return carentInputField;

}
function getIncome(inoutId){
    const inputeField = document.getElementById(inoutId);
    const inputeFieldStiring = inputeField.value;
    const carentInputField = parseFloat(inputeFieldStiring);
    return carentInputField;

}

function setCalculatePrice(element, newValue){
    const textElement = document.getElementById(element);
    textElement.innerText = newValue;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const foodPrice = getCalculatePrice('food-price');
    const rantPrice = getCalculatePrice('rent-price');
    const clothesPrice = getCalculatePrice('clothes-price');
    
    const totalPrice = clothesPrice + rantPrice + foodPrice;
    setCalculatePrice('total-expenses', totalPrice);

    const previousBlance = getIncome('total-income');
    const carentBlance = previousBlance - totalPrice;
    setCalculatePrice('balance', carentBlance)

})

document.getElementById('btn-save').addEventListener('click', function(){

    const saveBalance = getCalculatePrice('save-banance');
    const previousBlance = getIncome('total-income');
    const totalSaveBalance = (previousBlance / 100) * saveBalance;

    setCalculatePrice('total-save', totalSaveBalance);

    const calculateTotalBlance = document.getElementById('balance');
    const calculateTotalBlanceStiring = calculateTotalBlance.innerText;
    const newTotalBalance = parseFloat(calculateTotalBlanceStiring);
    const carentBlance = newTotalBalance - totalSaveBalance;
    setCalculatePrice('final-balance', carentBlance)
})