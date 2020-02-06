import React from 'react';
import './App.css';
import { Layout } from 'antd';

import MainHeader from './components/MainHeader';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <MainHeader />
        <Layout>
          <Content>Test Content</Content>
          <Sider>Test Sider</Sider>
        </Layout>
        <Footer>Test Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
