import Layout from '../share/components/Layout/index'
import SSRProvider from 'react-bootstrap/SSRProvider';

const AppProvider = ({ children }) => {
    return (
        <SSRProvider>
            <Layout>
                {children}
            </Layout>
        </SSRProvider>
    );
};

export default AppProvider;