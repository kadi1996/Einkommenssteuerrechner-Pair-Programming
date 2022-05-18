let married = document.getElementById("married");
let notmarried = document.getElementById("notmarried");

let berechne = () => {
  let zveValue = Number(document.getElementById("zve").value);
  let steuerjahr = Number(document.getElementById("steuerjahr").value);
  let kirchensteuer = document.getElementById("kirchensteuer").value;
  let est, y, z, brutto, Kstoutput;
  // VERHEIRATET
  if (married.checked) {
    brutto = zveValue / 2;
  } else if (notmarried.checked) {
    brutto = zveValue;
  }
  // STEUERJAHR 2021
  if (steuerjahr == "2021") {
    if (brutto <= 9744) {
      est = 0;
    } else if (brutto >= 9745 && brutto <= 14753) {
      y = (brutto - 9744) / 10000;
      est = Math.floor((995.21 * y + 1400) * y);
    } else if (brutto >= 14754 && brutto <= 57918) {
      z = (brutto - 14753) / 10000;
      est = Math.floor((208.85 * z + 2397) * z + 950.96);
    } else if (brutto >= 57919 && brutto <= 274612) {
      est = Math.floor(0.42 * brutto - 9136.63);
    } else if (brutto >= 274613) {
      est = Math.floor(0.45 * brutto - 17374.99);
    }
  }
  // STEUERJAHR 2020
  if (steuerjahr == "2020") {
    if (brutto <= 9408) {
      est = 0;
    } else if (brutto >= 9409 && brutto <= 14532) {
      y = (brutto - 9408) / 10000;
      est = Math.floor((972.87 * y + 1400) * y);
    } else if (brutto >= 14533 && brutto <= 57051) {
      z = (brutto - 14532) / 10000;
      est = Math.floor((212.2 * z + 2397) * z + 972.79);
    } else if (brutto >= 57052 && brutto <= 270500) {
      est = Math.floor(0.42 * brutto - 8963.74);
    } else if (brutto >= 270501) {
      est = Math.floor(0.45 * brutto - 17078.74);
    }
  }
  // STEUERJAHR 2019
  if (steuerjahr == "2019") {
    if (brutto <= 9168) {
      est = 0;
    } else if (brutto >= 9169 && brutto <= 14254) {
      y = (brutto - 9168) / 10000;
      est = Math.floor((980.14 * y + 1400) * y);
    } else if (brutto >= 14255 && brutto <= 55960) {
      z = (brutto - 14254) / 10000;
      est = Math.floor((216.16 * z + 2397) * z + 965.58);
    } else if (brutto >= 55961 && brutto <= 265326) {
      est = Math.floor(0.42 * brutto - 8780.9);
    } else if (brutto >= 265327) {
      est = Math.floor(0.45 * brutto - 16740.68);
    }
  }
  // VERHEIRATETCHECK FÜR DIE EINKOMMENSSTEUER
  if (married.checked) {
    estbrutto = est * 2;
  } else if (notmarried.checked) {
    estbrutto = est;
  }
  // KIRCHENSTEUER
  if (kirchensteuer == "0") {
    est = est;
    outputKst.innerHTML = 0 + "€";
    outputNet.innerHTML = zveValue - estbrutto.toFixed(2) + "€";
  } else if (kirchensteuer == "8") {
    Kstoutput = est * 0.08;
    outputKst.innerHTML = Kstoutput.toFixed(2) + "€";
    outputNet.innerHTML =
      zveValue - estbrutto.toFixed(2) - Kstoutput.toFixed(2) + "€";
  } else if (kirchensteuer == "9") {
    Kstoutput = est * 0.09;
    outputKst.innerHTML = Kstoutput.toFixed(2) + "€";
    outputNet.innerHTML =
      zveValue - estbrutto.toFixed(2) - Kstoutput.toFixed(2) + "€";
  }
  // OUTPUT FÜR ESt & zvE
  outputZve.innerHTML = zveValue + "€";
  outputEst.innerHTML = estbrutto.toFixed(0) + "€";
};
