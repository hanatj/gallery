import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';
const { Header } = Layout;
import './index.css';

class Profile extends Component {
  render() {
    return (
      <Layout>
        <Header className='designer__cover'></Header>
        <div className='designer__main'>
          <div className='designer__description'>
            <img className='designer__img' src='/images/avatar.jpg' />
            <div className='designer__name'>
              <h1 className='title'>Someone</h1>
              <h3 className='subtitle'>Passionate about art, nature, photography, animals and music.</h3>
            </div>
            <div className='designer__bio'>
              <p className='bio'>I have been DJing under the name DJ Ruby Red. Taking photos daily for decades,
                I have been able to modify my photos to give them a modern look. Via a
                collaboration with printers silly birds.com.au these images can now be printed
                on almost anything. T-shirts, tea-towels, mugs, canvas (to stretch and frame)
                and drink coolers to name a few.</p>
              <p className='designer__email'>To get a t-shirt or something else printed with my images contact
                <span className='email'> admin@xxx.com.au </span> . The prices are very affordable unique images.</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Profile;
