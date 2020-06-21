const  bulbSwitch = function(n){
    let bulbs = new Array(100);
    let numberOfPerson;
    //tis array will store the number of lights remaining lit
    let bulbsStillOn = [];
     
    //loop throught the the erray and check to set the state to true
    for(let i = 1; i<= bulbs.length; i++ ){
        if(bulbs[i - 1] == undefined){
            bulbs[i -1] = {index:`#${i}`, state:true};
        }
    }


    // evaluate if the param given to n is a number
    if(typeof(n)!== "number"){
        console.log(`"${n}", is not a number`);

    }else{
        numberOfPerson = n;
    }
    
    
    for(let lightIndex = 2; lightIndex <= numberOfPerson + 1; lightIndex++){

        for(let i = 1; i <= bulbs.length; i++){

            if((i * lightIndex) <= bulbs.length){
                bulbs[(i * lightIndex) -1].state = false;
            }
             // push the lights to bulbStillOn[] 
            if((lightIndex == numberOfPerson + 1) && (bulbs[i - 1].state == true)){
                bulbsStillOn.push(bulbs[i - 1]);
           }
        }
    }
      console.log(`light bulb still on are ` + bulbsStillOn.length);
    

}
// add a number 
bulbSwitch(2)