import React from 'react';
import { Layout } from 'antd';

export default function Footer() {
  return (
    <Layout.Footer
      style={{
        display: 'flex',
        background: '#001529',
        alignItems: 'center',
        height: '1rem',
        color: 'white',
        justifyContent: 'center',
        width: '100%'
      }}>
      © 2022 Psygarnij, Inc. All rights reserved.
    </Layout.Footer>
  );
}
