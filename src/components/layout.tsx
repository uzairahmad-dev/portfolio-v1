import React, {ReactChild, ReactChildren} from 'react';

import RightPanel from './rightPanel';
import Navbar from './navbar';
import Footer from './footer';

interface LayoutProps {
    children: ReactChild | ReactChildren;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
                {children}
                <RightPanel />
            <Footer />
        </>
    );  
};

export default Layout;