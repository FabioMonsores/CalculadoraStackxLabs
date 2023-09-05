const visor = document.querySelector("#visor");
const historicoCalc = document.querySelector("#historico");

let display = "";
let historico = [];
let result = "";

// Visor
function number(num) {
  if (result !== "") {
    display = num;
    result = "";
  } else {
    let numero = "";
    display += num + numero;
  }
  atualizaDisplay();
}

//botão limpar (clean)
function clean() {
  visor.innerHTML = "";
  cleanDisplay();
}

//Limpar com o clean
function cleanDisplay() {
  if (display !== "") {
    return (display = "");
  }
}

//Funcionalidade das operações
function operacao(op) {
  display += op;
  atualizaDisplay();
}

/* Função de funcionalidade do botão igual que já adiciona o resultado no histórico */
function resultado() {
  if (display !== "") {
    result = eval(display);
    const operation = display;

    let data = new Date();
    historico.push({
      operation: operation,
      result: result,
      date: data.toLocaleString(),
    });

    if (historico.length > 4) {
      historico.shift();
    }

    display = result;
    atualizaDisplay();
    atualizaHistorico();
  }
}

// Atualiza o visor
function atualizaDisplay() {
  if (display.length > 10) {
    display = display.substring(0, 10);
  }
  visor.innerHTML = display;
}

// Atualiza o histórico
function atualizaHistorico() {
  historicoCalc.innerHTML = "";

  for (const item of historico) {
    const historicoItem = document.createElement("div");
    historicoItem.className = "historico-item";
    historicoItem.textContent = `[${item.date}]: ${item.operation} = ${item.result}`;

    historicoItem.addEventListener("click", function () {
      display = item.operation;
      atualizaDisplay();
    });

    historicoCalc.appendChild(historicoItem);
  }
}
