import { render, screen } from '@testing-library/react';
import { NavBar } from '@/components/NavBar';

describe('NavBar', () => {
  it('renders brand', () => {
    render(<NavBar />);
    expect(screen.getByRole('link', { name: /Pulse\s*Track/i })).toBeInTheDocument();
  });
});