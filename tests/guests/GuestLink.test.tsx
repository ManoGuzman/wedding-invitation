import { render, screen } from '@testing-library/react';

jest.mock('framer-motion', () => {
    const motionPropsToFilter = [
        'initial', 'animate', 'exit', 'transition', 'variants', 'whileHover',
        'whileTap', 'whileInView', 'whileFocus', 'whileDrag', 'viewport',
        'layout', 'layoutId', 'drag', 'dragConstraints', 'dragElastic',
        'dragMomentum', 'dragTransition', 'onDragStart', 'onDragEnd', 'onDrag',
        'onHoverStart', 'onHoverEnd', 'onTapStart', 'onTap', 'onTapCancel',
        'onViewportEnter', 'onViewportLeave', 'custom',
    ];
    return {
        motion: new Proxy({}, {
            get: (_target, tag) => (props) => {
                const { children, ...rest } = props;
                const filteredProps = {};
                for (const [key, value] of Object.entries(rest)) {
                    if (!motionPropsToFilter.includes(key)) {
                        filteredProps[key] = value;
                    }
                }
                return require('react').createElement(tag, filteredProps, children);
            },
        }),
    };
});

jest.mock('@/guests/guests.json', () => ({
    guests: [{ id: 'test-guest', name: 'Test User', amount: '2' }],
}));

jest.mock('@/invitation/WeddingInvitation', () => ({
    __esModule: true,
    default: (props: { name: string; amount: string }) => (
        <div data-testid="wedding-invitation" data-name={props.name} data-amount={props.amount} />
    ),
}));

jest.mock('@/invitation/GradientOverlays', () => ({
    __esModule: true,
    default: () => <div data-testid="gradient-overlays" />,
}));

import InvitePage from '@/guests/GuestLink';

function makeParams(id: string): Promise<{ id: string }> {
    const value = { id };
    const p = Promise.resolve(value) as Promise<{ id: string }> & {
        status: string;
        value: { id: string };
    };
    p.status = 'fulfilled';
    p.value = value;
    return p;
}

describe('Guest Link', () => {
    it('renders invitation for valid guest', () => {
        render(<InvitePage params={makeParams('test-guest')} />);

        // Element uses id="invitation-container", not data-testid
        expect(document.getElementById('invitation-container')).toBeInTheDocument();
        expect(screen.getByTestId('wedding-invitation')).toHaveAttribute('data-name', 'Test User');
        expect(screen.getByTestId('wedding-invitation')).toHaveAttribute('data-amount', '2');
    });

    it('shows error for invalid guest id', () => {
        render(<InvitePage params={makeParams('nonexistent')} />);

        expect(screen.getByText('Invitado no encontrado')).toBeInTheDocument();
        expect(document.getElementById('invitation-container')).not.toBeInTheDocument();
    });

    it('renders gradient overlays for valid guest', () => {
        render(<InvitePage params={makeParams('test-guest')} />);

        expect(screen.getByTestId('gradient-overlays')).toBeInTheDocument();
    });

    it('renders correct number of motion sections', () => {
        const { container } = render(<InvitePage params={makeParams('test-guest')} />);

        const sections = container.querySelectorAll('#invitation-container > div:not([data-testid])');
        expect(sections).toHaveLength(9);
    });
});