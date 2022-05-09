import styles from './../styles/Login.module.scss';
import InputHolder from './../components/InputHolder';
import { useFormData } from './../components/Common';
import { ForgetPasswordFormData } from './../components/FormData';


const ForgetPassword = () => {  
    const [formData, setFormData] = useFormData(ForgetPasswordFormData);

    const submitFormData = (event) => {
        event.preventDefault();

        const requiredData = {};
        for (let i=0; i < formData.length; i++) {
            requiredData = {...requiredData, [formData[i].iName]: formData[i].iValue}
        }
        
        console.log(requiredData);
    };

    return (
        <section className={ styles.login }>
            <div className={ styles.container }>
                <div className={ styles.loginContainer }>
                    <div>

                    </div>

                    <form onSubmit={ (event) => submitFormData(event) }>
                        {
                            formData.map((item, index) => <InputHolder key={`ih_${index}`} {...item} {...{setFormData}} />)
                        }
                        <button className={ styles.primaryBtn }>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default ForgetPassword;
