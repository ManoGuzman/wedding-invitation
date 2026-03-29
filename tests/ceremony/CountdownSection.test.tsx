import { render } from '@testing-library/react';
import CountdownSection from '../../app/components/sections/CountdownSection';

describe('Countdown Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<CountdownSection />);
    expect(container.innerHTML).toContain('text');
  });
});
