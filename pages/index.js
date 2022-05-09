import { useState, useEffect } from 'react';
import Login from './../components/Login';
import Dashboard from './../pages/dashboard';


const Home = () => {  
    const [loginStatus, setLoginStats] = useState(false);

    const loginSuccess = (status) => {
        setLoginStats(status);
    };

    let sessionUserData = null;

    useEffect(() => {
        sessionUserData = sessionStorage.getItem('sessionUserData');
        if (sessionUserData) setLoginStats(true);
    }, []);

    if (loginStatus) {
        return (
            <Dashboard {...{loginSuccess}} />
        );
    }

    return <Login {...{loginSuccess}} />;
};

export default Home;
