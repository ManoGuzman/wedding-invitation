import { render } from '@testing-library/react';
import CeremonySection from '@/ceremony/CeremonySection';

describe('Ceremony Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<CeremonySection />);
    expect(container.innerHTML).toContain('text');
  });
});
