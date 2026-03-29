import { render } from '@testing-library/react';
import CountdownSection from '@/ceremony/CountdownSection';

describe('Countdown Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<CountdownSection />);
    expect(container.innerHTML).toContain('text');
  });
});
