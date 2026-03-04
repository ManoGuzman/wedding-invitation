import { render } from '@testing-library/react';
import ReceptionSection from '../../app/components/sections/ReceptionSection';

describe('Reception Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<ReceptionSection />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders SVG elements', () => {
    const { container } = render(<ReceptionSection />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
