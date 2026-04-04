function add(a,b){
    return a+b;
}
add(4,5);

// add function of multiply
function multiply(a,b){
    return a*b;
}
multiply(4,5);

// Subract function
function Subract(a,b){
    // condition 
    if (a < 0 || b < 0 ) {
        throw new Error("negative number not valid");
    }
    return a-b;
}
Subract(4,5);
Subract(3,6);
Subract(-3,5);

// Division Function
function division(a,b){
    return a/b;
}
division(3/1);
