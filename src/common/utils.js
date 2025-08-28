function isNavItemActive(item, pathname) {
  if (item.to && pathname === item.to) return true;

  if (item.items) {
    return item.items.some((child) => isNavItemActive(child, pathname));
  }

  return false;
}

export { isNavItemActive };
