jest.mock('@/shared/globals.css', () => ({}));
jest.mock('next/font/google', () => ({
    Cormorant_Garamond: jest.fn(() => ({ variable: '--font-cormorant-garamond' })),
}));
jest.mock('next/font/local', () => ({
    __esModule: true,
    default: jest.fn(() => ({ variable: '--font-better-yesterday' })),
}));

import { metadata } from '@/invitation/InvitationLayout';

describe('Invitation Layout', () => {
    it('exports correct metadata title', () => {
        expect(metadata.title).toBe('Boda Gaby y Ale');
    });

    it('exports correct metadata description', () => {
        expect(metadata.description).toBe('Invitación digital de boda');
    });
});