function toggleLanguage(lang) {
    var toggleEn = document.getElementById('toggle-en');
    var togglePl = document.getElementById('toggle-pl');
    var textSections = document.getElementsByClassName('text-section');
  
    if (lang === 'en') {
      toggleEn.classList.add('active');
      togglePl.classList.remove('active');
  
      for (var i = 0; i < textSections.length; i++) {
        var textSection = textSections[i];
        if (textSection.classList.contains('text-en')) {
          textSection.style.display = 'block';
        } else {
          textSection.style.display = 'none';
        }
      }
    } else if (lang === 'pl') {
      togglePl.classList.add('active');
      toggleEn.classList.remove('active');
  
      for (var i = 0; i < textSections.length; i++) {
        var textSection = textSections[i];
        if (textSection.classList.contains('text-pl')) {
          textSection.style.display = 'block';
        } else {
          textSection.style.display = 'none';
        }
      }
    }
  }
  
  // Execute toggleLanguage function on page load to set the initial language
  toggleLanguage('en');

  function showFullImage(src) {
    var fullImageOverlay = document.getElementById('full-image-overlay');
    var fullImage = document.getElementById('full-image');
  
    fullImage.src = src;
    fullImageOverlay.style.display = 'flex';
  }
  
  function hideFullImage() {
    var fullImageOverlay = document.getElementById('full-image-overlay');
  
    fullImageOverlay.style.display = 'none';
  }
  
  
  
  