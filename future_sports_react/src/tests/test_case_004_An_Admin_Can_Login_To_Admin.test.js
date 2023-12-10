import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Admin from '../Admin/Admin';

describe('Admin Component', () => {
  it('renders username and password input fields', () => {
    render(<Admin />);

    const usernameInput = screen.getByLabelText('Username:');
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveAttribute('type', 'text');

    const passwordInput = screen.getByLabelText('Password:');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('allows typing in the username and password fields', () => {
    render(<Admin />);

    const usernameInput = screen.getByLabelText('Username:');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(usernameInput.value).toBe('testuser');

    const passwordInput = screen.getByLabelText('Password:');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });
});
