import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shop from '../Shop/Shop';

// Mock the JSON data
jest.mock('../Shop/ShopItemDataBase.json', () => ([
  {
    id: '1',
    item_name: 'Test Item',
    item_cost: '20',
    image_ref: 'test_image.jpg'
  },
]));

describe('Shop Component', () => {
  it('opens a modal when a ShopItem is clicked', () => {
    render(<Shop />);
    // Click on the first ShopItem
    fireEvent.click(screen.getByText('Test Item'));
    // Check if the modal opened (e.g., by checking for the image in the modal)
    expect(screen.getByAltText('Test Item')).toBeInTheDocument();
  });

  // Additional tests can be added here
});
