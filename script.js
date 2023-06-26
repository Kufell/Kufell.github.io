function toggleLanguage(lang) {
    var toggleEn = document.getElementById('toggle-en');
    var togglePl = document.getElementById('toggle-pl');
    var textEn = document.getElementById('text-en');
    var textPl = document.getElementById('text-pl');
  
    if (lang === 'en') {
      console.log(lang);
      toggleEn.classList.add('active');
      togglePl.classList.remove('active');
      if (textEn) {
        textEn.style.display = 'block';
      }
      if (textPl) {
        textPl.style.display = 'none';
      }
    } else if (lang === 'pl') {
      console.log(lang);
      togglePl.classList.add('active');
      toggleEn.classList.remove('active');
      if (textPl) {
        textPl.style.display = 'block';
      }
      if (textEn) {
        textEn.style.display = 'none';
      }
    }
  }
  console.log("amfa");
  toggleLanguage('en');