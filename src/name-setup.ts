import { ipcRenderer } from 'electron';

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name-input') as HTMLInputElement;
  const continueBtn = document.getElementById('continue-btn') as HTMLButtonElement;

  continueBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
      ipcRenderer.send('save-name', name);
    }
  });
});
