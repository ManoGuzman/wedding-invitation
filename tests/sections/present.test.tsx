import { render } from '@testing-library/react';
import PresentSection from '../../app/components/sections/PresentSection';

describe('Present Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<PresentSection />);
    expect(container.innerHTML).toContain('svg');
  });

  it('renders SVG elements', () => {
    const { container } = render(<PresentSection />);
    expect(container.innerHTML).toContain('text');
  });
});
