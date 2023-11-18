const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
 "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
 "{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")

function genPass() {
    let password = ""
    for (let i = 0; i < 16; i++) {
        ranNum = Math.floor(Math.random() * characters.length)
        let ranChar = characters[ranNum]
        password += ranChar
    }
    return password;
}

function renderPass() {
    pass1El.textContent = genPass()
    pass2El.textContent = genPass()
}