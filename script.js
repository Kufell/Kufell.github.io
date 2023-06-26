function toggleLanguage(lang) {
    if (lang === 'en') {
      document.getElementById('toggle-en').classList.add('active');
      document.getElementById('toggle-pl').classList.remove('active');
      document.getElementById('text-en').style.display = 'block';
      document.getElementById('text-pl').style.display = 'none';
    } else if (lang === 'pl') {
      document.getElementById('toggle-pl').classList.add('active');
      document.getElementById('toggle-en').classList.remove('active');
      document.getElementById('text-pl').style.display = 'block';
      document.getElementById('text-en').style.display = 'none';
    }
  }
  console.log("amfa");