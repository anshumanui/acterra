import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from './../../components/Layout';
import styles from './../../styles/ManageCourses.module.scss';
import { AddIcon, CloseIcon, UploadIcon, EditIcon, DeleteIcon } from './../../components/svgIcons';
import { useSessionData } from './../../components/Common';


const data = [
	{
		id: 1,
		fullName: 'Steven Darper',
		emailId: 'stevend@gmail.com',
		coursesEnrolled: [
			'Impacts of climate change',
			'sea level rise'
		],
		totalDownloads: 12,
		joinedOn: '12 Feb, 2022',
	}, {
		id: 2,
		fullName: 'Anna Darcy',
		emailId: 'annadarcy@hotmail.com',
		coursesEnrolled: [
			'agricultural systems and food choice lesson plan'
		],
		totalDownloads: 5,
		joinedOn: '24 Mar, 2022',
	}, {
		id: 3,
		fullName: 'Anna Darcy',
		emailId: 'annadarcy@hotmail.com',
		coursesEnrolled: [
			'Understanding agricultural systems',
			'Climate justice and Communication',
			'Climate change solutions'
		],
		totalDownloads: 5,
		joinedOn: '24 Mar, 2022',
	}, {
		id: 4,
		fullName: 'Anna Darcy',
		emailId: 'annadarcy@hotmail.com',
		coursesEnrolled: [
			'sea level rise'
		],
		totalDownloads: 5,
		joinedOn: '24 Mar, 2022',
	}, {
		id: 5,
		fullName: 'Anna Darcy',
		emailId: 'annadarcy@hotmail.com',
		coursesEnrolled: [
			'sea level rise',
			'Impacts of climate change'
		],
		totalDownloads: 5,
		joinedOn: '24 Mar, 2022',
	}, {
		id: 6,
		fullName: 'Anna Darcy',
		emailId: 'annadarcy@hotmail.com',
		coursesEnrolled: [
			'Food choice lesson planning'
		],
		totalDownloads: 5,
		joinedOn: '24 Mar, 2022',
	}, {
		id: 7,
		fullName: 'Patrick Wilson',
		emailId: 'patrickneilwilson@gmail.com',
		coursesEnrolled: [],
		totalDownloads: 0,
		joinedOn: '13 Mar, 2022',
	}, {
		id: 8,
		fullName: 'Nargis Fakhri',
		emailId: 'nargis.student@outlook.com',
		coursesEnrolled: [],
		totalDownloads: 0,
		joinedOn: '05 Feb, 2022',
	}
];


const ManageUsers = () => {
	const sessionData = useSessionData();

	return (
		<Layout>
			<Head>
        		<title>Acterra - Manage Users</title>
      		</Head>
			<section className={ styles.manageCourses }>
				<div className={ styles.titleAction }>
					<h1>Manage Users</h1>
					<Link href="/admin/create-course">
						<a className={ styles.primaryBtn }>
							<AddIcon />
							<span>Add new user</span>
						</a>
			        </Link>
				</div>
				<div className={ styles.tableContainer }>
					<table>
						<thead>
							<tr>
								<th>Full Name</th>
								<th>Email Id</th>
								<th>Downloads</th>
								<th>Courses Enrolled</th>
								<th>Joined On</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{
								data.slice(0, 6).map((item) => {
									return (
										<tr key={ `tr_${item.id}` }>
											<td>{ item.fullName }</td>
											<td>{ item.emailId }</td>
											<td>{ item.totalDownloads }</td>
											<td>
												{
													item.coursesEnrolled.length ? (
														<ol>
															{
																item.coursesEnrolled.map((subItem, subIndex) => {
																	return (
																		<li key={ `td_ul_li_${subIndex}` }>
																			{ subItem }
																		</li>
																	)
																})
															}
														</ol>
													) : ('--')
												}
											</td>
											<td>{ item.joinedOn }</td>
											<td>
												<ul>
													<li>
														<DeleteIcon />
														<span>Remove</span>
													</li>
												</ul>
											</td>
										</tr>
									)
								})
							}

							<tr className={ styles.subHeading }>
								<td colSpan="6">Inactive Users</td>
							</tr>

							{
								data.slice(6, 8).map((item) => {
									return (
										<tr key={ `tr_${item.id}` } className={ styles.inactive }>
											<td>{ item.fullName }</td>
											<td>{ item.emailId }</td>
											<td>0</td>
											<td>--</td>
											<td>{ item.joinedOn }</td>
											<td>
												<ul>
													<li>
														<DeleteIcon />
														<span>Remove</span>
													</li>
												</ul>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>
			</section>
		</Layout>
	)
};

export default ManageUsers;