document.addEventListener('DOMContentLoaded', () => {
  // Get the navigation menu element
  const navMenu = document.querySelector('.nav-menu');

  // Get the toggle button element
  const toggleBtn = document.querySelector('.toggle-btn');

  // Add an event listener to the toggle button element
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      // Toggle the "active" class on the navigation menu element
      if (navMenu) {
        navMenu.classList.toggle('active');
      }
    });
  }

  // Get all the tabs
  const tabs = document.querySelectorAll('.tab');

  // Loop through the tabs and add an event listener to each one
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove the "active" class from all the tabs
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });

      // Add the "active" class to the clicked tab
      tab.classList.add('active');

      // Get the target content element
      const targetId = tab.dataset.target;
      const target = document.getElementById(targetId);

      // Get all the content elements and hide them
      const contents = document.querySelectorAll('.tab-content');
      contents.forEach((content) => {
        content.classList.remove('active');
      });

      // Show the target content element
      if (target) {
        target.classList.add('active');
      }
    });
  });

  // Get the "back to top" button
  const backToTopBtn = document.querySelector('.back-to-top');

  // Add an event listener to the "back to top" button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Get the "Get Started" button
  const getStartedBtn = document.querySelector('.cta');
  const heroSection = document.querySelector('.hero');
  const getStartedSection = document.querySelector('#get-started-section');
  
  getStartedBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getStartedSection.scrollIntoView({ behavior: 'smooth' });
    heroSection.classList.add('hide');
  });
  
  // Add an event listener to the "Get Started" button
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      // Get the position of the "Get Started" section
      const getStartedSection = document.querySelector('.get-started-section');
      const position = getStartedSection.offsetTop;

      // Scroll to the "Get Started" section
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  }
});
