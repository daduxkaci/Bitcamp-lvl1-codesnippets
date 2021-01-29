var three = 0;
var five = 0;
function start(){
    for(var i = 1; i <= 50; i++){
        if(i % 5 == 0){
            println("Buzz");
        }else if(i % 3 == 0){
            println("Fizz");
        }else{
            println(i)
        }
    }
}