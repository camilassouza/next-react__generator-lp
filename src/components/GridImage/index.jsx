import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';

export const GridImage = ({
  title,
  image,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>

        <Styled.Grid>
          {image.data.map((el) => (
            <Styled.GridElement key={el.id}>
              <Styled.Image
                src={el.attributes.url} // Acessando a URL aqui
                alt={el.attributes.alternativeText || el.attributes.name} // Usando alternativeText ou name como fallback
              />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  image: P.shape({
    data: P.arrayOf(
      P.shape({
        id: P.number.isRequired, // ID adicionado para a chave
        attributes: P.shape({
          url: P.string.isRequired,
          alternativeText: P.string,
          name: P.string.isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
  sectionId: P.string,
};
