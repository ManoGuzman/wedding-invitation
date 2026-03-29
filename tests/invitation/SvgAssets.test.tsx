import { render } from '@testing-library/react';
import SvgDefs from '../../app/components/sections/SvgDefs';

describe('SVG Defs', () => {
  it('renders without crashing', () => {
    const { container } = render(<SvgDefs />);
    expect(container.innerHTML).toContain('defs');
  });

  it('renders SVG defs elements', () => {
    const { container } = render(<SvgDefs />);
    expect(container.innerHTML).toContain('filter');
  });
});
