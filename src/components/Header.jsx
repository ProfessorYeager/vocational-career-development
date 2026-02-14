import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header style={{
            height: 'var(--header-height)',
            backgroundColor: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem' }}>
                    <GraduationCap size={32} />
                    <span className="logo-text">VCD</span>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <Link to="/" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-light)' }}>Home</Link>
                        <Link to="/artifacts" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-light)' }}>Artifacts</Link>
                    </nav>
                    <button onClick={toggleTheme} style={{ color: 'var(--text-light)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button style={{ color: 'var(--text-light)' }}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
