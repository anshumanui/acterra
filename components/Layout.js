import Head from 'next/head';
import Navbar from './Navbar';
import { useSessionData } from './Common';
import Login from './Login';


const Layout = ({ children }) => {
    const sessionData = useSessionData();
    const adminStatus = true;

    if (!sessionData && sessionData === null) {
        return <Login {...{adminStatus}} />;
    }

    return (
        <div>
            <Head>
                <meta name="description" content="Acterra" />
                <link rel="icon" href="/favicon.ico" />
                <title>Acterra - Admin Dashboard</title>
            </Head>
            <Navbar />
            <main>{ children }</main>
        </div>
    )
};

export default Layout;