let mobileMenuButton=document.getElementById('mobile-menu-button');
let siteMenu=document.getElementById('site-menu');
function toggleMobileMenu() {

  if (!siteMenu.style.display) {
    siteMenu.style.display='flex';
  } else {
    siteMenu.style.display="";
  }
}
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
