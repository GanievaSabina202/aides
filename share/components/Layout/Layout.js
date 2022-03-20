import React from 'react';
import Header from '../../../share/components/Header/index';
import Footer from '../../../share/components/Footer/index';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;