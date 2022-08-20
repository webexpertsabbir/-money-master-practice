function getCalculatePrice(inputId){
    const inputeField = document.getElementById(inputId);
    const inputeFieldStiring = inputeField.value;
    const carentInputField = parseFloat(inputeFieldStiring);
    inputeField.value = '';
    return carentInputField;

}
function getIncome(inputId){
    const inputeField = document.getElementById(inputId);
    const inputeFieldStiring = inputeField.value;
    const carentInputField = parseFloat(inputeFieldStiring);
    return carentInputField;

}

function setCalculatePrice(element, newValue){
    const textElement = document.getElementById(element);
    textElement.innerText = newValue;
}

document.getElementById('btn-calculate').addEventListener('click', function(){

    const foodPrice1 = document.getElementById('food-price').value;
    const rantPrice1 = document.getElementById('rent-price').value;
    const clothesPrice1 = document.getElementById('clothes-price').value;
    if(isNaN(foodPrice1) == true || isNaN(rantPrice1) == true  || isNaN(clothesPrice1) == true) {
        alert('pleace input a number');
    }
    else{
        const foodPrice = getCalculatePrice('food-price');
        const rantPrice = getCalculatePrice('rent-price');
        const clothesPrice = getCalculatePrice('clothes-price');
        if(foodPrice < 0 || rantPrice < 0 || clothesPrice < 0){
            alert('Pleace inter posetive value')
            return;
        }
        const totalPrice = clothesPrice + rantPrice + foodPrice;
        const previousBlance = getIncome('total-income');
        const carentBlance = previousBlance - totalPrice;
        if(totalPrice > previousBlance){
            alert('apner taka kom ache')
            return;
        }
        else if(isNaN(carentBlance) == true){
            alert('apni input den ni');
            return;
        }
        setCalculatePrice('total-expenses', totalPrice);
        setCalculatePrice('balance', carentBlance)
    }

})

document.getElementById('btn-save').addEventListener('click', function(){

    const saveBalance = getCalculatePrice('save-banance');
    const previousBlance = getIncome('total-income');
    const totalSaveBalance = (previousBlance / 100) * saveBalance;
    if(previousBlance < totalSaveBalance){
        alert('ammaout er caite besi hoye gese');
        return;
    }

    setCalculatePrice('total-save', totalSaveBalance);

    const calculateTotalBlance = document.getElementById('balance');
    const calculateTotalBlanceStiring = calculateTotalBlance.innerText;
    const newTotalBalance = parseFloat(calculateTotalBlanceStiring);
    const carentBlance = newTotalBalance - totalSaveBalance;
    setCalculatePrice('final-balance', carentBlance)
})