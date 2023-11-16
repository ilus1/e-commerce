import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import ShoppingList from '../../pages/ShoppingList';
import server from '../../__mocks__/servicesAPI';

beforeAll(() => server.listen());


describe('Componente ShoppingList', () => {
  const queryClient = new QueryClient();

  it('Renderiza todos os subcomponentes corretamente', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ShoppingList />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('topbar')).toBeDefined();
      expect(screen.getByTestId('product-list')).toBeDefined();
      expect(screen.getByTestId('footer')).toBeDefined();
    });
  });

  it('Abre e fecha o Sidebar corretamente', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ShoppingList />
      </QueryClientProvider>
    );

    const toggleButton = screen.getByTestId('topbar-toggle-button');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(screen.getByTestId('sidebar')).toBeDefined();
    });

    const closeButton = screen.getByTestId('sidebar-close-button');
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByTestId('sidebar')).not.toBeDefined();
    });
  });
});
