import React, { Component } from 'react';
import { Layout, Row, Col, Card } from 'antd';

export default class ProductList extends Component {
  render() {
    return (
      <Layout.Content style={containerStyle}>
        <Row gutter={10}>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    )
  }
}

const containerStyle = {
  padding: 10,
}