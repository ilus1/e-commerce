import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../../components/Cart/CartItem';
import { mockCartItems } from '../../__mocks__/products';

describe('Componente de um item do carrinho', () => {
  it('Testa carregamento correto do componente', () => {
    const tree = renderer
      .create(
        <CartItem
          item={mockCartItems[0]}
          onRemove={() => {}}
          onAddItem={() => {}}
          onRemoveItem={() => {}}
        />
      );

    expect(tree).toMatchSnapshot();
  });

  it('Testa a função de remoção do item quando o botão de fechar é clicado', () => {
    const mockOnRemove = jest.fn();
    render(
      <CartItem
        item={mockCartItems[0]}
        onRemove={mockOnRemove}
        onAddItem={() => {}}
        onRemoveItem={() => {}}
      />
    );

    fireEvent.click(screen.getByText('X'));
    expect(mockOnRemove).toHaveBeenCalledWith(mockCartItems[0]);
  });
});
