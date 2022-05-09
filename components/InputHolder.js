

const InputHolder = ({ title, iType, iName, iPlaceholder, iRequired, iValue, setFormData }) => {
	return (
		<div>
            <h4>{ title }</h4>
            <input 
                type={ iType }
                name={ iName }
                placeholder={ iPlaceholder }
                required={ iRequired }
                onChange={ (event) => setFormData(event) }
            />
        </div>
	)
};

export default InputHolder;