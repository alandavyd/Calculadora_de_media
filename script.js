function calcular() {
  var primeiroBimestre = parseFloat(
    document.getElementById('primeiraNota').value
  )
  var segundoBimestre = parseFloat(document.getElementById('segundaNota').value)
  var terceiroBimestre = parseFloat(
    document.getElementById('terceiraNota').value
  )
  var quartoBimestre = parseFloat(document.getElementById('quartaNota').value)

  var notaFinal =
    (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre) / 4
  var notaFixado = notaFinal.toFixed(1)

  if (notaFixado >= 7) {
    var resultadoMedia = document.getElementById('resultadoFinal')
    var resultadoFinal = `Parabéns! Voce foi aprovado (a).  Sua media final é:  ${notaFixado}`
    resultadoMedia.innerHTML = resultadoFinal
  } else {
    var resultadoMediaAbaixo = document.getElementById('resultadoFinal')
    var resultadoFinal = `Que pena! Voce foi reprovado (a).  Sua media final é:  ${notaFixado}`
    resultadoMediaAbaixo.innerHTML = resultadoFinal
  }
}
