import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Pet from './Pet';

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1, padding: '40px 0' }}>
                {children}
            </main>
            <Footer />
            <Pet />
        </div>
    );
};

export default Layout;
