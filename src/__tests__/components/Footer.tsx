import renderer from 'react-test-renderer'

import Footer from '../../components/Footer'

describe('Teste do componente Footer', () => {
  it('Testa carregamento correto', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON()

    expect(tree).toMatchSnapshot();
  });
});
