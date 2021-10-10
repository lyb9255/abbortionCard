const arrows = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');
const questionboxes = document.querySelectorAll('.questionbox');

questionboxes.forEach((questionbox, index) => {

  questionbox.addEventListener('click', () => {

    questionboxes.forEach((questionbox1, index1) => {
      if (questionbox1 !== questionbox && questionbox1.classList.contains('active')) {
        questionbox.classList.remove('active');
        questions[index1].classList.remove('active');
        arrows[index1].classList.remove('active');
        answers[index1].classList.remove('active');
      }
    });

    questionbox.classList.toggle('active');
    questions[index].classList.toggle('active');
    arrows[index].classList.toggle('active');
    answers[index].classList.toggle('active');

  });

});