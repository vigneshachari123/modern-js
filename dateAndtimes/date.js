// const now = new Date();
// const joined = new Date("may 9 2022 ");

// const diff = now.getTime() - joined.getTime();
// console.log(diff);

// const min = Math.round(diff / 1000 / 60);
// const hour = Math.round(min / 60);
// const day = Math.round(diff / 1000 / (60 * 60) / 24);

// console.log(`you joined ${day} day before`);

const clock = document.querySelector(".clock");
//console.log(clock);

const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${h} </span>:
    <span>${m} </span>:
    <span>${s} </span>  `;

  clock.innerHTML = html;
};

setInterval(tick, 2000);
