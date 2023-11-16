import { render } from '@testing-library/react'

import Topbar from '../../components/Topbar'


describe('Teste do componente Topbar', () => {
  it('Teste do componente Topbar', () => {
    const component = render(
      <Topbar productCounter={0} onClick={() => {}} />
    );

    const title = component.getByText('MKS');

    expect(title).toBeDefined();
    expect(title.nextSibling?.textContent).toContain("Sistemas");
  });


  it('Teste do componente Topbar', () => {
    const openCart = jest.fn();

    const component = render(
      <Topbar productCounter={0} onClick={() => openCart()} />
    );

    const button = component.getByRole('button');

    expect(button).toBeDefined();
    button.click();

    expect(openCart).toHaveBeenCalledTimes(1);
  });
});