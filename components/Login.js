import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import styles from './../styles/Login.module.scss';
import InputHolder from './../components/InputHolder';
import { useFormData } from './../components/Common';
import { LoginFormData } from './../components/FormData';
import { useState, useEffect } from 'react';


const Login = ({ adminStatus }) => {  
    const router = useRouter();
    const [formData, setFormData] = useFormData(LoginFormData);

    const submitFormData = (event) => {
        event.preventDefault();

        const requiredData = {};
        for (let i=0; i < formData.length; i++) {
            requiredData = {...requiredData, [formData[i].iName]: formData[i].iValue}
        }

        console.log(requiredData);

        sessionStorage.setItem('userSessionData', JSON.stringify({
            userName: 'Anshuman',
            admin: true
        }));

        //router.path(window.location.pathname);
        router.push('/admin/dashboard');
    };

    return (
        <section className={cn(styles.login, {
            [styles.admin]: adminStatus
        })}>
            <div className={ styles.container }>
                <div className={ styles.loginContainer }>
                    <div>

                    </div>

                    <form onSubmit={ (event) => submitFormData(event) }>
                        {
                            formData.map((item, index) => <InputHolder key={`ih_${index}`} {...item} {...{setFormData}} />)
                        }
                        <p>
                            <Link href="/forgetpassword">
                                <a>Forgot Password?</a>
                            </Link>
                        </p>
                        <button className={ styles.primaryBtn }>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Login;