import { render, screen, fireEvent} from '@testing-library/react';
import { Input } from '../../../presentation/atoms/inputs/Input';
import { describe, it, expect, vi } from "vitest";

describe('Input component', () => {
  it('renders correctly with a placeholder', () => {
    render(<Input placeholder="Enter text" value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('calls onChange function when value changes', () => {
    const mockOnChange = vi.fn(); 
    
    render(<Input placeholder="Enter text" value="Hello" onChange={mockOnChange} />);
    
    fireEvent.change(screen.getByPlaceholderText('Enter text'), {
      target: { value: 'New value' }
    });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('displays the correct value', () => {
    render(<Input placeholder="Enter text" value="Test value" onChange={() => {}} />);
    expect(screen.getByDisplayValue('Test value')).toBeInTheDocument();
  });
});
