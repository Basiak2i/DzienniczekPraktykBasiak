// pobiera elementy formularza
const imieInput = document.getElementById("Imię");
const nazwiskoInput = document.getElementById("Nazwisko");
const klasaInput = document.getElementById("Klasa");
const rokInput = document.getElementById("Rok");
const odbytaInput = document.getElementById("Odbyta");
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");

// pobiera element, do którego będą dodawane wartości formularza
const outputDiv = document.createElement("div");
document.body.appendChild(outputDiv);

// obsługa przycisku zatwierdzenia
const addButton = document.getElementById("addBTN");
addButton.addEventListener("click", () => {


  // pobiera wartości z formularza
  const imieValue = imieInput.value;
  const nazwiskoValue = nazwiskoInput.value;
  const klasaValue = klasaInput.value;
  const rokValue = rokInput.value;
  const odbytaValue = odbytaInput.value;
  const startValue = startInput.value;
  const endValue = endInput.value;


  // nowy element div z wartościami formularza
  const newEntry = document.createElement("div");

  newEntry.innerHTML = `<p>Imię: ${imieValue}</p>
                        <p>Nazwisko: ${nazwiskoValue}</p>
                        <p>Klasa: ${klasaValue}</p>
                        <p>Rok szkolny: ${rokValue}</p>
                        <p>Odbytej w: ${odbytaValue}</p>
                        <p>Data rozpoczęcia: ${startValue}</p>
                        <p>Data zakończenia: ${endValue}</p>`;

  // nowy element div do outputDiv
  outputDiv.appendChild(newEntry);

  imieInput.value = "";
  nazwiskoInput.value = "";
  klasaInput.value = "";
  rokInput.value = "";
  odbytaInput.value = "";
  startInput.value = "";
  endInput.value = "";
});