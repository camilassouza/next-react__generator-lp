import P from 'prop-types';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';
export default function Index({ data = null }) {
  return <Home data={data}></Home>;
}

export const getStaticProps = async () => {
  let data;

  try {
    data = await loadPages('lp-strap');
  } catch (e) {
    console.error('error', e);
  }

  if (!data || data.null) {
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

Index.propTypes = {
  data: P.object,
};
