function selecionarGenero() {
    const escolha = parseInt(document.getElementById("genero").value);
    const resultado = document.getElementById("resultado");
    let genero;

    switch (escolha) {
      case 1:
        genero = "Rock";
        break;
      case 2:
        genero = "Pop";
        break;
      case 3:
        genero = "Hip Hop";
        break;
      case 4:
        genero = "Eletrônica";
        break;
      case 5:
        genero = "Jazz";
        break;
      case 6:
        genero = "Clássica";
        break;
      default:
        resultado.textContent = "Opção inválida. Por favor, escolha um número entre 1 e 6.";
        return;
    }

    resultado.textContent = `Seu gênero musical favorito é: ${genero}`;
}