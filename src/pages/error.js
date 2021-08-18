import React from 'react';
import Layout from '../components/common/Layout';
import Navbar from '../components/common/Navbar';
import ErrorSection from '../components/sections/ErrorSection';

const ErrorPage = () => (
  <Layout>
    <Navbar />
    <ErrorSection />
  </Layout>
);

export default ErrorPage;