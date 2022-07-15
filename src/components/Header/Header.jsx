import React from 'react';
import { Layout, Typography, Menu } from 'antd';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Layout.Header>
      <div className={styles.logo}>
        <Link to="/" style={{ height: '100%' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <img
              style={{ width: '60px', height: '60px' }}
              src={'https://sarraflawfirm.com/wp-content/uploads/2021/05/11-1.png'}
            />
            <Typography.Title style={{ color: 'white', margin: 0 }}>Psygarnij</Typography.Title>
          </div>
        </Link>
      </div>
      <Menu mode="horizontal" theme="dark" style={{ justifyContent: 'right', fontSize: '20px' }}>
        <Menu.Item key="adoptions">
          <Link to="/">Adopcje</Link>
        </Menu.Item>
        <Menu.Item key="missing">
          <Link to="/missing">Zaginione</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Kontakt</Link>
        </Menu.Item>
        <Menu.SubMenu key="add" title="Dodaj">
          <Menu.Item key="settings:1">
            <Link to="/addAdoption">Adopcja</Link>
          </Menu.Item>
          <Menu.Item key="settings:2">
            <Link to="/addMissing">Zaginione</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Header>
  );
}
