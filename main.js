const generatePassword = (letters,length) =>{
    let password = "";
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * letters.length);
        password += letters.charAt(random);        
    }
    return password;
};

const generate = () => {
    let length = parseInt(inputLength.value);

    let letters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let symbols = ".?!%&$#@";

    if(checkbox1.checked) 
        letters+=numbers;
    if(checkbox2.checked) 
        letters+=symbols;
    
    generatedPassword.innerText = generatePassword(letters,length);
    titulo.innerText = "Pene";
};

window.addEventListener('DOMContentLoaded', () =>{
    btnGenerate.addEventListener("click",()=>{
        generate();
    });
});


