import * as React from 'react';
import { Form, Input, Button } from 'antd';
import Layout from '../../components/Layout/Layout';

export default function Contact() {
  return (
    <Layout title="Formularz kontaktowy">
      <div style={{ margin: '0 auto', width: '30rem' }}>
        <Form
          layout="vertical"
          style={{
            justifyContent: 'left',
            flexDirection: 'column',
            border: '3px solid',
            background: '#001529',
            padding: '20px',
            borderRadius: '25px'
          }}>
          <Form.Item label="Imię i nazwisko">
            <Input placeholder="Imię i nazwisko" />
          </Form.Item>
          <Form.Item label="Treść e-mail">
            <Input.TextArea placeholder="Treść e-mail" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" shape="round" style={{ margin: 'auto', width: '100%' }}>
              Wyślij wiadomość
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}
