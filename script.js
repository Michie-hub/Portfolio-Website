window.addEventListener('DOMContentLoaded', () => {

const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark-mode');
    }
    const toggleBtn = document.getElementById('mode-toggle-btn');
      toggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        const newTheme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
            });
          });