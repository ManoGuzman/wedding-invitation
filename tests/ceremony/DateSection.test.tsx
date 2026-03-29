import { render } from '@testing-library/react';
import DateSection from '../../app/components/sections/DateSection';

describe('Date Section', () => {
  it('renders without crashing', () => {
    const { container } = render(<DateSection />);
    expect(container.innerHTML).toContain('text');
  });
});
