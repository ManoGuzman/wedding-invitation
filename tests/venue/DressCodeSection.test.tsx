import { render } from '@testing-library/react';
import DressCodeSection from '@/venue/DressCodeSection';

describe('Dress Code Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<DressCodeSection />);
    expect(container.innerHTML).toContain('text');
  });
});
