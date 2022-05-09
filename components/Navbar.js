import { useRouter } from 'next/router';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { useSessionData } from './../components/Common';
import styles from './../styles/Navbar.module.scss';


const Navbar = () => {
	const router = useRouter();
	const sessionData = useSessionData();

	const removeStorage = () => {
		sessionStorage.removeItem('userSessionData');
		router.push('/admin');
	};

	if (!sessionData && sessionData === null) {
		return <div>Loading...</div>
	}

	return (
		<aside className={ cn(styles.aside, {
			[styles.admin]: sessionData.admin
		})}>		
			<nav>
				<figure>
					<Image
						src="/logo.png"
						alt="Acterra Logo"
						width={300}
						height={83}
					/>
				</figure>
				{
					<div className={ styles.loggedinInfo }>
						<p>{ `Welcome, ${sessionData.userName}` }</p>
						<p>{ `Last login - 03 Apr, 2022 (Tue),` }</p>
						<p>{ `12:34pm (IST)` }</p>
					</div>
				}
				<ul>
					<li>
						<Link href="/admin">
							<a>Dashboard</a>
						</Link>
					</li>
					{
						sessionData.admin ? (
							<>
								<li>
									<Link href="/admin/manage-courses">
										<a>Manage Courses</a>
									</Link>
								</li>
								<li>
									<Link href="/admin/manage-users">
										<a>Manage Users</a>
									</Link>
								</li>
							</>
						) : (
							<li>
								<Link href="/admin/contact">
									<a>Contact</a>
								</Link>
							</li>
						)
					}
					<li>
						<Link href="/admin/change-password">
							<a>Change Password</a>
						</Link>
					</li>
					<li onClick={ () => removeStorage() }>Logout</li>
				</ul>
				<div className={ styles.navFooter }>
					Version 1.0.0. <br />
					&copy; Acterra. All Rights Reserved.
				</div>
			</nav>
		</aside>
	)
};

export default Navbar;