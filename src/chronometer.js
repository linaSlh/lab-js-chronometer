class Chronometer {
  constructor() {
    // ... your code goes here
  this.currentTime = 0;
  this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
   
    this.intervalId = setInterval(()=> {
      this.currentTime++ ;
      if (printTimeCallback){
        printTimeCallback()
      }

    },1000)
  
  }
  

  getMinutes() {
   let minutes = Math.floor( this.currentTime / 60);
   return minutes;
    // ... your code goes here
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    this.currentTime = value;
    if (value<10){
      return "0"+value;
    }
    else
      return value.toString();
    }
    stop(){
      clearInterval(this.intervalId);
    }   
     reset() {
        this.currentTime = 0;
           }
  }
  
const stringNumber = stringNumber(this.currentTime);
console.log(stringNumber);

 
 
  
  


  // split() {
  //   // ... your code goes here
  // }

