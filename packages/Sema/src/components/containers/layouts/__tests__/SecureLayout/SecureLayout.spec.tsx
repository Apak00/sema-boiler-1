import React from 'react';
import { render, screen } from '@testing-library/react';
import { SecureLayout } from '@components/containers/layouts';

jest.mock('@components/containers/layouts/SecureLayout/Appbar', () => ({
  __esModule: true,
  Appbar: () => <div data-testid="Appbar" />,
}));
jest.mock('@components/containers/layouts/SecureLayout/Sidebar', () => ({
  __esModule: true,
  Sidebar: () => <div data-testid="Sidebar" />,
}));

describe('Render behaviour', () => {
  it('Should render Component', async () => {
    render(
      <SecureLayout>
        <div data-testid="bar" />
      </SecureLayout>,
    );

    expect(screen.getByTestId('Appbar')).toBeTruthy();
    expect(screen.getByTestId('Sidebar')).toBeTruthy();
    expect(screen.getByTestId('bar')).toBeTruthy();
  });
});
