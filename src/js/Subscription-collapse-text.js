document.querySelector('.toggle-button').addEventListener('click', function () {
    const content = document.querySelector('.text-content');
    const gradient = document.querySelector('.gradient-overlay');
  
    if (content.classList.contains('max-h-32')) {
      content.classList.remove('max-h-32');
      content.classList.add('max-h-full');
      gradient.classList.add('hidden');    
      this.textContent = 'مشاهده کمتر';
    } else {
      content.classList.add('max-h-32');
      content.classList.remove('max-h-full');
      gradient.classList.remove('hidden');  
      this.textContent = 'مشاهده بیشتر';
    }
  });