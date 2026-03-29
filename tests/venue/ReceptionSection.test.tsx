import { render } from '@testing-library/react';
import ReceptionSection from '@/venue/ReceptionSection';

describe('Reception Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<ReceptionSection />);
    expect(container.innerHTML).toContain('text');
  });

  it('renders SVG elements', () => {
    const { container } = render(<ReceptionSection />);
    expect(container.innerHTML).toContain('text');
  });
});
