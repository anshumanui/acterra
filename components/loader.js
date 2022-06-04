import Image from 'next/image';


const Loader = () => {
	return (
		<section className="loader">
			<figure>
				<Image
					src={ `/loader.gif` }
					alt="page loader"
					quality={100} 
					width={64}
					height={64}
				/>
			</figure>
			<h1>Please wait! We are creating your course.</h1>
		</section>
	)
};

export default Loader;