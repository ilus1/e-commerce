import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react';

import ProductList from '../../components/ProductList';

import { mockProducts, mockCartItems } from '../../__mocks__/products';

describe('Componente de Listagem de produtos', () => {
  it('Testa carregamento correto', () => {
    const mockAddProduct = jest.fn();
    const mockRemoveProduct = jest.fn();

    const tree = renderer
      .create(<ProductList
        isLoading={false}
        products={mockProducts}
        cartItems={mockCartItems}
        onAddProduct={mockAddProduct}
        onRemoveProduct={mockRemoveProduct}
      />)
      .toJSON()

    expect(tree).toMatchSnapshot();
  });

  it('Deve mostrar botao de subtrair items', () => {
    const cartItems = [{ ...mockCartItems[0], count: 2 }];
    const mockAddProduct = jest.fn();
    const mockRemoveProduct = jest.fn();

    render(<ProductList
      isLoading={false}
      products={mockProducts}
      cartItems={cartItems}
      onAddProduct={mockAddProduct}
      onRemoveProduct={mockRemoveProduct}
    />);

    const removeButton = screen.getByTestId('RemoveOutlinedIcon');
    fireEvent.click(removeButton);
    expect(mockRemoveProduct).toHaveBeenCalledTimes(1);
  });

  it('Deve mostrar botao de "comprar" produto ao carrinho', () => {
    const cartItems = [{ ...mockCartItems[0], count: 0 }];
    const mockAddProduct = jest.fn();
    const mockRemoveProduct = jest.fn();

    render(<ProductList
      isLoading={false}
      products={mockProducts}
      cartItems={cartItems}
      onAddProduct={mockAddProduct}
      onRemoveProduct={mockRemoveProduct}
    />);

    const button = screen.getByTestId('LocalMallOutlinedIcon').closest('button');
    expect(button?.textContent).toBe('Comprar');
    button?.click();
    expect(mockAddProduct).toHaveBeenCalledTimes(1);
  });

  it('Deve adicionar produto ao carrinho', () => {
    const cartItems = mockCartItems;
    const mockAddProduct = jest.fn(() => cartItems[0].count += 1);
    const mockRemoveProduct = jest.fn(() => mockProducts.pop());

    render(<ProductList
      isLoading={false}
      products={mockProducts}
      cartItems={cartItems}
      onAddProduct={mockAddProduct}
      onRemoveProduct={mockRemoveProduct}
    />);

    const addButton = screen.getByTestId('AddOutlinedIcon');
    const removeButton = screen.getByTestId('DeleteOutlineIcon');
    fireEvent.click(addButton);
    expect(mockAddProduct).toHaveBeenCalledWith(mockProducts[0]);

    const counter = removeButton.nextSibling;
    expect(counter?.textContent).toBe("1");

    fireEvent.click(removeButton);
    expect(mockRemoveProduct).toHaveBeenCalledWith(mockCartItems[0]);
  });

  it('Deve testar loader', () => {
    render(<ProductList
      isLoading={true}
      products={mockProducts}
      cartItems={[]}
      onAddProduct={() => {}}
      onRemoveProduct={() => {}}
    />);

    const loading = screen.getAllByText('Loading...');
    expect(loading.length).toBe(8);
  });
});
