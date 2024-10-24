import P from 'prop-types';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import Head from 'next/head';

function Home({ data }) {
  if (!data || data === undefined) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      <Head>
        <title>{data.title}</title>
      </Head>
      {sections.map((section, index) => {
        const component = section.component || section['__component'];
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-colomns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (
          component === 'section.section-content' ||
          component === 'section.text-grid'
        ) {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (
          component === 'section.section-grid-image' ||
          component === 'section.image-grid'
        ) {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;

Home.propTypes = {
  data: P.object,
};
