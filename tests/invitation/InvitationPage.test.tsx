import React from 'react';
import { render } from '@testing-library/react';

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
            get: (_target: unknown, tag: string) => (props: Record<string, unknown>) => {
                const { children, ...rest } = props;
                const filteredProps: Record<string, unknown> = {};
                for (const [key, value] of Object.entries(rest)) {
                    if (!motionPropsToFilter.includes(key)) {
                        filteredProps[key] = value;
                    }
                }
                return React.createElement(tag, filteredProps, children);
            },
        }),
    };
});

jest.mock('@/invitation/WeddingInvitation', () => ({
    __esModule: true,
    default: ({ name, amount }: { name: string; amount: string }) => (
        <div data-testid="wedding-invitation" data-name={name} data-amount={amount} />
    ),
}));

jest.mock('@/invitation/GradientOverlays', () => ({
    __esModule: true,
    default: () => <div data-testid="gradient-overlays" />,
}));

import InvitationPage from '@/invitation/InvitationPage';

describe('Invitation Page', () => {
    it('renders main element with correct background', () => {
        const { container } = render(<InvitationPage />);
        expect(container.querySelector('main')).toHaveClass('bg-[#062923]');
    });

    it('renders invitation container', () => {
        const { container } = render(<InvitationPage />);
        expect(container.querySelector('#invitation-container')).toBeInTheDocument();
    });

    it('renders 9 section overlays', () => {
        const { container } = render(<InvitationPage />);
        const overlays = container.querySelectorAll('#section-overlay');
        expect(overlays).toHaveLength(9);
    });
});