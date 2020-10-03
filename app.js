// UI variables
const phonePlusBtn = document.getElementById("phonePlusBtn"),
      numPhone = document.getElementById("numPhone"),
      phoneMinusBtn = document.getElementById("phoneMinusBtn"),
      phoneValue= document.getElementById("phoneValue"),
      casePlusBtn = document.getElementById("casePlusBtn"),
      numCase = document.getElementById("numCase"),
      caseMinusBtn = document.getElementById("caseMinusBtn"),
      caseValue= document.getElementById("caseValue"),
      subTotal= document.getElementById("subTotal"),
      tax= document.getElementById("tax"),
      total= document.getElementById("total"),
      checkOutBtn = document.getElementById("checkOutBtn"),
      mainContent = document.getElementById("main-content"),
      thambson = document.querySelector(".thambson-parent");


    // Set Phone and Case Value
    let phonePrize = 1219,
        casePrize = 59;    

    //   Initialize the value
    numPhone.value = 0;
    numCase.value =0;
    phoneValue.textContent = 0;
    caseValue.textContent = 0;
    subTotal.textContent = 0;
    tax.textContent = 0;
    total.textContent = 0;



    // Add Event Listner 
    phonePlusBtn.addEventListener("click", function() {
        valueIncrease(numPhone);
        prize(numPhone, phoneValue, phonePrize);
        totalCalculation();
    });

    phoneMinusBtn.addEventListener("click", function() {
        valueDecrease(numPhone)
        prize(numPhone, phoneValue, phonePrize);
        totalCalculation();
    });

    casePlusBtn.addEventListener("click", function() {
        valueIncrease(numCase);
        prize(numCase, caseValue, casePrize);
        totalCalculation();
    });

    caseMinusBtn.addEventListener("click", function() {
        valueDecrease(numCase);
        prize(numCase, caseValue, casePrize);
        totalCalculation();
    });

    // Checkout Button
    checkOutBtn.addEventListener("click", function() {
        thambson.style.display= "block";
        mainContent.style.display = "none";
    })


    // Functions
    function valueIncrease(val) {
        val.value++;        
    }

    function valueDecrease(val) {
        val.value--;    
    }

    // prize
    function prize(numProduct, productValue ,prize) {
        let numItem = parseInt(numProduct.value);
        if(numItem >= 0) {
            productValue.textContent = numItem * prize;
        } else {
        numPhone.value = 0;
        numCase.value =0;
        }
    }

    // Total
    function totalCalculation() {
        subTotal.textContent = parseInt(phoneValue.textContent) + parseInt(caseValue.textContent);
        tax.textContent = (parseInt(subTotal.textContent) * 0.13).toFixed(2); 
        total.textContent = (parseFloat(subTotal.textContent) + parseFloat(tax.textContent)).toFixed(2);

    }

