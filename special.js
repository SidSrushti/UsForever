document.getElementById('envelopeContainer').addEventListener('click', function () {
    const envelopeContainer = document.getElementById('envelopeContainer');
    const letter = document.getElementById('letter');
  
    // Add ripping animation
    envelopeContainer.classList.add('ripped');
  
    // After the ripping animation, reveal the letter
    setTimeout(() => {
      letter.style.opacity = '1';
    }, 1000);
  
    // Hide the envelope container after the animation
    setTimeout(() => {
      envelopeContainer.style.display = 'none';
    }, 1000);
  });
  