import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [completedDays, setCompletedDays] = useState(() => {
        const saved = localStorage.getItem('completedDays');
        return saved ? JSON.parse(saved) : [];
    });

    const [celebrating, setCelebrating] = useState(false);

    useEffect(() => {
        localStorage.setItem('completedDays', JSON.stringify(completedDays));
    }, [completedDays]);

    const toggleComplete = (dayId) => {
        setCompletedDays(prev => {
            if (prev.includes(dayId)) {
                return prev.filter(id => id !== dayId);
            } else {
                return [...prev, dayId];
            }
        });
    };

    const triggerCelebration = () => {
        setCelebrating(true);
        setTimeout(() => setCelebrating(false), 5000); // Celebrate for 5 seconds
    };

    const isComplete = (dayId) => {
        return completedDays.includes(dayId);
    };

    return (
        <ProgressContext.Provider value={{ completedDays, toggleComplete, isComplete, celebrating, triggerCelebration }}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgress = () => useContext(ProgressContext);
