import Head from 'next/head';
import Navbar from './Navbar';
import { useSessionData } from './Common';
import Login from './Login';
import Spinner from './Spinner';


const Layout = ({ children, isLoading }) => {
    return (
        <div>
            <Head>
                <meta name="description" content="Acterra" />
                <link rel="icon" href="/favicon.ico" />
                <title>Acterra - Admin Dashboard</title>
            </Head>
            <Navbar />
            { isLoading && <Spinner /> }
            <main>{ children }</main>
        </div>
    )
};

export default Layout;