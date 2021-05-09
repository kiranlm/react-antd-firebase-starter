import React, { FC } from 'react';
import { Layout } from 'antd';

const { Footer: FooterLayout } = Layout;

const Footer: FC = () => (
  <FooterLayout className='footer'>
    {' '}
    Created by{' '}
    <a href='https://kiranlm.github.io' target='__blank' title='kiranlm'>
      Kiran LM
    </a>
  </FooterLayout>
);

export default Footer;
