import { useState, useEffect } from 'react';
import Layout from './../../components/Layout';
import styles from './../../styles/dashboard.module.scss';


const Dashboard = () => {
    return (
        <Layout>
            <section className={ styles.dashboard }>
                <div>
                    Analytics data here
                </div>
            </section>
        </Layout>
    )
};

export default Dashboard;