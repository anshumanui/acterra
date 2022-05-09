import { useRouter } from 'next/router';
import Login from './../components/Login';
import { useSessionData } from './../components/Common';


const Home = () => {  
    const router = useRouter();
    const sessionData = useSessionData();
    const adminStatus = true;

    if (sessionData) {
        router.push('/admin/dashboard');
        return null;
    }

    return <Login {...{adminStatus}} />;
};

export default Home;
