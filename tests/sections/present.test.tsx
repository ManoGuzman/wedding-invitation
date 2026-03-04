import { render } from '@testing-library/react';
import PresentSection from '../../app/components/sections/PresentSection';

describe('Present Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<PresentSection />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders SVG elements', () => {
    const { container } = render(<PresentSection />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
