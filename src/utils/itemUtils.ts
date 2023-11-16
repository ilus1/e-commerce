interface CartItem {
  id: string
  name: string
  price: number
  photo: string
  description: string
  count: number
}

export const removeItemFromCart = (items: CartItem[], id: string) => {
  return items.filter(item => item.id !== id);
}

export const countTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.price * item.count, 0);
}
