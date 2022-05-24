import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

import styles from './../styles/Login.module.scss';
import InputHolder from './../components/InputHolder';
import { useFormData } from './../components/Common';
import { LoginFormData } from './../components/FormData';
import { UserDetails, AdminDetails } from './../lib/data';
import { ErrorIcon } from './../components/svgIcons';


const ErrorMessage = {
    invalid: 'Wrong email or password!'
};


const Login = ({ adminStatus }) => {  
    const router = useRouter();
    const [formData, setFormData] = useFormData(LoginFormData);
    const [formError, setFormError] = useState({
        status: false,
        message: null
    });

    const submitFormData = (event) => {
        event.preventDefault();

        const requiredData = {};
        for (let i=0; i < formData.length; i++) {
            requiredData = {...requiredData, [formData[i].iName]: formData[i].iValue}
        }

        console.log(requiredData);

        let matchedData = null;

        if (adminStatus) {
            matchedData = AdminDetails.find(item => item.email === requiredData.emailid && item.password === requiredData.password);
        } else {
            matchedData = UserDetails.find(item => item.email === requiredData.emailid && item.password === requiredData.password);
        }

        if (matchedData) {
            sessionStorage.setItem('userSessionData', JSON.stringify({
                userName: matchedData.email,
                name: matchedData.name,
                admin: adminStatus
            }));

            //router.path(window.location.pathname);
            adminStatus ? router.push('/admin/dashboard') : router.push('/dashboard');
        } else {
            setFormError({
                status: true,
                message: ErrorMessage.invalid
            });
        }
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
                            formError.status && (
                                <div className={ styles.errorMessage }>
                                    <ErrorIcon />
                                    <span>{ formError.message }</span>
                                </div>
                            )
                        }
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