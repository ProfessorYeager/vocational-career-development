import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px 0',
            backgroundColor: 'var(--surface)',
            borderTop: '1px solid var(--border)',
            marginTop: '60px',
            color: 'var(--text-light)',
            fontSize: '0.9rem',
            textAlign: 'center'
        }}>
            <div className="container">
                <p>© 2026 CTE Career Development</p>
                <p style={{ marginTop: '8px' }}>Automotive + Medical Assisting Program</p>
            </div>
        </footer>
    );
};

export default Footer;
