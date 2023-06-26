document.getElementById('toggle-en').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('toggle-pl').classList.remove('active');
    document.getElementById('text-en').classList.remove('hidden');
    document.getElementById('text-pl').classList.add('hidden');
  });
  
  document.getElementById('toggle-pl').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('toggle-en').classList.remove('active');
    document.getElementById('text-pl').classList.remove('hidden');
    document.getElementById('text-en').classList.add('hidden');
  });