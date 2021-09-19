import React from 'react';
import Layout from '../components/common/Layout';
import Navbar from '../components/common/Navbar';
import Contact from '../components/sections/Contact';

const ContactPage = (props) => (
  <Layout>
    <Navbar />
    <Contact plan={props.location.search} />
  </Layout>
);

export default ContactPage;