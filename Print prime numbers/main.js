var counter = 0;
function start(){
    println("ეს რიცხვი მარტივი არაა:1");
    for(var i = 2; i <= 500 ;i++ ){
        for(var t = 1; t < i ;t++ ){
            if(i % t == 0)
                counter++;
        }
        if(counter == 1){
            println("ეს რიცხვი მარტივია: "+i);
        }else{
            println("ეს რიცხვი მარტივი არაა: " +i)
        }
        counter=0;
    }
}