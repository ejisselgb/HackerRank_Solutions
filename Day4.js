function Person(initialAge){
    let age = initialAge > 0 ? initialAge : 0;
    if(initialAge < 0){
      console.log("Age is not valid, setting age to 0.");
    }
  this.amIOld=function(){
      if(age < 13){
        console.log("You are young.");
      }else if(age >= 13 && age < 18){
        console.log("You are a teenager.");
      }else{
        console.log("You are old.");
     }
  };
   this.yearPasses=function(){
        age ++;
   };
}