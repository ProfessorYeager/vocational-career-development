import React, { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';

const Pet = () => {
    const { celebrating } = useProgress();
    const [state, setState] = useState('idle');
    const [clickCount, setClickCount] = useState(0);

    // Reset to idle after reaction
    useEffect(() => {
        if (state === 'react') {
            const timer = setTimeout(() => setState('idle'), 1000);
            return () => clearTimeout(timer);
        }
    }, [state]);

    // Random idle behavior
    useEffect(() => {
        if (state !== 'idle') return;

        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setState('blink');
                setTimeout(() => setState('idle'), 200);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [state]);

    const handleClick = () => {
        setState('react');
        setClickCount(c => c + 1);
    };

    // Determine current animation class
    let animationClass = 'pet-idle';
    if (celebrating) animationClass = 'pet-celebrate';
    else if (state === 'react') animationClass = 'pet-bounce';

    // Robot Pixel Art SVG
    return (
        <div
            onClick={handleClick}
            className={animationClass}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                width: '64px',
                height: '64px',
                cursor: 'pointer',
                zIndex: 1000,
                transition: 'transform 0.2s',
                filter: celebrating ? 'drop-shadow(0 0 10px gold)' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
            }}
            title="Click me!"
        >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                {/* Body Color */}
                <path fill={celebrating ? "#fbbf24" : "#60a5fa"} d="M8 12 h16 v14 h-16 z" />
                {/* Head */}
                <path fill={celebrating ? "#f59e0b" : "#3b82f6"} d="M10 6 h12 v6 h-12 z" />
                {/* Eyes */}
                <path fill="#1e293b" d={state === 'blink' ? "M12 9 h2 v1 h-2 z M18 9 h2 v1 h-2 z" : "M12 8 h2 v2 h-2 z M18 8 h2 v2 h-2 z"} />
                {/* Antenna */}
                <path fill="#94a3b8" d="M15 3 h2 v3 h-2 z" />
                <path fill="#ef4444" d="M15 2 h2 v1 h-2 z" />
                {/* Arms */}
                <path fill="#94a3b8" d={state === 'react' || celebrating ? "M4 14 h4 v4 h-4 z M24 14 h4 v4 h-4 z" : "M6 16 h2 v8 h-2 z M24 16 h2 v8 h-2 z"} />
                {/* Legs */}
                <path fill="#334155" d="M10 26 h4 v4 h-4 z M18 26 h4 v4 h-4 z" />
                {/* Mouth */}
                {celebrating || state === 'react' ? (
                    <path fill="#ffffff" d="M14 16 h4 v2 h-4 z" />
                ) : (
                    <path fill="#ffffff" d="M12 20 h8 v1 h-8 z" />
                )}
            </svg>

            {/* Speech Bubble on click */}
            {state === 'react' && !celebrating && (
                <div style={{
                    position: 'absolute',
                    top: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    {['Beep!', 'Boop!', 'Hi!', '♥'][clickCount % 4]}
                </div>
            )}

            {/* Celebration Confetti (Simplified CSS representation) */}
            {celebrating && (
                <div style={{ position: 'absolute', top: -20, left: '50%', fontSize: '24px' }}>🎉</div>
            )}
        </div>
    );
};

export default Pet;
