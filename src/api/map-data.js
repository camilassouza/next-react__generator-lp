import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';

export const mapData = (pageData) => {
  const { slug = '', title = '', sections = [], menu = {} } = pageData;
  return {
    slug: slug,
    title: title,
    sections: mapSections(sections),
    menu: mapMenu(menu),
  };
};
