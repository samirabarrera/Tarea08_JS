//Función fábrica para crear una cuenta bancaria 
function crearCuentaBancaria (saldoInicial) {
    let saldo = saldoInicial;
    function depositar(cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
        } else {
            console.log ("La cantidad depositada debe ser mayor a cero.");
        }
    }

//Método privado para reitirar dinero
function retirar (cantidad) {
    if (cantidad > 0 && cantidad <= saldo) {
        saldo -= cantidad;
        } else {
        console.log ("La cantidad a retirar debe ser mayor a cero y no exceder el saldo disponible.")
        }
    }

//Retornamos un objeto con métodos públicos
    return {
        consultarSaldo: function () {
            return saldo;
        },
        realizarDeposito: function (cantidad) {
            depositar (cantidad);
        },
        realizarRetiro: function (cantidad) {
            retirar (cantidad);
        }
    }
}


//Ejemplos de uso
let miCuenta = crearCuentaBancaria (1000);
console.log("Saldo inicial: " + miCuenta.consultarSaldo());
miCuenta.realizarDeposito(500);

console.log("Saldo después del depósito:" + miCuenta.consultarSaldo());
miCuenta.realizarRetiro(200);

console.log("Saldo después del retiro: " + miCuenta.consultarSaldo());

//A continuación se pesenta un ejemplo de como manejar excepciones en JavaScript utilizando el bloque try... catch
try { 
    miCuenta.depositar(100); 
} catch (e) {
    console.log(e.message);
}
try {
    miCuenta.retirar(100);
} catch (e) {
    console.log(e.message)
}