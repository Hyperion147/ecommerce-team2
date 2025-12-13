// Navigation configuration for the ecommerce application
export const navigationItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: 'fas fa-home',
    showInNav: true
  },
  {
    id: 'shop',
    label: 'Shop',
    path: '/shop',
    icon: 'fas fa-store',
    showInNav: true
  },
  {
    id: 'men',
    label: 'Men',
    path: '/men',
    icon: 'fas fa-male',
    showInNav: true
  },
  {
    id: 'women',
    label: 'Women',
    path: '/women',
    icon: 'fas fa-female',
    showInNav: true
  },
  {
    id: 'about',
    label: 'About',
    path: '/about',
    icon: 'fas fa-info-circle',
    showInNav: true
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    icon: 'fas fa-envelope',
    showInNav: true
  },
  {
    id: 'product-details',
    label: 'Product Details',
    path: '/product/:id',
    icon: 'fas fa-eye',
    showInNav: false // Hidden from main nav but accessible via direct link
  }
];

// Helper function to get navigation items for display
export const getNavItems = () => {
  return navigationItems.filter(item => item.showInNav);
};

// Helper function to find route by path
export const findRouteByPath = (path) => {
  return navigationItems.find(item => item.path === path);
};

// Helper function to check if a path is active
export const isActivePath = (currentPath, targetPath) => {
  if (targetPath === '/' && currentPath === '/') return true;
  if (targetPath !== '/' && currentPath === targetPath) return true;
  return false;
};