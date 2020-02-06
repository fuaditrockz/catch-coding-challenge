import React from 'react';
import { Layout } from 'antd';

import Header  from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Layout.Content>
          <div style={contentContainer}>
            <Products />
            <Cart />
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    </div>
  );
}

const contentContainer = {
  display: "flex",
  minHeight: "92vh"
}

export default App;
