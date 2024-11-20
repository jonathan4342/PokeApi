// Loading.test.tsx
import { render, screen } from '@testing-library/react';
import { Loading } from '../../../presentation/atoms/loading/Loading';

describe('Loading Component', () => {
  it('renders the loading SVG', () => {
    render(<Loading />);

    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
  });
});
