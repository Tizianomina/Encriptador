var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar"); 
var btnlimpiar = document.querySelector("#botonLimpiar");

function encriptar(){
    var texto = document.querySelector("#textoTextarea").value;
    
     if(texto === texto.toLowerCase()){
         textoCif = texto.replace(/e/igm, "enter").replace(/o/igm, "ober").replace(/i/igm, "imes").replace(/a/igm, "ai").replace(/u/igm, "ufat");  

         document.querySelector("#contCifrado").textContent = textoCif;
     } else {

         alert("NO esta permitido el uso de mayúsculas, intente nuevamente.");
         document.querySelector("#textoTextarea").value = "";
     }
}

btnEncriptar.addEventListener("click",()=>{
    encriptar();
});

function desencriptar(){
    var texto = document.querySelector("#textoTextarea").value;
    textoCif = texto.replace(/enter/igm, "e").replace(/ober/igm, "o").replace(/imes/igm, "i").replace(/ai/igm, "a").replace(/ufat/igm, "u");

    document.querySelector("#contCifrado").textContent = textoCif;
} 

btnDesencriptar.addEventListener("click",()=>{
    desencriptar();
}); 

function copiar() {
    var texto = document.querySelector("#contCifrado").innerHTML;

    texto.select;
    navigator.clipboard.writeText(texto);
    alert("Su mensaje se ha copio con éxito, haga Ctrl + V para pegar en el encriptador.");
    document.querySelector("#textoTextarea").value = "";
    document.querySelector("#contCifrado").innerHTML = "";

}

function borrar(){
    document.querySelector("#textoTextarea").value = "";
    document.querySelector("#contCifrado").innerHTML = "";

}