import renderer from 'react-test-renderer'
import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from '../../components/QuantitySelector';

import { mockCartItems } from '../../__mocks__/products';

describe.only('Componente de alterar quantidade de um item no carrinho', () => {

  it('Testa carregamento correto', () => {
    const tree = renderer
    .create(
      <QuantitySelector
        item={mockCartItems[0]}
        onAdd={() => {}}
        onRemove={() => {}}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('Testa botao de aumentar quantidade do produto', () => {
    const mockOnAdd = jest.fn();
    render(
      <QuantitySelector
        item={mockCartItems[0]}
        onAdd={mockOnAdd}
        onRemove={() => {}}
      />
    );

    fireEvent.click(screen.getByText('+'));
    expect(mockOnAdd).toHaveBeenCalledWith(mockCartItems[0]);
  });

  it('Testa botao de diminuir quantidade do produto', () => {
    const mockOnRemove = jest.fn();
    render(
      <QuantitySelector
        item={mockCartItems[0]}
        onAdd={() => {}}
        onRemove={mockOnRemove}
      />
    );

    fireEvent.click(screen.getByText('-'));
    expect(mockOnRemove).toHaveBeenCalledWith(mockCartItems[0]);
  });
});
