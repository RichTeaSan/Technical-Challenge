function validate(numbers){
    var sum;
    var sum1;
    var total;
    for (i=0; i<numbers.length; i++) {
            if (numbers.length%2==0){
                sum += numbers[i];
            }
            else {
                if ((numbers[i] * 2) >= 10) {
                    sum1 += numbers[i] - 9;
                }
                else {
                    sum1 += numbers[i];
                }
            }
    }
    total = sum + sum1;
    return total;
}

function card(){
    var card= document.getElementById("input").value;
    var numbers = card.split(" ");
    var out ="";


    for (i = 0; i < numbers.length; i++) {
        out += validate(numbers[i]);
    }
    if (out %10==0)
        return true;
}
function getOutput() {
    if (card()) {
        alert("You card is valid.");
    }
}