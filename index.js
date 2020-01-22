function wakeDog(dogName, dogBreed) {
  let str=`Wake ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function leashDog(dogName, dogBreed) {
  let str=`Leash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function walkToPark(dogName, dogBreed) {
  let str=`Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function throwFirsbee(dogName, dogBreed) {
  let str=`Throw the firsbee for ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function walkHome(dogName, dogBreed) {
  let str=`walk home with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function unleashDog(dogName, dogBreed) {
  let str=`Unleash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}


function exerciseDog(dogName, dogBreed){
  let routine =[wakeDog(),leashDog(), walkToPark(), throwFrisbee(), walkHome(), unleashDog()];
  let b=[];
  for(let i=0; i<routine.length;i++){
    let text=routine[key](dogName,dogBreed);
    b.push(text);
  }
}