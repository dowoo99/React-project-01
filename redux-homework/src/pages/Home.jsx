import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";

const Home = () => {
  return (
    <Layout>
      <Header></Header>
      <Form></Form>
      <List></List>
    </Layout>
  );
};

export default Home;
