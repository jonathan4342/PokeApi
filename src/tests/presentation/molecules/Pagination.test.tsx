import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Pagination } from '../../../presentation/molecules/pagination/Pagination';
import { PokemonProvider } from '../../../presentation/context/PokemonContext';

describe('Pagination component', () => {
    const mockSetCurrentPage = vi.fn();

    const renderWithContext = (ui: React.ReactNode) => {
        return render(
            <PokemonProvider>
                {ui}
            </PokemonProvider>
        );
    };

    it('renders input and pagination buttons', () => {
        renderWithContext(
            <Pagination setCurrentPage={mockSetCurrentPage} currentPage={1} />
        );

        const inputElement = screen.getByPlaceholderText('Buscar pokemon');
        expect(inputElement).toBeInTheDocument();

        const pageButtons = screen.getAllByRole('button');
        expect(pageButtons.length).toBeGreaterThan(0);
    });

    it('calls setFilter on input change', () => {
        renderWithContext(
            <Pagination setCurrentPage={mockSetCurrentPage} currentPage={1} />
        );

        const inputElement = screen.getByPlaceholderText('Buscar pokemon');
        fireEvent.change(inputElement, { target: { value: 'pikachu' } });

        expect(inputElement).toHaveValue('pikachu');
    });

    it('disables the button for the current page', () => {
        renderWithContext(
            <Pagination setCurrentPage={mockSetCurrentPage} currentPage={1} />
        );

        const currentPageButton = screen.getByText('1');
        expect(currentPageButton).toBeDisabled();
    });
});
