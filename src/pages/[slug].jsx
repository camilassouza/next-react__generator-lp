import P from 'prop-types';
import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';

export default function Page({ data }) {
  return <Home data={data}></Home>;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths = async () => {
  let paths = await loadPages();
  paths = [paths].map((page) => {
    return { params: { slug: page.slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug);
  } catch (e) {
    data = null;
  }

  if (!data || data === 'undefined') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
