import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from './../../components/Layout';
import styles from './../../styles/createCourse.module.scss';
import { AddIcon, CloseIcon, UploadIcon, EditIcon, DeleteIcon } from './../../components/svgIcons';
import InputHolder from './../../components/InputHolder';
import { useFormData, useSessionData } from './../../components/Common';
import { CreateCoursesCatFormData } from './../../components/FormData';


const CreateCourse = () => {
	const sessionData = useSessionData();
	const [catFormData, setCatFormData] = useFormData(CreateCoursesCatFormData);
	const [count, setCount] = useState([]);
	const [fileData, setFileData] = useState({});

	const updateFormData = () => {
		let tempArr = [1];
		setCount(prevData => ([...prevData, ...tempArr]));
	};

	const closeFormRow = (index) => {
		const tempArr = [...count];
		tempArr.splice(index, 1, null);
		setCount(tempArr);

		const tempData = {...fileData};
		delete tempData[index];
		setFileData(tempData);
	};

	const saveFileData = (event, index) => {
		setFileData(prevData => ({
			...prevData,
			[index]: ({
				...prevData[index],
				[event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value
			})
		}));
	};

	const submitFormData = (event) => {
		event.preventDefault();

		const requiredData = {};
        for (let i=0; i < catFormData.length; i++) {
            requiredData = {...requiredData, [catFormData[i].iName]: catFormData[i].iValue}
        }

        console.log(requiredData, fileData);
	};

	useEffect(() => {
		const tempArr = [...count];
		setCount(tempArr);
	}, []);

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
                        catFormData.map((item, index) => <InputHolder key={`ih__cat_${index}`} {...item} setFormData={setCatFormData} />)
                    }

                    {
                    	count.length ? (
                    		<ul>
                    			{
                    				count.map((emptyItem, emptyIndex) => {
                    					if (emptyItem) {
	                    					return (
	                    						<li key={`li_subcat_${emptyIndex}`}>
	                    							<span onClick={ () => closeFormRow(emptyIndex) }><CloseIcon /></span>
	                    							<div>
											            <h4>course subtitle</h4>
											            <input 
											                type="text"
											                name="subtitle"
											                placeholder="Course Subtitle"
											                required 
											                onChange={ (event) => saveFileData(event, emptyIndex) }
											            />
											        </div>
	                    							<div>
		                    							<h4>Upload PPT</h4>
		                    							<input 
		                    								type="file" 
		                    								name="UploadPPT" 
		                    								onChange={ (event) => saveFileData(event, emptyIndex) } 
		                    							/>
		                    						</div>
		                    						<div>
		                    							<h4>Upload PDF</h4>
		                    							<input 
		                    								type="file" 
		                    								name="UploadPDF" 
		                    								onChange={ (event) => saveFileData(event, emptyIndex) } 
		                    							/>
		                    						</div>
	                    						</li>
	                    					)
	                    				}
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