const predpoved = {
    pondeli: {
      den: "Pondělí",
      datum: "2023-10-02",
      denni_teplota: 20,
      ranni_teplota: 15,
      odpoledni_teplota: 23,
      vecerni_teplota: 18,
      stav_pocasi: "Zataženo",
      tlak: 1015,
      rychlost_vetru: 10,
      popis_pocasi: "Pondělí bude zataženo s teplotami mezi 15°C ráno a 23°C odpoledne. Očekávají se mírné dešťové srážky, a proto byste měli mít s sebou deštník. Rychlost větru dosáhne 10 km/h a atmosférický tlak bude 1015 hPa.",
    },
    utery: {
      den: "Úterý",
      datum: "2023-10-03",
      denni_teplota: 22,
      ranni_teplota: 16,
      odpoledni_teplota: 25,
      vecerni_teplota: 20,
      stav_pocasi: "Polojasno",
      tlak: 1012,
      rychlost_vetru: 12,
      popis_pocasi: "Úterý bude polojasno s teplotami mezi 16°C ráno a 25°C odpoledne. Očekává se několik oblaků na obloze, ale převážně slunečné počasí. Rychlost větru dosáhne 12 km/h a atmosférický tlak bude 1012 hPa.",
    },
    streda: {
      den: "Středa",
      datum: "2023-10-04",
      denni_teplota: 18,
      ranni_teplota: 13,
      odpoledni_teplota: 20,
      vecerni_teplota: 15,
      stav_pocasi: "Deštivo",
      tlak: 1008,
      rychlost_vetru: 15,
      popis_pocasi: "Středa bude deštivá s teplotami mezi 13°C ráno a 20°C odpoledne. Očekává se celodenní déšť s oblačnou oblohou. Rychlost větru dosáhne 15 km/h a atmosférický tlak bude 1008 hPa.",
    },
    ctvrtek: {
      den: "Čtvrtek",
      datum: "2023-10-05",
      denni_teplota: 16,
      ranni_teplota: 11,
      odpoledni_teplota: 18,
      vecerni_teplota: 13,
      stav_pocasi: "Deštivo",
      tlak: 1010,
      rychlost_vetru: 14,
      popis_pocasi: "Čtvrtek bude opět deštivý s teplotami mezi 11°C ráno a 18°C odpoledne. Očekávají se déšť a sníh se zhoršující se viditelností. Rychlost větru dosáhne 14 km/h a atmosférický tlak bude 1010 hPa.",
    },
    patek: {
      den: "Pátek",
      datum: "2023-10-06",
      denni_teplota: 19,
      ranni_teplota: 14,
      odpoledni_teplota: 22,
      vecerni_teplota: 17,
      stav_pocasi: "Oblačno",
      tlak: 1013,
      rychlost_vetru: 11,
      popis_pocasi: "Pátek bude převážně oblačný s teplotami mezi 14°C ráno a 22°C odpoledne. Můžeme očekávat zataženou oblohu s občasnými projevy slunečního svitu. Rychlost větru dosáhne 11 km/h a atmosférický tlak bude 1013 hPa.",
    },
    sobota: {
      den: "Sobota",
      datum: "2023-10-07",
      denni_teplota: 21,
      ranni_teplota: 17,
      odpoledni_teplota: 24,
      vecerni_teplota: 19,
      stav_pocasi: "Polojasno",
      tlak: 1015,
      rychlost_vetru: 13,
      popis_pocasi: "Sobota bude polojasná s teplotami mezi 17°C ráno a 24°C odpoledne. Převládne slunečné počasí s mírnými oblačnými intervaly. Rychlost větru dosáhne 13 km/h a atmosférický tlak bude 1015 hPa.",
    },
    nedele: {
      den: "Neděle",
      datum: "2023-10-08",
      denni_teplota: 23,
      ranni_teplota: 18,
      odpoledni_teplota: 26,
      vecerni_teplota: 20,
      stav_pocasi: "Slunečno",
      tlak: 1017,
      rychlost_vetru: 9,
      popis_pocasi: "Neděle bude krásný slunečný den s teplotami mezi 18°C ráno a 26°C odpoledne. Nebude žádná oblačnost, a tak můžete očekávat celodenní slunečné počasí. Rychlost větru dosáhne 9 km/h a atmosférický tlak bude 1017 hPa.",
    },
  };

  const mainElement = document.querySelector('main');

  mainElement.innerHTML += `
    <div class="predpoved-karta">
        <div class="flex">
            <h1>${predpoved.pondeli.den}</h1>
            <h1><span> / </span>${predpoved.pondeli.denni_teplota}°C</h1>
            <h1><span> / </span>${predpoved.pondeli.stav_pocasi}</h1>
            <p><a class="link" href="detail.html#pondeli">Více</a></p>
        </div>
    </div>
  `;

  mainElement.innerHTML += `
    <div class="predpoved-karta">
        <div class="flex">
            <h1>${predpoved.utery.den}</h1>
            <h1><span> / </span>${predpoved.utery.denni_teplota}°C</h1>
            <h1><span> / </span>${predpoved.utery.stav_pocasi}</h1>
            <p><a class="link" href="detail.html#utery">Více</a></p>
        </div>
    </div>
  `;

  mainElement.innerHTML += `
    <div class="predpoved-karta">
        <div class="flex">
            <h1>${predpoved.streda.den}</h1>
            <h1><span> / </span>${predpoved.streda.denni_teplota}°C</h1>
            <h1><span> / </span>${predpoved.streda.stav_pocasi}</h1>
            <p><a class="link" href="detail.html#streda">Více</a></p>
        </div>
    </div>
  `;

  mainElement.innerHTML += `
    <div class="predpoved-karta">
        <div class="flex">
            <h1>${predpoved.ctvrtek.den}</h1>
            <h1><span> / </span>${predpoved.ctvrtek.denni_teplota}°C</h1>
            <h1><span> / </span>${predpoved.ctvrtek.stav_pocasi}</h1>
            <p><a class="link" href="detail.html#ctvrtek">Více</a></p>
        </div>
    </div>
  `;

  mainElement.innerHTML += `
    <div class="predpoved-karta">
        <div class="flex">
            <h1>${predpoved.patek.den}</h1>
            <h1><span> / </span>${predpoved.patek.denni_teplota}°C</h1>
            <h1><span> / </span>${predpoved.patek.stav_pocasi}</h1>
            <p><a class="link" href="detail.html#patek">Více</a></p>
        </div>
    </div>
  `;

  mainElement.innerHTML += `
    <div class="predpoved-karta">
        <div class="flex">
            <h1>${predpoved.sobota.den}</h1>
            <h1><span> / </span>${predpoved.sobota.denni_teplota}°C</h1>
            <h1><span> / </span>${predpoved.sobota.stav_pocasi}</h1>
            <p><a class="link" href="detail.html#sobota">Více</a></p>
        </div>
    </div>
  `;

  mainElement.innerHTML += `
    <div class="predpoved-karta">
        <div class="flex">
            <h1>${predpoved.nedele.den}</h1>
            <h1><span> / </span>${predpoved.nedele.denni_teplota}°C</h1>
            <h1><span> / </span>${predpoved.nedele.stav_pocasi}</h1>
            <p><a class="link" href="detail.html#nedele">Více</a></p>
        </div>
    </div>
  `;



  