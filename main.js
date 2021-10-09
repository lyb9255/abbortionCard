const arrows = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');
const questionboxes = document.querySelectorAll('.questionbox');

arrows.forEach((arrow, index) => {

  arrow.addEventListener('click', () => {

    arrows.forEach((arrow1, index1) => {
      if (arrow1 !== arrow && arrow1.classList.contains('active') === true) {
        arrow1.classList.remove('active');
        questions[index1].classList.remove('active');
        answers[index1].classList.remove('active');
      }
    });

    arrow.classList.toggle('active');
    questions[index].classList.toggle('active');
    answers[index].classList.toggle('active');

  });

});