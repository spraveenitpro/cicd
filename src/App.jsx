import './App.css';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const handleClick = (event) => {
            const x = event.clientX / window.innerWidth;
            const y = event.clientY / window.innerHeight;
            
            // Ensure coordinates are valid
            if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
                // Each click creates a new confetti burst that can overlap with previous ones
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { x, y },
                    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
                    startVelocity: 30,
                    gravity: 0.8,
                    ticks: 200
                });
            }
        };

        // Add event listener to document to catch all clicks reliably
        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, []);

    return (
        <div className='App' style={{ cursor: 'pointer', minHeight: '100vh' }}>
            <h1>Vite + Reactooooo</h1>
        </div>
    );
}

export default App;