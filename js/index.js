let btnCalc = document.querySelector(`.btnCalc`);
let result = document.querySelector(`p.result`);
document.querySelector(`.btn-date`).style.display = `none`;

btnCalc.addEventListener(`click`, function () {
  let totalUni = 0;
  document.querySelectorAll(`.uni input`).forEach((e) => {
    totalUni += +e.value;
  });
  if (totalUni == 100) {
    totalUni = 0;
    for (let i = 0; i < 2; i++) {
      totalUni +=
        (+document.querySelectorAll(`.uni input`)[i].value / 100) *
        +document.querySelectorAll(`.degree input`)[i].value;
    }
    result.innerHTML = `نسبتك الموزونة هي ${totalUni}%
    <br>
    <span style="color:black;font-size:14px">بالتوفيق ❤️</span>`;
    result.style.color = `#005950`;
    result.style.fontSize = `28px`;
    document.querySelector(`.btn-date`).style.display = `inline`;
  } else {
    document.querySelector(`.btn-date`).style.display = `none`;
    result.innerHTML = `النسب المحددة من الجامعة يجب أن يكون مجموعها = 100    `;
    result.style.color = `red`;
    result.style.fontSize = `28px`;
    result.style.backgroundColor = `white`;
  }
});
