import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from './../../components/Layout';
import styles from './../../styles/createCourse.module.scss';
import { AddIcon, CloseIcon, UploadIcon, EditIcon, DeleteIcon } from './../../components/svgIcons';
import InputHolder from './../../components/InputHolder';
import { useFormData, useSessionData } from './../../components/Common';
import { CreateCoursesCatFormData } from './../../components/FormData';


const ErrorMessageEnvironment = 'Sorry! Seems like you are in a different environment which is neither production nor development.'
const ErrorMessage500 = 'Sorry! We are unable to connect to the server! Please try again later.';
const ErrorMessageEmail = 'You have entered an invalid email id. Please check again!';


const CreateCourse = () => {
	const sessionData = useSessionData();
	const [catFormData, setCatFormData] = useFormData(CreateCoursesCatFormData);
	const [count, setCount] = useState([]);
	const [fileData, setFileData] = useState({});
	const [subTitle, setSubtitle] = useState([]);
	const [responseData, setResponseData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

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

	const saveSubtitleData = (event, index) => {
		let tempArr = [...subTitle];
		tempArr[index] = event.target.value;
		setSubtitle(tempArr);
	}

	const saveFileData = (event, index) => {
		setFileData(prevData => ({
			...prevData,
			[index]: ({
				...prevData[index],
				[event.target.name]: event.target.files
			})
		}));

		//setFileData(event.target.files);
	};

	const submitFormData = (event) => {
		event.preventDefault();

		const requiredData = {[catFormData[0].iName]: catFormData[0].iValue, subTitle};


        const formData = new FormData();
        formData.append('requiredData', JSON.stringify(requiredData));
        
       	for (let item in fileData) {
	       	formData.append(`files${item}`, fileData[item]['UploadPDF'][0]);
	       	formData.append(`files${item}`, fileData[item]['UploadPPT'][0]);
       	}


        const abortController = new AbortController();
		const requestPayload = {
			method: 'POST',
			body: formData,
			signal: abortController.signal
		};

		if (process.env.NODE_ENV === 'development') {
			process.env.HOSTNAME = `http://localhost:${window.location.port}`;
		} else if (process.env.NODE_ENV === 'production') {
			process.env.HOSTNAME = `https://itisoverdue.com`;
		} else {
			setResponseData({
				message: ErrorMessageEnvironment,
				status: 'error'
			});

			return;
		}

		//const absoluteURL = `${PAGE_CONTACT.API_Base_URL}/${PAGE_CONTACT.API_Route_Name}`;
		const APIName = 'api/addCourse';
		const absoluteURL = `${process.env.HOSTNAME}/${APIName}`;

		const fetchData = async() => {
			try {
				setIsLoading(true);
				const response = await fetch(absoluteURL, requestPayload);
				const res = await response.json();

				setResponseData((prevData) => ({
					...prevData,
					message: res.message,
					status: res.status
				}));

				setTimeout(() => {
					setResponseData({});
				}, 5000);
			} catch (error) {
				setResponseData({
					message: ErrorMessage500,
					status: 'error'
				});
			}

			setTimeout(() => {
				setIsLoading(false);
				setCount([]);
				setFileData({});
				setSubtitle([]);
				setResponseData({});
			}, 1000);
			
		}

		fetchData();

		return () => abortController.abort();
	};

	useEffect(() => {
		const tempArr = [...count];
		setCount(tempArr);
	}, []);

	return (
		<Layout {...{isLoading}}>
			<Head>
        		<title>Acterra - Create New Course</title>
      		</Head>
			<section className={ styles.createCourse }>
				<div className={ styles.titleAction }>
					<h1>Create new Course</h1>
				</div>
				<form onSubmit={ (event) => submitFormData(event) } encType="multipart/form-data">
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
											                onChange={ (event) => saveSubtitleData(event, emptyIndex) }
											            />
											        </div>
	                    							<div>
		                    							<h4>Upload Files</h4>
		                    							<input 
		                    								type="file" 
		                    								name="UploadPDF" 
		                    								accept=".pdf" 
		                    								onChange={ (event) => saveFileData(event, emptyIndex) } 
		                    							/>
		                    						</div>
		                    						<div>
		                    							<h4>Upload Files</h4>
		                    							<input 
		                    								type="file" 
		                    								name="UploadPPT" 
		                    								accept=".ppt, .pptx" 
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