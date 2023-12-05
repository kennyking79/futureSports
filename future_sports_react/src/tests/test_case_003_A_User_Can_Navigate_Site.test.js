import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../Navigation';

describe('Navigation Component', () => {
  it('renders navigation links with correct paths', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');

    const playersLink = screen.getByText('Players');
    expect(playersLink).toBeInTheDocument();
    expect(playersLink.closest('a')).toHaveAttribute('href', '/players');

    const shopLink = screen.getByText('Shop');
    expect(shopLink).toBeInTheDocument();
    expect(shopLink.closest('a')).toHaveAttribute('href', '/shop');

    const adminLink = screen.getByText('Admin');
    expect(adminLink).toBeInTheDocument();
    expect(adminLink.closest('a')).toHaveAttribute('href', '/admin');
  });
});
