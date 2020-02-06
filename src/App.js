import React from 'react';
import './App.css';
import { Layout } from 'antd';

import MainHeader  from './components/MainHeader';
import ProductList from './components/ProductList';

const { Footer, Sider, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <MainHeader />
        <Layout>
          <ProductList />
          <Sider>Test Sider</Sider>
        </Layout>
        <Footer>Test Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
