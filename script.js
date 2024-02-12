var calBtn = document.getElementsByClassName('cal-btn')
var displayValue = document.getElementById('display')


  


for(let i=0; i<calBtn.length;i++){
  calBtn[i].addEventListener('click', function (){

  if (this.value === 'ac'){
    displayValue.value = ''
    
    
  }

  else if(this.value === 'cut'){
    if(displayValue.value === 'Infinity' || displayValue.value ==='-Infinity'){
      displayValue.value = ''
    }
    else{
      displayValue.value = displayValue.value.slice(0,-1)
    }
    
  
  }

  else if(this.value === 'equal'){
    try{
      displayValue.value = eval(displayValue.value.replace(/×/g,'*'))
    }

    catch{
       console.log('invalid')
    }
    
  
  }
  
  else if(this.value === '+' || this.value === '×' || this.value === '/'){
    if(displayValue.value.slice(-1)==='+'||displayValue.value.slice(-1)==='-'||displayValue.value.slice(-1)==='×'||displayValue.value.slice(-1)==='/'){

      displayValue.value =displayValue.value.slice(0,-1) + this.value
    }

    
  
    

  else{
    displayValue.value+=calBtn[i].value
  }
     
  }

  else if (this.value === '.'){
    
if(displayValue.value.slice(-1)==='+'||displayValue.value.slice(-1)==='-'||displayValue.value.slice(-1)==='×'||displayValue.value.slice(-1)==='/' || displayValue.value===''){
  
  displayValue.value += '0.'

  
}
 else if(displayValue.value.slice(-1)==='.'){
   displayValue.value = displayValue.value
 }

  
  else{
      displayValue.value += this.value
    }
  }

  
    
    
    
  

    


  


  else{
   displayValue.value+=calBtn[i].value
    }

  if(displayValue.value==='' || displayValue.value.slice(0)==='-'){
   var disable = document.getElementsByName('operator')
    for(let i=0; i<disable.length;i++){
      disable[i].disabled = true
    }
  }

  else{
    var disable = document.getElementsByName('operator')
    for(let i=0; i<disable.length;i++){
      disable[i].disabled = false
    }
  }
 
    
  
  displayValue.scrollTo({
  left: displayValue.scrollWidth,
  behavior: 'smooth'})
  })




}