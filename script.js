const actualDate = new Date();
let correctDay;
let correctMonth;
let correctYear;
let actualDay = actualDate.getDate();
let actualMonth = actualDate.getMonth() + 1;
let actualYear = actualDate.getFullYear();
let resultYear = document.getElementById('year-result');
let resultMonth = document.getElementById('month-result');
let resultDay = document.getElementById('day-result');

let dayInput = document.getElementById('input-day');
let monthInput = document.getElementById('input-month');
let yearInput = document.getElementById('input-year');

let alertDay = document.getElementById('alert-day');
let alertMonth = document.getElementById('alert-month');
let alertYear = document.getElementById('alert-year');

let h1Day = document.getElementById('h1-day');
let h1Month = document.getElementById('h1-month');
let h1Year = document.getElementById('h1-year');

document.querySelector('.arrow').addEventListener('click', () => {

    let dayValue = parseInt(dayInput.value, 10);
    let monthValue = parseInt(monthInput.value, 10);
    let yearValue = parseInt(yearInput.value, 10);

    const dateToCompare = new Date(yearValue, monthValue - 1, dayValue);

    const daysInMonth = () =>{
  
        if (monthValue === 2) {
            if ((actualYear % 4 === 0 && actualYear % 100 !== 0) || actualYear % 400 === 0) {
                return 29;
            } else {
                return 28;
            }
        } else if ([4, 6, 9, 11].includes(monthValue)) {
            return 30;
        } else {
            return 31;
        };
    };

    validateEmptyInput();

    if (dayInput.value != '' || monthInput.value != '' || yearInput.value != '') {

        let resYear = actualYear - yearValue;
        let resMonth = actualMonth - monthValue;
        let resDay = actualDay - dayValue;

        if (Number.isInteger(Number(dayInput.value)) && Number.isInteger(Number(monthInput.value)) && Number.isInteger(Number(yearInput.value))) {
            if(dayValue > daysInMonth() || dayValue < 0){
            
                correctDay = false;
                dayInput.style.border = '1px solid red';
                alertDay.innerText = 'Must be a valid day';
                alertDay.style.color = 'red';
                h1Day.style.color = 'red';
                monthInput.style.border = '1px solid red';
                h1Month.style.color = 'red';
                yearInput.style.border = '1px solid red';
                h1Year.style.color = 'red';
            
            };
            
            if (monthValue > 12 || monthValue < 0) {

                correctMonth = false;
                monthInput.style.border = '1px solid red';
                alertMonth.innerText = 'Must be a valid month';
                alertMonth.style.color = 'red';
                h1Month.style.color = 'red';
                dayInput.style.border = '1px solid red';
                h1Day.style.color = 'red';
                yearInput.style.border = '1px solid red';
                h1Year.style.color = 'red';

            };

            if (yearValue > actualYear || yearValue < 0) {
                
                correctYear = false;
                yearInput.style.border = '1px solid red';
                alertYear.innerText = 'Must be a valid year';
                alertYear.style.color = 'red';
                h1Year.style.color = 'red';
                dayInput.style.border = '1px solid red';
                h1Day.style.color = 'red';
                monthInput.style.border = '1px solid red';
                h1Month.style.color = 'red';

            };

            if (dateToCompare > actualDate) {

                correctDay = false;
                dayInput.style.border = '1px solid red';
                alertDay.innerText = 'Must be a valid date';
                alertDay.style.color = 'red';
                h1Day.style.color = 'red';

                correctMonth = false;
                monthInput.style.border = '1px solid red';
                alertMonth.innerText = 'Must be a valid date';
                alertMonth.style.color = 'red';
                h1Month.style.color = 'red';

                correctYear = false;
                yearInput.style.border = '1px solid red';
                alertYear.innerText = 'Must be a valid date';
                alertYear.style.color = 'red';
                h1Year.style.color = 'red';                        
            };
            
            if (correctDay && correctMonth && correctYear && dateToCompare < actualDate){

                if (resDay < 0) {
                    resDay = daysInMonth() + Number(resDay);
                    resMonth--;
                }

                if (resMonth < 0) {
                    resMonth += 12;
                    resYear--;
                }

                dayInput.style.border = '';
                alertDay.innerText = '';
                h1Day.style.color = '';

                monthInput.style.border = '';
                alertMonth.innerText = '';
                h1Month.style.color = '';

                yearInput.style.border = '';
                alertYear.innerText = '';
                h1Year.style.color = '';

                resultYear.innerText = resYear;
                resultMonth.innerText = resMonth;
                resultDay.innerText = resDay;
                    
            }
        } else if (!Number.isInteger(Number(dayInput.value))){
            
            correctDay = false;
            dayInput.style.border = '1px solid red';
            alertDay.innerText = 'Must be a integer number';
            alertDay.style.color = 'red';
            h1Day.style.color = 'red';
            monthInput.style.border = '1px solid red';
            h1Month.style.color = 'red';
            yearInput.style.border = '1px solid red';
            h1Year.style.color = 'red';

        }
        
        if (!Number.isInteger(Number(monthInput.value))){

            correctMonth = false;
            monthInput.style.border = '1px solid red';
            alertMonth.innerText = 'Must be a integer number';
            alertMonth.style.color = 'red';
            h1Month.style.color = 'red';
            dayInput.style.border = '1px solid red';
            h1Day.style.color = 'red';
            yearInput.style.border = '1px solid red';
            h1Year.style.color = 'red';

        } 
        
        if (!Number.isInteger(Number(yearInput.value))){

            correctYear = false;
            yearInput.style.border = '1px solid red';
            alertYear.innerText = 'Must be a valid year';
            alertYear.style.color = 'red';
            h1Year.style.color = 'red';
            dayInput.style.border = '1px solid red';
            h1Day.style.color = 'red';
            monthInput.style.border = '1px solid red';
            h1Month.style.color = 'red';

        }
    }

});

function validateEmptyInput() {

    correctDay = true;
    correctMonth = true;
    correctYear = true;

    if (dayInput.value == ''){
        dayInput.style.border = '1px solid red';
        alertDay.innerText = 'This field is required';
        alertDay.style.color = 'red';
        h1Day.style.color = 'red';
    };
    
    if (monthInput.value == ''){
        monthInput.style.border = '1px solid red';
        alertMonth.innerText = 'This field is required';
        alertMonth.style.color = 'red';
        h1Month.style.color = 'red';
    };

    if (yearInput.value == ''){
        yearInput.style.border = '1px solid red';
        alertYear.innerText = 'This field is required';
        alertYear.style.color = 'red';
        h1Year.style.color = 'red';
    };

    dayInput.addEventListener('input', ()=>{
        if (this.value != '') {
            dayInput.style.border = '';
            alertDay.innerText = '';
            h1Day.style.color = '';
        }
    });
    
    monthInput.addEventListener('input', ()=>{
        if (this.value != '') {
            monthInput.style.border = '';
            alertMonth.innerText = '';
            h1Month.style.color = '';
        }
    });

    yearInput.addEventListener('input', ()=>{
        if (this.value != '') {
            yearInput.style.border = '';
            alertYear.innerText = '';
            h1Year.style.color = '';
        }
    });
};