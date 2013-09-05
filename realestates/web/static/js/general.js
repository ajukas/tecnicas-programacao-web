
function validateRegister(formID) {
    
    if("" === document.forms[formID]['firstname'].value || "" === document.forms[formID]['lastname'].value ||
        "" === document.forms[formID]['email'].value || "" === document.forms[formID]['password'].value ||
         "" === document.forms[formID]['confirm_password'].value || "" === document.forms[formID]['city'].value || 
          "" === document.forms[formID]['state'].value || "" === document.forms[formID]['phone'].value ||
           "yellow" === document.getElementById('firstname').style.backgroundColor ||
            "yellow" === document.getElementById('lastname').style.backgroundColor ||
             "yellow" === document.getElementById('email').style.backgroundColor ||
              "yellow" === document.getElementById('password').style.backgroundColor ||
               "yellow" === document.getElementById('state').style.backgroundColor ||
                "yellow" === document.getElementById('city').style.backgroundColor ||
                 "yellow" === document.getElementById('state').style.backgroundColor ||
                  "yellow" === document.getElementById('phone').style.backgroundColor) {
                return false;
    }
    return true;
}

function validateInputText(inputTextID) {
    if("" === document.getElementById(inputTextID).value) {
        document.getElementById(inputTextID).style.backgroundColor = 'yellow';
        document.getElementById("error_message").style.visibility = 'visible';
                document.getElementById("error_message").innerHTML = 'Campos obrigatórios não preenchidos.';
    } else {
        if('firstname' === inputTextID || 'lastname' === inputTextID) {
            document.getElementById(inputTextID).value = document.getElementById(inputTextID).value.toUpperCase();
        } else if('state' === inputTextID || 'city' === inputTextID) {
            document.getElementById(inputTextID).value = document.getElementById(inputTextID).value.toUpperCase();
            var pattern = new RegExp("\\d");
            var state = document.getElementById(inputTextID).value;
            if(true === pattern.test(state) || (2 !== state.length && 'state' === inputTextID)) {
                document.getElementById(inputTextID).style.backgroundColor = 'yellow';
                document.getElementById("error_message").style.visibility = 'visible';
                if('state' === inputTextID) {
                    document.getElementById("error_message").innerHTML = 'Apenas duas letras no campo Estado.';
                } else {
                    document.getElementById("error_message").innerHTML = 'Apenas letras no campo Cidade.';
                }
            } else {
                if('state' === inputTextID) {
                    var all_states = new Array("AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO");
                    if(-1 === all_states.indexOf(document.getElementById(inputTextID).value)) {
                        document.getElementById(inputTextID).style.backgroundColor = 'yellow';
                        document.getElementById("error_message").style.visibility = 'visible';
                        document.getElementById("error_message").innerHTML = 'Sigla inexistente.';
                    } else {
                        document.getElementById(inputTextID).style.backgroundColor = 'white';
                        document.getElementById("error_message").style.visibility = 'hidden';
                    }
                } else {
                    document.getElementById(inputTextID).style.backgroundColor = 'white';
                    document.getElementById("error_message").style.visibility = 'hidden';
                }
            }
        } else {
             if('phone' === inputTextID) {
                var pattern = new RegExp("[a-zA-Z]");
                var phone = document.getElementById(inputTextID).value;
                if(true === pattern.test(phone)) {
                    document.getElementById(inputTextID).style.backgroundColor = 'yellow';
                    document.getElementById("error_message").style.visibility = 'visible';
                    document.getElementById("error_message").innerHTML = 'Campo telefone deve conter apenas números.';
                } else {
                    if(10 !== phone.length) {
                        document.getElementById(inputTextID).style.backgroundColor = 'yellow';
                        document.getElementById("error_message").style.visibility = 'visible';
                        document.getElementById("error_message").innerHTML = 'Telefone deve conter 10 números. <br/>(XX) XXXX-XXXX';
                    } else {
                        document.getElementById(inputTextID).value = "("+phone[0]+phone[1]+") "+phone[2]+phone[3]+phone[4]+phone[5]+"-"+phone[6]+phone[7]+phone[8]+phone[9];
                        document.getElementById(inputTextID).style.backgroundColor = 'white';
                        document.getElementById("error_message").style.visibility = 'hidden';
                    }
                }
            } else {
                if('email' === inputTextID) {
                    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var email = document.getElementById(inputTextID).value.toString();
                    if(!pattern.test(email)) {
                        document.getElementById(inputTextID).style.backgroundColor = 'yellow';
                        document.getElementById("error_message").style.visibility = 'visible';
                        document.getElementById("error_message").innerHTML = 'Não é um e-mail válido.';
                    } else {
                        document.getElementById(inputTextID).style.backgroundColor = 'white';
                        document.getElementById("error_message").style.visibility = 'hidden';
                    }
                } else {
                    if('password' === inputTextID | 'confirm_password' === inputTextID) {
                        var password = document.getElementById(inputTextID).value.toString();
                        if(8 <= password.length) {
                            document.getElementById(inputTextID).style.backgroundColor = 'yellow';
                            document.getElementById("error_message").style.visibility = 'visible';
                            document.getElementById("error_message").innerHTML = 'Senha deve conter no máximo 8 caracteres.';
                        } else {
                            var uppercase = new RegExp("[A-Z]");
                            var lowercase = new RegExp("[a-z]");
                            var specialchar = new RegExp("[!@\#%&\(\)\+=<>\^,\.]");
                            var digit = new RegExp("[\\d]");
                            if(!(true === uppercase.test(password) && true === lowercase.test(password) &&
                                    true === specialchar.test(password) && true === digit.test(password))){
                                document.getElementById(inputTextID).style.backgroundColor = 'yellow';
                                document.getElementById("error_message").style.visibility = 'visible';
                                document.getElementById("error_message").innerHTML = 'Senha deve conter pelo menos 1 letra maiúscula, 1 caractere especial (não alfanumérico), 1 dígito e 1 letra minúscula.';
                            } else {
                                if(document.getElementById('password').value.toString() !== document.getElementById('confirm_password').value.toString()) {
                                    document.getElementById('password').style.backgroundColor = 'yellow';
                                    document.getElementById('confirm_password').style.backgroundColor = 'yellow';
                                    document.getElementById("error_message").style.visibility = 'visible';
                                    document.getElementById("error_message").innerHTML = 'Senhas devem ser iguais.';
                                } else {
                                    document.getElementById('password').style.backgroundColor = 'white';
                                    document.getElementById('confirm_password').style.backgroundColor = 'white';
                                    document.getElementById("error_message").style.visibility = 'hidden';
                                }
                            }
                        }
                    } else {
                        document.getElementById(inputTextID).style.backgroundColor = 'white';
                        document.getElementById("error_message").style.visibility = 'hidden';
                    }
                }
            }
        }
    }
    
    
}