let calculation = '';

    function calculate(value){
      if (value === '='){
        let result = 0;

        if(calculation.includes('**') ||
          calculation.includes('//') ||
            calculation.includes('--') ||
          calculation.includes('++') ||
          calculation.includes('..') ||
          calculation.startsWith('*') ||
          calculation.startsWith('/') ||
          calculation.endsWith('*') ||
          calculation.endsWith('/') ||
          calculation.endsWith('-') ||
          calculation.endsWith('+') ||
          calculation.endsWith('%') ||
          calculation.includes('%%') ||
          calculation.startsWith('%')){
            result = 'Invalid';
          }else{
if(calculation.includes('+')){
          calculation = calculation.split('+');
         calculation.forEach((number)=>{
          if(number.includes('*') && number.includes('/')){
            let split = number.split(/([*/])/);
            let temp = Number(split[0]);
            split.forEach((number, index)=>{
              if(number === '*'){
                temp = temp * Number(split[index + 1]);
              }else if(number === '/'){
                temp = temp / Number(split[index + 1]);
              }
            })
            result = result + temp;
          }else if(number.includes('*')){
            let split = number.split('*');
            let temp = Number(split[0]);
            split.forEach((number, index)=>{
              if (index > 0){
                temp = temp * Number(number);
              }
            })
            result = result + temp;
          }else if(number.includes('/')){
            let split = number.split('/');
            let temp = Number(split[0]);
            split.forEach((number, index)=>{
              if(index > 0){
                temp = temp / Number(number);
              }
            })
            result = result + temp;
          }else {
            result = result + Number(number);
          }


         })

        }else if(calculation.includes('-')){
          let split = calculation.split('-');
          let result = Number(split[0]);
          split.forEach((number, index)=>{
            if(index > 0){
             if(number.includes('*')){
              let split = number.split('*');
              let temp = Number(split[0]);
              split.forEach((number,index)=>{
                if (index > 0){
                  temp = temp * Number(number);
                }
              })
              result = result - temp;
            }else if(number.includes('/')){
              let split = number.split('/');
              let temp = Number(split[0]);
              split.forEach((number, index)=>{
                if(index > 0){
                  temp = temp / Number(number);
                }
              })
              result = result - temp;
            }else if(number.includes('+')){
              let split = number.split('+');
              let temp = Number(split[0]);
              split.forEach((number, index)=>{
                if(index > 0){
                  temp = temp + Number(number);
                }
              })
              result = result - temp;
            }else{
              result = result - Number(number);
            }             
            }

          })

        }
        
        else if(calculation.includes('*') && calculation.includes('/')){
          let split = calculation.split(/([*/])/);
          let temp = Number(split[0]);
          split.forEach((number, index)=>{
            if(number === '*'){
              temp = temp * Number(split[index + 1]);
            }else if(number === '/'){
              temp = temp / Number(split[index + 1]);
            }
          })
          result = result + temp;
        }
        else if(calculation.includes('/')){
          let split = calculation.split('/');
          result = Number(split[0]);
          split.forEach((number, index)=>{
            if(index > 0){
              result = result / Number(number);
            }
          })
        }else if(calculation.includes('*')){
          let split = calculation.split('*');
          result = Number(split[0]);
          split.forEach((number, index)=>{
            if (index > 0){
              result = result * Number(number);
            }
          })
        }
        
        calculation = result;
          }

        
      }
      
      else if(value === 'delete'){
        calculation = calculation.slice(0, -1);
      }else if(value === 'C'){
        calculation = '';
      }else if(value === '±'){
        if(calculation.startsWith('-')){
          calculation = calculation.slice(1);
        }else if(calculation.startsWith('+')){
          calculation = calculation.slice(1);
          calculation = '-' + calculation;
        }else{
          calculation = '-' + calculation;
        }
      }else {
        calculation = calculation + value;
      }
      document.querySelector('.input').innerHTML = calculation;

    }
    
    // keyboard function section

    document.addEventListener('keydown', (event)=>{
      if(event.key === 'Enter' || event.key === '='){
        calculate('=');
      }else if(event.key === 'Backspace'){
        calculate('delete');
      }else if(event.key === 'C' || event.key === 'c'){
        calculate('C');
      }else if(event.key === '*'){
        calculate('*');
      }else if(event.key === '/'){
        calculate('/');
      }else if(event.key === '-'){
        calculate('-');
      }else if(event.key === '+'){
        calculate('+');
      }else if(event.key === '%'){
        calculate('%');
      }else if(!isNaN(event.key)){
        calculate(event.key);
      }
    })