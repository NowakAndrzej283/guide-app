class GeneratedNumber {
    // here we have the constructor of the class
    constructor(min=1 , max= 100){
        this.min = min;
        this.max =max;
        this.randomNumber = this.generateRandomNumber();
        this.attempts = 0;
    }
    generateRandomNumber(){
        return Math.floor(Math.random()* (this.max - this.min + 1)) + this.min;
    }
    checkNumber(userNumber){
        this.attempts++;

        if(userNumber === this.randomNumber){
            return {result: 'win', attempts: this.attempts}
        }else if(userNumber < this.randomNumber){
            return {result: 'too_low', attempts: this.attempts}
        }else if(userNumber > this.randomNumber){
            return {result: 'too_high', attempts: this.attempts}
        }
    }
    resetGame(){
        this.randomNumber = this.generateRandomNumber();
        this.attempts = 0;
    }
}
export default GeneratedNumber;