const form = document.querySelector("#loan-form");
   
form.addEventListener('submit' , calculateResults);


function calculateResults(e){

    e.preventDefault();

    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');

    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total');
    const totalInterest = document.querySelector('#total-interest');
    
    const principal = parseFloat(amount.value);
    
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12;
    
    const x = Math.pow(1 + calculatedInterest , calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    const loader = document.querySelector('#loader');
    const output = document.querySelector('#output');

    loader.style.display = 'block';
    setTimeout(() =>{
        loader.style.display = 'none';
    }, 700);

    setTimeout(function() {
        output.style.display ='block';
    }, 700);

    if (isFinite (monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

       
    }else{
       document.querySelector('#error-show').classList.toggle ('hidden');
    }
   
    };


























