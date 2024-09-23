const data = [
  {
    min: 0,
    max: 18.4,
    classificacao: "Menor que 18,5",
    info: "Magreza",
    obesidade: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classificacao: "Entre 18,5 e 24,9",
    info: "Normal",
    obesidade: "0",
  },
  {
    min: 25,
    max: 29.9,
    classificacao: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesidade: "I",
  },
  {
    min: 25,
    max: 29.9,
    classificacao: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesidade: "I",
  },
  {
    min: 30,
    max: 39.9,
    classificacao: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesidade: "II",
  },
  {
    min: 40,
    max: 99,
    classificacao: "Maior que 40,0",
    info: "Obesidade grave",
    obesidade: "III",
  },
];

// Seleção de Elementos

const impPeso = document.querySelector("#peso");
const impAltura = document.querySelector("#altura");
const btnCalcular = document.querySelector(".botao-calcular button");
const infoImc = document.querySelector(".info-imc p");

// Funções

function calcBtn(peso, altura) {
  const imc = (peso / (altura * altura)).toFixed(1);

  return imc;
}

function validarDigito(text) {
  return text.replace(/[^0-9,]/g, "");
}

// Seleção de Eventos
[impPeso, impAltura].forEach((el) => {
  el.addEventListener("input", (e) => {
    const validar = validarDigito(e.target.value);
    e.target.value = validar;
  });
});

btnCalcular.addEventListener("click", (e) => {
  e.preventDefault();
  const peso = +impPeso.value.replace(",", ".");
  const altura = +impAltura.value.replace(",", ".");

  if (!peso || !altura) return;

  const imc = calcBtn(peso, altura);

  let info;

  data.forEach((item) => {
    if (imc >= item.min && imc <= item.max) {
      info = item.info;
    }
  });

  if (!info) return;

  switch (info) {
    case "Magreza":
      infoImc.style.color = "#fff";
      infoImc.style.backgroundColor = "rgb(171, 182, 17)";
      infoImc.innerHTML = `Seu IMC é ${imc} e sua classificação é : ${info} ! `;
      break;
    case "Normal":
      infoImc.style.color = "#fff";
      infoImc.style.backgroundColor = "green";
      infoImc.innerHTML = `Seu IMC é ${imc} e sua classificação é : ${info} !`;
      break;
    case "Sobrepeso":
      infoImc.style.color = "#fff";
      infoImc.style.backgroundColor = "rgb(255, 136, 0)";
      infoImc.innerHTML = `Seu IMC é ${imc} e sua classificação é : ${info} !`;
      break;
    case "Obesidade":
      infoImc.style.color = "#fff";
      infoImc.style.backgroundColor = "rgb(255, 0, 0)";
      infoImc.innerHTML = `Seu IMC é ${imc} e sua classificação é : ${info} !`;
      break;
    case "Obesidade grave":
      infoImc.style.color = "#fff";
      infoImc.style.backgroundColor = "rgb(255, 0, 0)";
      infoImc.innerHTML = `Seu IMC é ${imc} e sua classificação é : ${info} !`;
      break;
  }
});
