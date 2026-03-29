import { render } from '@testing-library/react';
import HeroSection from '@/ceremony/HeroSection';

describe('Hero Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<HeroSection />);
    expect(container.innerHTML).toContain('text');
  });
});
