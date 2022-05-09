import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from './../../components/Layout';
import styles from './../../styles/changePassword.module.scss';
import { AddIcon, CloseIcon, UploadIcon, EditIcon, DeleteIcon } from './../../components/svgIcons';
import InputHolder from './../../components/InputHolder';
import { useFormData, useSessionData } from './../../components/Common';
import { ChangePasswordFormData } from './../../components/FormData';


const ManageCourses = () => {
	const sessionData = useSessionData();
	const [formData, setFormData] = useState(ChangePasswordFormData);

	return (
		<Layout>
			<Head>
        		<title>Acterra - Change Password</title>
      		</Head>
			<section className={ styles.changePassword }>
				<div className={ styles.titleAction }>
					<h1>Change Password</h1>
				</div>
				<form onSubmit={ (event) => submitFormData(event) }>
                    {
                        formData.map((item, index) => <InputHolder key={`ih__cp_${index}`} {...item} {...{setFormData}} />)
                    }
                    <button className={ styles.primaryBtn }>Update</button>
                </form>
			</section>
		</Layout>
	)
};

export default ManageCourses;