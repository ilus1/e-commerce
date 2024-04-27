import { useState } from 'react';
import { useQuery } from 'react-query';

import Topbar from '../../components/Topbar/index.tsx'
import Footer from '../../components/Footer/index.tsx'
import ProductList from '../../components/ProductList';
import Sidebar from '../../components/Cart/Sidebar'

import { fetchProducts } from '../../utils/requestUtils';

interface CartItem {
  id: string
  name: string
  price: number
  photo: string
  description: string
  count: number
}

interface Product {
  id: string
  name: string
  price: number
  photo: string
  description: string
}

function ShoppingList() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { isLoading, error, data } = useQuery('products', () => fetchProducts());

  console.log(data, error, isLoading)
  const handleAddProduct = (product: CartItem | Product) => {
    const item = cartItems.find((item) => item.id === product.id);

    if (item) {
      item.count += 1
      setCartItems([...cartItems.filter((item) => item.id !== product.id), item])
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }])
    }
  }

  const handleRemoveProduct = (cartItem: CartItem) => {
    const cartItemsWithoutProduct = cartItems.filter((item) => item.id !== cartItem.id);

    if (cartItem.count == 1) {
      setCartItems([...cartItemsWithoutProduct])
    } else {
      cartItem.count -= 1
      setCartItems([...cartItemsWithoutProduct, cartItem])
    }
  }

  if (error) {
    return <h1>Failed to fetch products.</h1>;
  }

  return (
    <>
      {isOpen && (
        <Sidebar
          isOpen={isOpen}
          onChangeCartItemList={setCartItems}
          cartItemList={cartItems}
          onClose={() => setIsOpen(false)}
          onAddItem={handleAddProduct}
          onRemoveItem={handleRemoveProduct}
        />
      )}
      <Topbar
        productCounter={cartItems.reduce((sum, item) => sum + item.count, 0)}
        onClick={() => setIsOpen(isOpen => !isOpen)}
      />
      <ProductList
        isLoading={isLoading}
        cartItems={cartItems}
        products={data ? data : []}
        onAddProduct={handleAddProduct}
        onRemoveProduct={handleRemoveProduct}
      />
      <Footer />
    </>
  );
}

export default ShoppingList
