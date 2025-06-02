function total(){
    let count = 0;
    if(document.getElementById("option1c").checked == true){
        count += 1;
    }
    if(document.getElementById("option2b").checked == true){
        count += 1;
    }
    if(document.getElementById("option3a").checked == true){
        count += 1;
    }
    if(document.getElementById("option4c").checked == true){
        count += 1;
    }
    if(document.getElementById("option5d").checked == true){
        count += 1;
    }

    function clearRadioButton(){
        var radioButtonArray = document.getElementsByClassName('option');

        for(let i=0; i< radioButtonArray.length; i++){
             radioButton = radioButtonArray[i];
             radioButton.checked = false;
        }
    }

    if(confirm("Your score in out of 5 : "+count)){
        clearRadioButton();
    }
}


