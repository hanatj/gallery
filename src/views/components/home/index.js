import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import ItemCard from '../itemCard/';
import Layout from 'antd/lib/layout';
import { Link } from 'react-router-dom';
import { gallery } from '../../../../db.json';
import './index.css';

class Home extends Component {
  render() {

    return (
      <Layout>
        <div className='gallery__main'>
          <div className='designer__work'>
            <h4 className='title title-collection'>My Gallery</h4>
            <Row type='flex' justify='center'>
              {
                gallery.map(category => (
                  <Col span={6} className='designer__card' key={category.title}>
                    <Link to={`/category/${category.id}`}>
                      <ItemCard title={category.title}
                        itemImg={category.image} designImg={category.image} />
                    </Link>
                  </Col>
                ))
              }
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
