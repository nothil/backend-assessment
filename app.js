function bulbSwitch(n){
    let bulbs = new Array(100);
    let numberOfPerson;
    let bulbsStillOn = [];


    if(typeof(n)!== "number"){
        console.log(`incorrect value "${n}", it should be a number`);

    }else{
        numberOfPerson = n;
    }

    for(let i = 1; i<= bulbs.length; i++ ){
        if(bulbs[i - 1] == undefined){
            bulbs[i -1] = {name:`#${i}`, state:true};
        }
    }


    for(let j =2; j <= numberOfPerson + 1; j++){


        for(let i =1; i <= bulbs.length; i++){

            if((i * j) <= bulbs.length){
                bulbs[(i * j) -1].state = false;
            }

           if((j == numberOfPerson + 1) && (bulbs[i - 1].state == true)){
                bulbsStillOn.push(bulbs[i - 1]);
           }
        }
    }
     console.log(`light bulb still on are ` + bulbsStillOn.length);
    

}
// put the number 
bulbSwitch(4)