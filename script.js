 function checkQuiz() {
  const form = document.getElementById("quiz-form");
  const result = document.getElementById("quiz-result");

  let score = 0;
  let total = 8;

  for (let i = 1; i <= total; i++) {
    const answer = form.querySelector(`input[name="q${i}"]:checked`);
    if (answer && answer.value === "true") {
      score++;
    }
  }

  let message = "";

  if (score === total) {
    message = "🌕 Perfekt! Du beherrschst den Begriff „Mondschein“ auf universitärem Niveau.";
  } else if (score >= 6) {
    message = "🌙 Sehr gut! Dein Verständnis ist fundiert und differenziert.";
  } else if (score >= 4) {
    message = "🌗 Gut, aber einige Aspekte können noch vertieft werden.";
  } else {
    message = "🌑 Du solltest die lexikalischen und kulturellen Aspekte noch einmal lesen.";
  }

  result.innerHTML = `Ergebnis: <strong>${score} / ${total}</strong><br>${message}`;
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function activateMenu() {
  let scrollPos = window.scrollY + 100; // compensation navbar

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", activateMenu);