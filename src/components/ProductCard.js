import React, { Component } from 'react';
import { Card, Col } from 'antd';

export default class ProductCard extends Component {
  render() {
    return (
      <Col xs={10} sm={10} md={8} lg={6} xl={6}>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    );
  }
}