import { render } from '@testing-library/react';
import HeroSection from '../../app/components/sections/HeroSection';

describe('Hero Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<HeroSection />);
    expect(container.innerHTML).toContain('text');
  });
});
