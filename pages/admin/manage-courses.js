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
		parentId: null,
		title: 'Climate change science introduction',
		totalDownloads: 12,
		createdOn: '12 Feb, 2022',
		updatedOn: '20 Apr, 2022'
	}, {
		id: 11,
		parentId: 1,
		title: 'Introduction',
		totalDownloads: 5,
		createdOn: '12 Feb, 2022',
		updatedOn: '--'
	}, {
		id: 12,
		parentId: 1,
		title: 'What is climate change?',
		totalDownloads: 3,
		createdOn: '12 Feb, 2022',
		updatedOn: '15 Mar, 2022'
	}, {
		id: 13,
		parentId: 1,
		title: 'Step by step process to understand',
		totalDownloads: 4,
		createdOn: '12 Feb, 2022',
		updatedOn: '20 Apr, 2022'
	}, {
		id: 2,
		parentId: null,
		title: 'Impacts of climate change',
		totalDownloads: 36,
		createdOn: '28 Feb, 2022',
		updatedOn: '--'
	}, {
		id: 3,
		parentId: null,
		title: 'sea level rise',
		totalDownloads: 48,
		createdOn: '07 Mar, 2022',
		updatedOn: '--'
	}, {
		id: 4,
		parentId: null,
		title: 'agricultural systems and food choice lesson plan',
		totalDownloads: 55,
		createdOn: '19 Mar, 2022',
		updatedOn: '29 Apr, 2022'
	}, {
		id: 41,
		parentId: 4,
		title: 'Understanding agricultural systems',
		totalDownloads: 23,
		createdOn: '19 Mar, 2022',
		updatedOn: '--'
	}, {
		id: 42,
		parentId: 4,
		title: 'Food choice lesson planning',
		totalDownloads: 32,
		createdOn: '19 Mar, 2022',
		updatedOn: '29 Apr, 2022'
	}, {
		id: 5,
		parentId: null,
		title: 'Climate justice and Communication',
		totalDownloads: 23,
		createdOn: '31 Mar, 2022',
		updatedOn: '02 Apr, 2022'
	}, {
		id: 6,
		parentId: null,
		title: 'Climate change solutions',
		totalDownloads: 8,
		createdOn: '05 Apr, 2022',
		updatedOn: '--'
	}
];


const ManageCourses = () => {
	const sessionData = useSessionData();

	return (
		<Layout>
			<Head>
        		<title>Acterra - Manage Courses</title>
      		</Head>
			<section className={ styles.manageCourses }>
				<div className={ styles.titleAction }>
					<h1>Manage Courses</h1>
					<Link href="/admin/create-course">
						<a className={ styles.primaryBtn }>
							<AddIcon />
							<span>Add new course</span>
						</a>
			        </Link>
				</div>
				<div className={ styles.tableContainer }>
					<table>
						<thead>
							<tr>
								<th>Title</th>
								<th>Subtitle</th>
								<th>Downloads</th>
								<th>Uploaded On</th>
								<th>Last Modified</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{
								data.map((item) => {
									return (
										<tr key={ `tr_${item.id}` } className={ item.parentId ? '' : styles.parent }>
											<td>{ !item.parentId && item.title }</td>
											<td>{ item.parentId && item.title }</td>
											<td>{ item.totalDownloads }</td>
											<td>{ item.createdOn }</td>
											<td>{ item.updatedOn }</td>
											<td>
												<ul>
													<li>
														<EditIcon />
														<span>Edit</span>
													</li>
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

export default ManageCourses;