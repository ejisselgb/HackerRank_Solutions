function processData(input) {
    //Enter your code here
    let arrString = (input.slice(input.indexOf("\n")).trim()).split("\n");

    for(let i=0; i<arrString.length; i++){
        let string1 = [];
        let string2 = [];
        for(let j=0; j<arrString[i].length; j++){
            if(j===0 || (j%2)===0){
                string1.push(arrString[i][j]);
            }else{
                string2.push(arrString[i][j]);
            } 
        }
        console.log(string1.join("") + " " + string2.join(""));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});