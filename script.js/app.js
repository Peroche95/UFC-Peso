

function executar() {
  let peso = parseFloat(document.querySelector("#number").value);
  let texto = document.querySelector("h2");
  let imagem = document.querySelector("img");
  let palha = "../imagens/Peso palha.jpg";
  let meioPesado = "../imagens/meiopesado.jpg";
  let pena = "../imagens/peso pena aldo.jpg";

  if (!isNaN(peso)) {
    if (peso >= 52.1 && peso <= 53) {
      texto.innerHTML = `Seu peso é ${peso}kg, logo sua categoria é Peso Palha.`;
      imagem.src = palha;
    } else if (peso >= 56.7 && peso <= 60.5) {
      texto.innerHTML = `Seu peso é ${peso}kg, logo sua categoria está dentro da Peso Mosca.`;
      imagem.src = meioPesado;
    } else if (peso >= 65.2 && peso <= 66.7) {
      texto.innerHTML = `Seu peso é ${peso}kg, logo sua categoria está dentro da categoria Pena.`;
      imagem.src = pena;
    } else {
      texto.innerHTML = `Seu peso é ${peso}kg. Infelizmente, não há categoria correspondente.`;
      imagem.src = "";
    }
  } else {
    texto.innerHTML = "Por favor, insira um número válido.";
    imagem.src = "";
  }
}


