import styles from './../styles/ManageUsers.module.scss';
import { EditIcon, DeleteIcon } from './svgIcons';


const data = [
	{
		id: 1,
		title: 'Jonathan Swift',
		totalCourses: 3,
		courses: [
			'Climate change science introduction',
			'Impacts of climate change'
		],
		enrolledOn: '12 Feb, 2022'
	}, {
		id: 2,
		title: 'Dimitri Chekov',
		totalCourses: 4,
		courses: [
			'Climate change science introduction',
			'Impacts of climate change',
			'sea level rise'
		],
		enrolledOn: '12 Feb, 2022'
	}, {
		id: 3,
		title: 'Lily Espriella',
		totalCourses: 6,
		courses: [
			'Climate justice and Communication',
			'Impacts of climate change'
		],
		enrolledOn: '12 Feb, 2022'
	}, {
		id: 4,
		title: 'Anshuman Mishra',
		totalCourses: 1,
		courses: [
			'Climate change science introduction',
			'Impacts of climate change',
			'Climate change solutions'
		],
		enrolledOn: '12 Feb, 2022'
	}, {
		id: 5,
		title: 'James Barr',
		totalCourses: 2,
		courses: [
			'sea level rise'
		],
		enrolledOn: '12 Feb, 2022'
	}, {
		id: 6,
		title: 'Adam Books',
		totalCourses: 3,
		courses: [
			'Climate change science introduction',
			'Impacts of climate change',
			'sea level rise'
		],
		enrolledOn: '12 Feb, 2022'
	}, {
		id: 7,
		title: 'Susan Turner',
		totalCourses: 4,
		courses: [
			'agricultural systems and food choice lesson plan'
		],
		enrolledOn: '12 Feb, 2022'
	}, {
		id: 8,
		title: 'Ernest Wellington',
		totalCourses: 2,
		courses: [
			'Climate change science introduction',
			'Impacts of climate change',
			'sea level rise'
		],
		enrolledOn: '12 Feb, 2022'
	}, {
		id: 9,
		title: 'Jason Bourne',
		totalCourses: 5,
		courses: [
			'Climate change science introduction',
			'agricultural systems and food choice lesson plan'
		],
		enrolledOn: '12 Feb, 2022'
	}, {
		id: 10,
		title: 'Patricia Brooks',
		totalCourses: 1,
		courses: [
			'Impacts of climate change'
		],
		enrolledOn: '12 Feb, 2022'
	}
];


const ManageUsers= () => {
	return (
		<section className={ styles.manageUsers }>
			<h1>Manage Users</h1>

			<div>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Courses Downloaded</th>
							<th>Enrolled On</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							data.map((item) => {
								return (
									<tr key={ `tr_${item.id}` }>
										<td>{ item.title }</td>
										<td>
											<span>{ item.totalCourses }</span>
											{
												item.courses.length && item.courses.map((subItem, index) => {
													return (
														<span key={ `td_span_${index}` }>{ subItem }</span>
													)
												})
											}
										</td>
										<td>{ item.enrolledOn }</td>
										<td>
											<EditIcon />
											<DeleteIcon />
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		</section>
	)
};

export default ManageUsers;