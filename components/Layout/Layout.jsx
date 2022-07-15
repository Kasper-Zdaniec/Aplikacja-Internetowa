import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout as AntLayout, LayoutProps as AntLayoutProps } from 'antd';
import styles from './layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export interface LayoutProps extends AntLayoutProps {
  title?: string;
}

export default function Layout({ children, title }: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <AntLayout
        style={{
          minHeight: '100vh',
          backgroundImage: `url("https://cutewallpaper.org/25/animal-shelter-wallpaper/2258613171.jpg")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
        <Header />
        <AntLayout.Content className={styles.content}>{children}</AntLayout.Content>
        <Footer />
      </AntLayout>
    </>
  );
}
