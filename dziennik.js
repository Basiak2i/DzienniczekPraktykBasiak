// Pobiera przycisk "Dodaj" z formularza i dodajemy nasłuchiwacz zdarzeń na kliknięcie
document.getElementById("addBTN").addEventListener("click", function(event) {
    // Zatrzymuje domyślne zachowanie przycisku, aby nie odświeżać strony
    event.preventDefault();
    
    // Pobiera wartości wybrane w formularzu
    const data = document.getElementById("data2").value;
    const dzial = document.getElementById("dział").value;
    const opiekun = document.querySelector('input[name="Opiekun"]:checked').value;
    const Sprawozdanie = document.getElementById("Sprawozdanie").value
    const Godzin = document.getElementById("Godzin").value
    const Realizacja = document.getElementById("Realizacja").value
    const Stopien = document.getElementById("Stopien").value

    // Tworzy element div, w którym będziemy wyświetlać wprowadzone informacje
    const noweZajecia = document.createElement("div");
    
    // Tworzy tekst zawierający wprowadzone informacje
    const noweZajeciaTekst = document.createElement("p");
noweZajeciaTekst.innerHTML = "Data: <strong>" + data + "</strong>, Dział: <strong>" + dzial + "</strong>, Opiekun: <strong>" + opiekun + "</strong>, Sprawozdanie: <strong>" + Sprawozdanie + "</strong>, Godzin: <strong>" + Godzin + "</strong>, Realizacja: <strong>" + Realizacja + "</strong>, Stopien: <strong>" + Stopien + "</strong>";
    
noweZajeciaTekst.style.color = "Green";
    // Dodaje tekst do elementu div
    noweZajecia.appendChild(noweZajeciaTekst);
    
    // Dodaje element div do formularza
    const formularz = document.getElementById("all_dziennik");
    formularz.appendChild(noweZajecia);
});