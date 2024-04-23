let xAttempts = 1;

function mostrarValor() {
  let result = document.getElementById("enter").value;
  const randomNumber = Math.round(Math.random() * 10);
  const match = Number(result) == randomNumber;
  const isBiggerThanTen = Number(result) > 10;

  if (isBiggerThanTen) {
    alert("Ops, o número está entre 0 e 10!");
  } else if (Number(result) != randomNumber) {
    result = alert("Ops, parece que você não acertou :(");
    xAttempts++;
  } else {
    alert(
      `Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou em ${xAttempts} tentativas :)`
    );
  }
}

document.getElementById("enter").onkeydown = function (e) {
  if (e.keyCode == 13) {
    mostrarValor();
    return false;
  }
};
