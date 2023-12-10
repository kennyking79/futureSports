import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gallery from '../Players/Players';

// Mocking the JSON data
jest.mock("../Players/cyber_sport_players.json", () => ([
  {
    id: '1',
    player_name: 'Test Player',
    special_abilities: 'Fast Reflexes',
    game_rating: '9.5',
    award: 'Best Rookie',
    playing_style: 'Aggressive',
    image_src: 'test_image.jpg'
  }
]));

describe('Gallery Component', () => {
  it('renders PlayerItem with correct data', () => {
    render(<Gallery />);
    expect(screen.getByText('Test Player')).toBeInTheDocument();
    expect(screen.getByText('Fast Reflexes')).toBeInTheDocument();
    expect(screen.getByText('Best Rookie')).toBeInTheDocument();
    expect(screen.getByAltText('Test Player')).toHaveAttribute('src', 'test_image.jpg');
  });

});