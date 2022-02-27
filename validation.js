$(document).ready(()=>{
    $(document).on('click','#validatebtn',(e)=>{
        // assume its valid by default
        let isValid = true;                                                                                 
        
        // remove older messages
        $('.msg').remove();

        // save data variables and check conditions
        let usernameValue = $('#username').val().trim();
        if (usernameValue.length < 4){
            isValid = false;                                                                                                    // change value of var to false
            $('.user-error').append("<span class='msg py-2 fw-bold text-danger'>Minimum 4 characters are required.</span>")     // add message
        }

        let email = $('#email').val().trim();
        if (!(email.includes('@') && ( email.length - email.indexOf(".com") == 4))){
            isValid = false;
            $('.email-error').append("<span class='msg py-2 fw-bold text-danger'>Email must contain @ and .com in it.</span>")

        }

        let phone = $('#phone').val().trim();
        if (phone.length != 10){
            isValid = false;
            $('.phone-error').append("<span class='msg py-2 fw-bold text-danger'>10 digits are required.</span>")

        }

        // return false if variable is false otherwise default will be true
        if (!isValid){
            return false
        }
    })
})