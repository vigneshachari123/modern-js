const form = document.querySelector(".quiz-form");
const correctAnswers = ["B", "B", "B", "B"];
const selectScoreDiv = document.querySelector(".result-sc");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  ["A", "B"];
  userAnswers.forEach((answer, index) => {
    if (answer == correctAnswers[index]) {
      score += 25;
    }
  });
  const a = selectScoreDiv.querySelector("h2");
  a.textContent = `you scored ${score}%`;
  // selectScoreDiv.setAttribute("class", "result-sc text-center d-block py-4");
  selectScoreDiv.classList.remove("d-none");
  scrollTo(0, 0);
  timer();
});

let i = 0;

const timer = setInterval(() => {
  console.log(`hi`);
  i++;
  if (i == 4) {
    clearInterval(timer);
  }
}, 1000);
