import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;
  const body = document.body;

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.setAttribute('data-theme', 'dark');
    } else {
      body.removeAttribute('data-theme');
    }
  });

  const buttons = document.querySelectorAll('.welcome-guide button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log(`Button clicked: ${button.textContent}`);
    });
  });
});
