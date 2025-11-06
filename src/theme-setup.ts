import { ipcRenderer } from 'electron';

document.addEventListener('DOMContentLoaded', () => {
  const themeOptions = document.querySelectorAll('.theme-option');
  const finishBtn = document.getElementById('finish-btn') as HTMLButtonElement;
  let selectedTheme = 'light';

  themeOptions.forEach(option => {
    option.addEventListener('click', () => {
      themeOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      selectedTheme = option.getAttribute('data-theme');
    });
  });

  finishBtn.addEventListener('click', () => {
    ipcRenderer.send('save-theme', selectedTheme);
  });
});
