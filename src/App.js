import React from 'react';
import './App.css';
import { Layout } from 'antd';

import MainHeader  from './components/MainHeader';
import ProductList from './components/ProductList';
import Cart from './components/Sider';
import MainFooter from './components/MainFooter';

function App() {
  return (
    <div>
      <Layout>
        <MainHeader />
        <Layout.Content>
          <div style={contentContainer}>
            <ProductList />
            <Cart />
          </div>
        </Layout.Content>
        <MainFooter />
      </Layout>
    </div>
  );
}

const contentContainer = {
  display: "flex",
  minHeight: "89vh"
}

export default App;
