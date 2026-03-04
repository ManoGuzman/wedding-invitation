import { render } from '@testing-library/react';
import DressCodeSection from '../../app/components/sections/DressCodeSection';

describe('Dress Code Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<DressCodeSection />);
    expect(container.innerHTML).toContain('text');
  });
});
