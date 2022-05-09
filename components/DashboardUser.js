import Link from 'next/link';
import styles from './../styles/Dashboard.module.scss';
import Navbar from './../components/Navbar';
import { Courses } from './../lib/data';


const Dashboard = () => {  
    return (
        <section className={ styles.dashboard }>
            <Navbar />
            
            <div className={ styles.content }>
                <h1>Currently Enrolled Courses</h1>
                <ul className={ styles.courseList }>
                    <li>
                        <h3>Impacts of Climate Change</h3>
                        <p>Enrolled on 28th March, 2022</p>
                        <div className={ styles.actionButtons }>
                            <button className={ styles.primaryBtn }>Download Course Curriculum</button>
                            <button className={ styles.primaryBtn }>Download Slide Deck</button>
                        </div>
                    </li>
                    <li>
                        <h3>Agricultural systems and Food choice lesson plan</h3>
                        <p>Enrolled on 28th March, 2022</p>
                        <div className={ styles.actionButtons }>
                            <button className={ styles.primaryBtn }>Download Course Curriculum</button>
                            <button className={ styles.primaryBtn }>Download Slide Deck</button>
                        </div>
                    </li>
                    <li>
                        <h3>Impacts of Climate Change</h3>
                        <p>Enrolled on 28th March, 2022</p>
                        <div className={ styles.actionButtons }>
                            <button className={ styles.primaryBtn }>Download Course Curriculum</button>
                            <button className={ styles.primaryBtn }>Download Slide Deck</button>
                        </div>
                    </li>
                </ul>

                <h1>Available Courses</h1>
                <ul className={ styles.courseList }>
                    <li>
                        <h3>Impacts of Climate Change</h3>
                        <p>Enrolled on 28th March, 2022</p>
                        <div className={ styles.actionButtons }>
                            <button className={ styles.primaryBtn }>Download Course Curriculum</button>
                            <button className={ styles.primaryBtn }>Download Slide Deck</button>
                        </div>
                    </li>
                    <li>
                        <h3>Agricultural systems and Food choice lesson plan</h3>
                        <p>Enrolled on 28th March, 2022</p>
                        <div className={ styles.actionButtons }>
                            <button className={ styles.primaryBtn }>Download Course Curriculum</button>
                            <button className={ styles.primaryBtn }>Download Slide Deck</button>
                        </div>
                    </li>
                    <li>
                        <h3>Impacts of Climate Change</h3>
                        <p>Enrolled on 28th March, 2022</p>
                        <div className={ styles.actionButtons }>
                            <button className={ styles.primaryBtn }>Download Course Curriculum</button>
                            <button className={ styles.primaryBtn }>Download Slide Deck</button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Dashboard;