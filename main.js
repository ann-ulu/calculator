const output_it = document.getElementById('output-result');
function display(num){
    output_it.value += num;
}

function calculate(){
    try{
        output_it.value = eval(output_it.value);

    }
catch(err){
    alert("Invalid Input");
}
}

function clearCalculator(){
     output_it.value = "";
}

function del(){
    output_it.value = output_it.value.slice(0, -1);
}