document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".parole i");
  let currentIndex = 0;
  const animationDuration = 3000;
  const visibleDuration = 2000;

  function rotateWords() {
    words.forEach((word, i) => {
      word.style.animation = "none";
      word.offsetHeight;
      word.style.opacity = "0";
      word.style.transform = "translateY(100%)";
    });

    const currentWord = words[currentIndex];
    currentWord.style.animation = `rotateWord ${
      animationDuration / 1000
    }s ease-in-out forwards`;

    currentIndex = (currentIndex + 1) % words.length;

    setTimeout(rotateWords, visibleDuration);
  }

  rotateWords();
});
