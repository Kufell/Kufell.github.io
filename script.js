document.getElementById('toggle-en').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('toggle-pl').classList.remove('active');
  });
  
  document.getElementById('toggle-pl').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('toggle-en').classList.remove('active');
  });