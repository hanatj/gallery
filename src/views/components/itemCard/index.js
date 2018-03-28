import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'antd/lib/card';
const { Meta } = Card;
import './index.css';
import { Link } from 'react-router-dom';

class ItemCard extends Component {
  constructor() {
    super();
    this.state = {
      isHover: false
    };
    this.hover=this.hover.bind(this);
    this.noHover=this.noHover.bind(this);
  }
  hover() {
    this.setState({ isHover: true });
  }
  noHover() {
    this.setState({ isHover: false });
  }
  render() {
    const { itemImg,designImg,title } = this.props;

    return (
      <Card
        hoverable
        className='itemCard__cover'
        cover={<img alt='example' src={this.state.isHover? designImg : itemImg} />}
        onMouseOver={this.hover}
        onMouseLeave={this.noHover}
      >
        <Meta
          title={title}
          className='itemCard__details'
        />
      </Card>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string,
  itemImg: PropTypes.string,
  designImg: PropTypes.string
};

export default ItemCard;
