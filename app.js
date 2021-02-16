
let input = document.getElementById('input').value;
let result = document.getElementById('result');
let hide = document.getElementById('closeBtn');


//function checking validity of credit card
function validateCred() {
    
let input = document.getElementById('input').value;
let result = document.getElementById('result');
let hide = document.getElementById('closeBtn');



    if (input == "") {
      result.style.display= 'block'
      result.style.background= '#ED5252'
      result.style.borderColor= 'red'
      result.style.color= 'white'
      result.innerHTML = 'This field cannot be empty'
    } 
    else{

if(!isNaN(input)) {
      //converts the input to an array of numbers
      const cred = Array.from(input.split(''), Number)
      //copy the array and reverse its order
      let x = cred.slice()
      x.reverse()
    
      let sum = 0;
      for(i = 0; i < x.length; i++) {
        //doubles every second number and subtracts 9 if the result is > 9
        if(i%2==1){
          x[i] *= 2;
          if(x[i] > 9){
            x[i] -= 9
          }
        }
        //sums up all numbers in the array
        sum += x[i];
      }




      if (sum%10==0) {
        result.style.display= 'block'
        result.style.background= 'rgba(53,188,110,1)'
        result.style.borderColor= 'rgba(53,188,110,1)'
        result.style.color= 'white'
        result.innerHTML = 'This card is valid'
      } else {
        result.style.display= 'block'
        result.style.background= '#ED5252'
        result.style.color= 'white'
        result.style.borderColor= 'red'
        result.innerHTML = 'This card is invalid'
      }
      return true


if (result.style.display == 'block') {
  hide.style.display= 'block'
}
 else{
  hide.style.display= 'none'
 }

    } 


    else {
      alert('Enter a valid number')
      return false
    }

    }

}



function closeResult() {
  
  result.style.display= 'none';
  hide.style.display= 'none';

}
