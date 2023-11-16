import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';

import Sidebar from '../../components/Cart/Sidebar';

import { mockCartItems } from '../../__mocks__/products';
import { countTotalPrice } from '../../utils/itemUtils';

describe('Componente Sidebar do carrinho de compras', () => {

  it('Testa carregamento correto do componente', () => {
    const tree = renderer
      .create(
        <Sidebar
          onClose={() => {}}
          cartItemList={mockCartItems}
          onChangeCartItemList={() => {}}
          onRemoveItem={() => {}}
          onAddItem={() => {}}
        />
      );

    expect(tree).toMatchSnapshot();
  });

  it('Testa se o botão de fechar chama a função onClose', () => {
    const mockOnClose = jest.fn();
    render(
      <Sidebar
        onClose={mockOnClose}
        cartItemList={[]}
        onChangeCartItemList={() => {}}
        onRemoveItem={() => {}}
        onAddItem={() => {}}
      />
    );

    fireEvent.click(screen.getByText('X'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('Testa se o total calculado é exibido corretamente', () => {
    render(
      <Sidebar
        onClose={() => {}}
        cartItemList={mockCartItems}
        onChangeCartItemList={() => {}}
        onRemoveItem={() => {}}
        onAddItem={() => {}}
      />
    );

    const totalPrice = countTotalPrice(mockCartItems);
    expect(screen.getByText(`R$${totalPrice}`)).toBeDefined();
  });

  it('Testa se o item e removido corretamente da listagem', () => {
    render(
      <Sidebar
        onClose={() => {}}
        cartItemList={mockCartItems}
        onChangeCartItemList={() => {}}
        onRemoveItem={() => {}}
        onAddItem={() => {}}
      />
    );

    const removeProductButton = screen.queryAllByText('X')[1];
    fireEvent.click(removeProductButton);
  });
});
