import { render, screen, fireEvent } from '@testing-library/react';
import { PokemonDetailsDTO } from '../../../infrastructure/dtos/DetailsPokemons';
import { Card } from '../../../presentation/atoms/card/Card';

test('should render the card with the default view', () => {
  const mockDetails = new PokemonDetailsDTO();
  mockDetails.setName('Pikachu');
  mockDetails.setImage('pikachu.png');
  mockDetails.setTypes(['electric']);
  mockDetails.setHeight(6);
  mockDetails.setWeight(85);
  mockDetails.setAbilities(['Static', 'Lightning Rod']);

  render(<Card details={mockDetails} key={mockDetails.getHeight()}/>);

  const img = screen.getByAltText('poke img'); 
  expect(img).toHaveAttribute('src', 'pikachu.png');

  expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
});

test('should show details when card is clicked', () => {
  const mockDetails = new PokemonDetailsDTO();
  mockDetails.setName('Charmander');
  mockDetails.setImage('charmander.png');
  mockDetails.setTypes(['fire']);
  mockDetails.setHeight(6);
  mockDetails.setWeight(85);
  mockDetails.setAbilities(['Blaze', 'Solar Power']);
  mockDetails.setCount(123)
  console.log("mockDetails",mockDetails);
  
  render(<Card details={mockDetails} />);

  const card = screen.getByRole('button');
  fireEvent.click(card);

  expect(screen.getByText(/Altura : 0.6 M/i)).toBeInTheDocument();
  expect(screen.getByText(/Peso : 8.5 Kg/i)).toBeInTheDocument();
  expect(screen.getByText(/Habilidades:/i)).toBeInTheDocument();
});
