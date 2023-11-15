import { fireEvent, render } from '@testing-library/react'

import Topbar from '../../components/Topbar'


describe('Teste do componente Topbar', () => {
  it('Teste do componente Topbar', () => {
    const component = render(
      <Topbar />
    );

    const title = component.getByText('MKS');

    expect(title).toBeDefined();
    expect(title.nextSibling?.textContent).toContain("Sistemas");
  });


  it('Teste do componente Topbar', () => {
    const component = render(
      <Topbar />
    );

    const button = component.getByRole('button');

    expect(button).toBeDefined();
    fireEvent.click(button);
  });
});