import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import ItemCard from '../itemCard/';
import Layout from 'antd/lib/layout';
import PropTypes from 'prop-types';
import { gallery } from '../../../../db.json';
// import { fetchProjectsList, filterProjects } from '../../actions/project-actions';
import './index.css';

class Category extends Component {
  componentDidMount() {
    const { match } = this.props;
    const category = gallery.filter(project => {
      console.log('qq',project.id);
      project.id === match.params.id;
    });
    console.log('hhhhh', category);
  }
  render() {

    return (
      <Layout>
        <div className='gallery__main'>
          <div className='designer__work'>
            <h4 className='title title-collection'>My Gallery</h4>
            <Row type='flex' justify='center'>
              <Col span={8} className='designer__card'>
                <ItemCard title='Pi T-Shirt' itemImg='http://image.spreadshirtmedia.com/image-server/v1/mp/products/P17019269MPC23464722/views/1,width=378,height=378,appearanceId=70,backgroundColor=E8E8E8,version=1468495391/slice-of-pi-t-shirts-men-s-ringer-t-shirt.jpg' designImg='https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/P17019269MPC23464722/views/1,width=378,height=378,appearanceId=70,backgroundColor=E8E8E8,version=1468495391/slice-of-pi-t-shirts-men-s-ringer-t-shirt.webp' />
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}

Category.propTypes = {
  match: PropTypes.object
};
export default Category;
