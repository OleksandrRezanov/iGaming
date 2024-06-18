const learnMoreButton = document.querySelector('#learn-more-btn');

learnMoreButton.addEventListener('click', () => {
  document.getElementById('about-product').scrollIntoView({ behavior: 'smooth' });
  });
