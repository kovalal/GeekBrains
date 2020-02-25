console.log("Taks - 1");
let i = 1;
while(++i < 100){
    let j = 2;
    do {
        if (i % j){
            break;
        }
        j++;
    } while (j < (i));
    if ( j >= i){
        console.log(i);
    }
}