import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.welcome-guide button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log(`Button clicked: ${button.textContent}`);
    });
  });
});
