// Elements
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu-container');
const headerNavLinks = document.querySelector('.header__navigation ul');
const headerFeatureLink = document.querySelector(
  '.header__navigation--features'
);
const headerCompanyLink = document.querySelector(
  '.header__navigation--company'
);
const headerSubMenuFeatures = document.querySelector(
  '.header__navigation-icon--features'
);
const headerSubMenuCompany = document.querySelector(
  '.header__navigation-icon--company'
);

// Event Listioner

// Open mobile side menu navigation

headerMenu.addEventListener('click', (e) => {
  header.classList.toggle('active');
});

// Features Sub Menu

headerSubMenuFeatures.addEventListener('click', () => {
  headerNavLinks.classList.toggle('show');
});

headerFeatureLink.addEventListener('click', () => {
  headerNavLinks.classList.toggle('show');
});

// Company Sub Menu

headerSubMenuCompany.addEventListener('click', () => {
  headerNavLinks.classList.toggle('display');
});

headerCompanyLink.addEventListener('click', () => {
  headerNavLinks.classList.toggle('display');
});
