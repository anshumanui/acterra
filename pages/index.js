import { useRouter } from 'next/router';
import Login from './../components/Login';
import { useSessionData } from './../components/Common';


const Home = () => {  
    const router = useRouter();
    const sessionData = useSessionData();
    const adminStatus = false;

    if (sessionData) {
        adminStatus ? router.push('/admin/dashboard') : router.push('/dashboard');
        return null;
    }

    return <Login {...{adminStatus}} />;
};

export default Home;
