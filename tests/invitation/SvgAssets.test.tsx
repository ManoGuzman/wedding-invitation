import { render } from '@testing-library/react';
import SvgAssets from '@/shared/SvgAssets';

describe('SVG Defs', () => {
  it('renders without crashing', () => {
    const { container } = render(<SvgAssets />);
    expect(container.innerHTML).toContain('defs');
  });

  it('renders SVG defs elements', () => {
    const { container } = render(<SvgAssets />);
    expect(container.innerHTML).toContain('filter');
  });
});
