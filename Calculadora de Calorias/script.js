document.getElementById('calorie-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const sexo = document.getElementById('sexo').value;
  const objetivo = document.getElementById('objetivo').value;
  const diasTreino = parseInt(document.getElementById('dias-treino').value);
  const diasDescanso = parseInt(document.getElementById('dias-descanso').value);

  if ((diasTreino + diasDescanso) > 7) {
    alert('A soma dos dias de treino e descanso deve ser no máximo 7.');
    return;
  }

  const idade = 25;

  let BMR;
  if (sexo === 'masculino') {
    BMR = 10 * peso + 6.25 * altura - 5 * idade + 5;
  } else if (sexo === 'feminino') {
    BMR = 10 * peso + 6.25 * altura - 5 * idade - 161;
  } else {
    alert('Selecione um sexo válido');
    return;
  }

  let fatorAtividade = 1.2;
  if (diasTreino === 0) {
    fatorAtividade = 1.2;
  } else if (diasTreino <= 2) {
    fatorAtividade = 1.375;
  } else if (diasTreino <= 4) {
    fatorAtividade = 1.55;
  } else if (diasTreino <= 6) {
    fatorAtividade = 1.725;
  } else if (diasTreino === 7) {
    fatorAtividade = 1.9;
  }

  const caloriasManutencao = BMR * fatorAtividade;

  let caloriasObjetivo;
  switch (objetivo) {
    case 'cutting':
      caloriasObjetivo = caloriasManutencao * 0.8;
      break;
    case 'offseason':
      caloriasObjetivo = caloriasManutencao;
      break;
    case 'bulking':
      caloriasObjetivo = caloriasManutencao * 1.2;
      break;
    default:
      caloriasObjetivo = caloriasManutencao;
  }

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.style.display = 'block';
  resultadoDiv.innerHTML = `
    <p><strong>Calorias estimadas por dia:</strong> ${caloriasObjetivo.toFixed(0)} kcal</p>
    <p>(Considerando seu peso, altura, sexo, atividade e objetivo)</p>
  `;
});
