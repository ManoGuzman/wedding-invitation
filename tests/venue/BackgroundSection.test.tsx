import { render } from '@testing-library/react';
import BackgroundSection from '@/venue/BackgroundSection';

describe('Background Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<BackgroundSection />);
    expect(container.innerHTML).toContain('path');
  });
});
