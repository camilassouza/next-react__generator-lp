export const mapMenu = (menu = {}) => {
  if (!menu || menu.length === 0) {
    return;
  }

  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
  } = menu[0];
  const menulinks = menu[0].menu_links || [];

  const srcImg = menu.logo && menu.logo.url ? menu.logo.url : '';

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(menulinks),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
