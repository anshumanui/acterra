import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from './../../components/Layout';
import styles from './../../styles/createCourse.module.scss';
import { AddIcon, CloseIcon, UploadIcon, EditIcon, DeleteIcon } from './../../components/svgIcons';
import InputHolder from './../../components/InputHolder';
import { useFormData, useSessionData } from './../../components/Common';
import { CreateCoursesCatFormData, CreateCoursesSubCatFormData } from './../../components/FormData';


const CreateCourse = () => {
	const sessionData = useSessionData();
	const [catFormData, setCatFormData] = useState(CreateCoursesCatFormData);
	const [subCatFormData, setSubCatFormData] = useState(CreateCoursesSubCatFormData);
	const [endCount, setEndCount] = useState(0);
	const [updatedFormData, setUpdatedFormData] = useState([]);

	const updateFormData = () => {
		setEndCount(prevData => prevData + 1);
	};

	const fillFormData = () => {
		let initFormData = subCatFormData;
		initFormData.length = endCount;
		initFormData.fill(initFormData[0]);
		setUpdatedFormData(initFormData);
	};

	const closeFormRow = () => {
		setUpdatedFormData(prevData => prevData.splice(updatedFormData.length, 1));
		setEndCount(prevData => prevData - 1);
	}

	useEffect(() => {
		if (endCount) {
			fillFormData();
		}
	}, [endCount]);

	return (
		<Layout>
			<Head>
        		<title>Acterra - Create New Course</title>
      		</Head>
			<section className={ styles.createCourse }>
				<div className={ styles.titleAction }>
					<h1>Create new Course</h1>
				</div>
				<form onSubmit={ (event) => submitFormData(event) }>
                    {
                        catFormData.map((item, index) => <InputHolder key={`ih__cat_${index}`} {...item} {...{setCatFormData}} />)
                    }

                    {
                    	updatedFormData.length ? (
                    		<ul>
                    			{
                    				updatedFormData.map((item, index) => {
                    					return (
                    						<li key={`li_subcat_${index}`}>
                    							<span onClick={ () => closeFormRow() }><CloseIcon /></span>
                    							<InputHolder {...item} {...{setSubCatFormData}} />
                    							<input type="file" name="UploadPPT" />
                    							<input type="file" name="UploadPDF" />
                    						</li>
                    					)
                    				})
                    			}
                    		</ul>
                    	) : (null)
                    }

                    <div className={ styles.buttonContainer }>
	                    <button className={ styles.secondaryBtn } onClick={ () => updateFormData() }>Add Sub Category</button>
	                    
	                    <button className={ styles.primaryBtn }>Create</button>
	                </div>
                </form>
			</section>
		</Layout>
	)
};

export default CreateCourse;