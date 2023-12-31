const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

function generateCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function generatePassword() {
  let randomPasswordOne = "";
  let randomPasswordTwo = "";
  
  for (let i = 0; i < 13; i++) {
    randomPasswordOne += generateCharacter();
    randomPasswordTwo += generateCharacter();
  }
  
  passwordOne.textContent = randomPasswordOne;
  passwordTwo.textContent = randomPasswordTwo;
}


document.getElementById("copy-btn1").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(passwordOne.textContent);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
})

document.getElementById("copy-btn2").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(passwordTwo.textContent);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
})





