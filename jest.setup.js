import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

const originalError = console.error;
console.error = (...args) => {
  const message = args
    .map((arg) => {
      if (typeof arg === 'string') return arg;
      if (arg && typeof arg === 'object') {
        if (arg.message) return arg.message;
        if (arg.name) return arg.name;
        return JSON.stringify(arg);
      }
      return String(arg);
    })
    .join(' ');

  if (
    message.includes('An update to') ||
    message.includes('not wrapped in act') ||
    message.includes('inside a test')
  ) {
    return;
  }
  originalError.call(console, ...args);
};

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: () => {
    function DynamicMock() { return null; }
    DynamicMock.displayName = 'DynamicMock';
    return DynamicMock;
  },
}));

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
    ...jest.requireActual('framer-motion'),
    motion: new Proxy({}, {
      get: (_target, tag) => {
        function MotionMock({ children, ...rest }) {
          const filteredProps = {};
          for (const [key, value] of Object.entries(rest)) {
            if (!motionPropsToFilter.includes(key)) {
              filteredProps[key] = value;
            }
          }
          return React.createElement(tag, filteredProps, children);
        }
        MotionMock.displayName = `Motion_${String(tag)}`;
        return MotionMock;
      },
    }),
  };
});

jest.mock('@/invitation/WeddingInvitation', () => ({
  __esModule: true,
  default: ({ name, amount }) => (
    <div data-testid="wedding-invitation" data-name={name} data-amount={amount} />
  ),
}));

jest.mock('@/invitation/GradientOverlays', () => ({
  __esModule: true,
  default: () => <div data-testid="gradient-overlays" />,
}));