import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sidebar } from '@components/containers/layouts/SecureLayout/Sidebar';

describe('Render behaviour', () => {
  it('Should render Component', async () => {
    render(<Sidebar />);

    expect(screen.getByTestId('logo')).toBeTruthy();
  });
});
