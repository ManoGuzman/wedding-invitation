import { render } from '@testing-library/react';
import WeddingInvitation from '@/invitation/WeddingInvitation';

describe('Wedding Invitation', () => {
    it('renders SVG element', () => {
        const { container } = render(<WeddingInvitation name="Test" amount="1" />);
        expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('renders with custom id', () => {
        const { container } = render(
            <WeddingInvitation name="Test" amount="1" id="custom-id" />
        );
        expect(container.querySelector('#custom-id')).toBeInTheDocument();
    });

    it('passes name and amount props', () => {
        const { container } = render(
            <WeddingInvitation name="John Doe" amount="3" />
        );
        expect(container.textContent).toContain('John');
        expect(container.textContent).toContain('3');
    });

    it('applies className prop', () => {
        const { container } = render(
            <WeddingInvitation name="Test" amount="1" className="custom-class" />
        );
        expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });
});