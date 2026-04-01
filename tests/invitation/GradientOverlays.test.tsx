import { render } from '@testing-library/react';
import GradientOverlays from '@/invitation/GradientOverlays';

describe('GradientOverlays', () => {
    it('renders top gradient div', () => {
        render(<GradientOverlays />);
        const topGradient = document.getElementById('top-gradient');
        expect(topGradient).toBeInTheDocument();
    });

    it('renders bottom gradient div', () => {
        render(<GradientOverlays />);
        const bottomGradient = document.getElementById('bottom-gradient');
        expect(bottomGradient).toBeInTheDocument();
    });

    it('applies correct gradient styles', () => {
        const { container } = render(<GradientOverlays />);
        const topGradient = container.querySelector<HTMLElement>('#top-gradient');
        expect(topGradient?.style.background).toContain('linear-gradient');
    });

    it('has correct z-index', () => {
        const { container } = render(<GradientOverlays />);
        const gradients = container.querySelectorAll('.fixed');
        gradients.forEach(el => {
            expect(el).toHaveClass('z-30');
        });
    });
});