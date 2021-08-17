import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Chart from '@sections/Chart';
import Footer from '@sections/Footer';
import Pricing from '@sections/Pricing';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Chart />
    <Pricing />
    <Footer />
  </Layout>
);

export default IndexPage;
