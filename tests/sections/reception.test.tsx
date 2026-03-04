import { render } from '@testing-library/react';
import ReceptionSection from '../../app/components/sections/ReceptionSection';

describe('Reception Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<ReceptionSection />);
    expect(container.innerHTML).toContain('svg');
  });

  it('renders SVG elements', () => {
    const { container } = render(<ReceptionSection />);
    expect(container.innerHTML).toContain('text');
  });
});
