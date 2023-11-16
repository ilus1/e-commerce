import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import CartItemList from '../../components/Cart/CartItemList';

import { mockCartItems } from '../../__mocks__/products';

describe('Componente da lista de itens do carrinho', () => {

  it('Testa carregamento correto do componente', () => {
    const tree = renderer
      .create(
        <CartItemList
          cartItemList={mockCartItems}
          onRemoveItem={() => {}}
          onAddItem={() => {}}
          onRemoveProduct={() => {}}
        />
      );

    expect(tree).toMatchSnapshot();
  });

  it('Testa se todos os itens do carrinho estão sendo renderizados', () => {
    const { getAllByTestId } = render(
      <CartItemList
        cartItemList={mockCartItems}
        onRemoveItem={() => {}}
        onAddItem={() => {}}
        onRemoveProduct={() => {}}
      />
    );

    const cartItemComponents = getAllByTestId('cart-item-component');
    expect(cartItemComponents.length).toBe(mockCartItems.length);
  });
});
