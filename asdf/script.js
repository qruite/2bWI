

function piska() {

    if (document.getElementById("remember").checked){
        alert("checked");
    }
        else {
            alert("not checked")
        }
        
        
    }




    function validate(aussage){
        let checkbox = document.getElementById("remember");
        
        if(checkbox.checked){
            aussage = true;
        }
            else {
                aussage = false;
            }
        return aussage;
    }

    //let checked = "";
       // if(validate(true)){ checked = "checked"}