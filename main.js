const cuentas = [
    { nombre: "Mali", saldo: 200,password: "1234"},
    { nombre: "Pedro", saldo: 290,password: "4321"},
    { nombre: "Jose", saldo: 67,password: "5678"}
];
function login(event) {
    event.preventDefault();
    let user = document.getElementById('cuentas').value;
    let password = document.getElementById('password').value;
    let validarCredenciales = cuentas.some(cuenta => cuenta.nombre === user && cuenta.password === password); 
    if(validarCredenciales){
        let cuenta = cuentas.find(cuenta => cuenta.nombre === user && cuenta.password === password);
        localStorage.setItem("cuenta_nombre", cuenta.nombre);
        localStorage.setItem("cuenta_saldo", cuenta.saldo);
        let url = "Banco.html";
        location.href = url;
        }   
        else{
        const errorMessage = document.getElementById("error-mensaje");
        errorMessage.innerText = "Usuario o Clave incorrecta. Intenta nuevamente.";
        }  
    }
    document.getElementById("formulario_ingreso").addEventListener("submit", login);