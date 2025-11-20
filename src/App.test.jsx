import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import confetti from 'canvas-confetti';

import App from './App.jsx';

// Mock canvas-confetti
vi.mock('canvas-confetti', () => ({
    default: vi.fn()
}));

describe('App', async () => {
    it('should render while authenticating', () => {
        render(<App />);

        expect(screen.getByText('Vite + Reactooooo')).toBeInTheDocument();
    });
});

// Test that the confetti is displayed when the user clicks on the screen
describe('Confetti', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should display confetti when the user clicks on the screen', () => {
        render(<App />);

        // Simulate a click on the document
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: 100,
            clientY: 100
        });
        
        document.dispatchEvent(clickEvent);

        // Assert that confetti was called
        expect(confetti).toHaveBeenCalledTimes(1);
        expect(confetti).toHaveBeenCalledWith(
            expect.objectContaining({
                particleCount: 100,
                spread: 70,
                origin: expect.objectContaining({
                    x: expect.any(Number),
                    y: expect.any(Number)
                })
            })
        );
    });
});