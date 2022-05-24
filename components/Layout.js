import Head from 'next/head';
import Navbar from './Navbar';
import { useSessionData } from './Common';
import Login from './Login';


const Layout = ({ children }) => {
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