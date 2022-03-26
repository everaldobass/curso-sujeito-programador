// Selecionando os campos
let buttonElement = document.querySelector("#btn");
let sliderElement = document.querySelector("#slider");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456798@#!$";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


function generaterPassword(){

   let pass = "";
   
   for(let i = 0, n = charset.length; i < sliderElement.value; i++ ){

      pass += charset.charAt(Math.floor(Math.random() * n));

   }

   containerPassword.classList.remove("hide");

   password.innerHTML = pass;

}


function copyPassword(){
    alert("Senha copiada com sucesso! ")
    navigator.clipboard.writeText(novaSenha);
}