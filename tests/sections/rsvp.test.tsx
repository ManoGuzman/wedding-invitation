import { render } from '@testing-library/react';
import RsvpSection from '../../app/components/sections/RsvpSection';

describe('Rsvp Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<RsvpSection name="John Doe" amount="2" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders SVG elements', () => {
    const { container } = render(<RsvpSection name="John Doe" amount="2" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders guest name', () => {
    const { container } = render(<RsvpSection name="John Doe" amount="2" />);
    expect(container.textContent).toContain('John');
  });
});
