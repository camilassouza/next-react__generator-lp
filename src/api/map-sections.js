export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (
      section.__component === 'section.section-two-columns' ||
      section.component === 'section.section-two-columns'
    ) {
      return mapSectionTwoColumns(section);
    }
    if (
      section.__component === 'section.section-content' ||
      section.component === 'section.section-content'
    ) {
      return mapSectionContent(section);
    }
    if (
      section.__component === 'section.section-grid' ||
      section.component === 'section.section-grid'
    ) {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { section_id: sectionId = '' } = false,
  } = section;

  const background = section.background || section.metadata?.background || true;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { section_id: sectionId = '' } = false,
  } = section;

  const background = section.background || section.metadata?.background || true;

  return {
    component,
    title,
    background,
    sectionId,
    html,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  const background = section.background || section.metadata?.background || true;

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  const background = section.background || section.metadata?.background || true;

  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
