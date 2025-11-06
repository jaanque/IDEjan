import './styles.css';
import Store from 'electron-store';

const store = new Store();

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;
  const body = document.body;
  const subtitle = document.querySelector('.subtitle') as HTMLElement;

  // Set the theme from the saved preference
  const savedTheme = store.get('userTheme');
  if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
  }

  // Set the name from the saved preference
  const savedName = store.get('userName');
  if (savedName) {
    subtitle.textContent = savedName as string;
  }

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.setAttribute('data-theme', 'dark');
      store.set('userTheme', 'dark');
    } else {
      body.removeAttribute('data-theme');
      store.set('userTheme', 'light');
    }
  });

  const buttons = document.querySelectorAll('.welcome-guide button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log(`Button clicked: ${button.textContent}`);
    });
  });
});
