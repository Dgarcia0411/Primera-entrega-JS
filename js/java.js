//Variables
const interes = function (d) {
    if (d >0 && d <4900000) {
      return d * 1.20;
    } 
    else if (d >= 5000000 && d <15000000) {
      return d * 1.35;
    }  
    else {
      return d * 1.42;
    }
  }
  let trueOfalse= true
  let verdad =true
  
  // Validación identidad 
  let nombre = prompt("¿Cúal es tu nombre?");
  while (verdad) {
      if (nombre != "")
      {
          verdad = false
          alert(`Te damos la bienvenida al Banco Funivisión: \n ${nombre} \n Presiona enter para continuar con la simulación de tu crédito`)
      } else {
          alert("Por favor ingresa tu nombre para continuar")
          nombre = prompt ("Escriba nuevamente su nombre")
      }  
  }
  // Validación edad 
  let edad = Number(prompt("Indique cual es su edad"))
  
  if (edad >=18) {
      alert("Puedes continuar con el proceso de validación")    
  } else {
      alert("Lo sentimos, eres menor de edad y no aplicas para un crédito.")
    edad = Number(prompt("Indique cual es su edad"))
      
  }
  
  // Función para calcular el crédito
  function simuladorPrestamo() {
      let credito = Number(prompt("Ingresa el monto del crédito que deseas validar"))
  
      while (trueOfalse) {
          if (credito ===0) {
              credito =Number(prompt("Ingresa el monto del crédito que deseas validar"))
          } else {
              let resultado = credito
              simuladorCuotas(resultado)
              trueOfalse =false
          }
      }
  }
  // Función para calcular as cuotas e intereses 
  function simuladorCuotas(resultado) {
      let cuotas = Number(prompt("Ingresa la cantidad de cuotas en la que esperas cancelar tu crédito \n 6 \n 12 \n 18 \n 24 \n 36"))
      while (trueOfalse) {
          let  interesCalculado = interes(resultado)
          let resultadoFinal =0
          switch (cuotas) {
              case 6:
                  resultadoFinal = Math.round(interesCalculado / cuotas)
                  alert(`La cuota mensual de tu crédito será: $${resultadoFinal}`)
                  trueOfalse= false
                  break;
              case 12:
                      resultadoFinal = Math.round(interesCalculado / cuotas)
                      alert(`La cuota mensual de tu crédito será: $${resultadoFinal}`)
                      trueOfalse= false
                      break;
              case 18:
                  resultadoFinal = Math.round(interesCalculado / cuotas)
                  alert(`La cuota mensual de tu crédito será: $${resultadoFinal}`)
                  trueOfalse= false
                  break;    
              case 24:
                  resultadoFinal = Math.round(interesCalculado / cuotas)
                  alert(`La cuota mensual de tu crédito será: $${resultadoFinal}`)
                  trueOfalse= false
                  break;  
              case 36:
                  resultadoFinal = Math.round(interesCalculado / cuotas)
                  alert(`La cuota mensual de tu crédito será: $${resultadoFinal}`)
                  trueOfalse= false
                  break;
              default:
                  cuotas = Number(prompt("Ingresa la cantidad de cuotas en la que esperas cancelar tu crédito \n 6 \n 12 \n 18 \n 24 \n 36"))
                  break;
          }
      }
  }
  simuladorPrestamo()