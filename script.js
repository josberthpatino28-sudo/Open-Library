document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Search functionality
  const searchInput = document.querySelector('.search-input');
  const searchIcon = document.querySelector('.search-icon');
  
  searchInput.addEventListener('focus', function() {
    searchIcon.style.color = '#d4af37';
  });
  
  searchInput.addEventListener('blur', function() {
    searchIcon.style.color = 'rgba(255, 255, 255, 0.6)';
  });

  // Book card interactions
  const bookCards = document.querySelectorAll('.book-card');
  
  bookCards.forEach(card => {
    card.addEventListener('click', function() {
      const title = this.querySelector('.book-overlay h3').textContent;
      console.log(`Clicked on: ${title}`);
    });
  });

  // Header scroll effect
  let lastScrollTop = 0;
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.transform = 'translateX(-50%) translateY(-100%)';
    } else {
      header.style.transform = 'translateX(-50%) translateY(0)';
    }
    lastScrollTop = scrollTop;
  });

  // Menu icon functionality
  const menuIcon = document.querySelector('.menu-icon');
  
  menuIcon.addEventListener('click', function() {
    this.style.transform = 'rotate(90deg)';
    setTimeout(() => {
      this.style.transform = 'rotate(0deg)';
    }, 200);

    console.log('Menu clicked - implement sidebar/menu functionality');
  });

  // User and settings icons
  const userIcon = document.querySelector('.user-icon');
  const settingsIcon = document.querySelector('.settings-icon');
  
  userIcon.addEventListener('click', function() {
    console.log('User profile clicked');
  });
  
  settingsIcon.addEventListener('click', function() {
    console.log('Settings clicked');
  });

  document.documentElement.style.scrollBehavior = 'smooth';

  // SECOND DOMContentLoaded — remove it
  const images = document.querySelectorAll('img');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;

        if (!img.classList.contains('visible')) {
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.6s ease';

          if (img.complete) {
            img.style.opacity = '1';
            img.classList.add('visible');
          } else {
            img.onload = function() {
              img.style.opacity = '1';
              img.classList.add('visible');
            };
          }
        }

        observer.unobserve(img);
      }
    });
  }, { threshold: 0.1 });

  images.forEach(img => imageObserver.observe(img));
});