const apiKey = "56c2b50fb7c5476d86e121537230111";

async function fetchData() {
  try {
    const cidade = document.getElementById("cidade").value;
    const temperatura = document.getElementById("temperatura");

    const resposta = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&aqi=no`
    );
    const dados = await resposta.json();
    const info = `Está fazendo ${dados.current.temp_c} °C em ${dados.location.name}.`;
    temperatura.textContent = info;
    return;
  } catch (error) {
    alert("Ocorreu um erro!");
  }
}
