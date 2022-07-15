import * as React from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';

const { Option } = Select;

export interface SearchFormProps {
  setSearchParams?: React.Dispatch<any>;
}

export interface SearchFormData {
  [key: string]: string;
}

export default function SearchForm({ setSearchParams }: SearchFormProps) {
  const [form] = Form.useForm();
  const handleFinish = (data: SearchFormData) => {
    setSearchParams(data);
    form.resetFields();
  };

  return (
    <div style={{ margin: '0 auto', width: 'fit-content' }}>
      <Form
        form={form}
        initialValues={{ remember: false }}
        onFinish={handleFinish}
        layout="vertical"
        style={{
          justifyContent: 'left',
          flexDirection: 'column',
          border: '3px solid',
          background: '#001529',
          padding: '20px',
          borderRadius: '25px'
        }}>
        <Form.Item name="city" label="Miasto">
          <Input placeholder="Podaj miasto" />
        </Form.Item>
        <Form.Item name="name" label="Imię zwierzaka (jeśli znasz)">
          <Input placeholder="Jak się wabi zwierzak" />
        </Form.Item>
        <Form.Item name="sex" label="Płeć">
          <Select defaultValue="Bez znaczenia">
            <Option value="Bez znaczenia">Bez znaczenia</Option>
            <Option value="On">On</Option>
            <Option value="Ona">Ona</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Rasa" name="breed">
          <Select showSearch>
            <Option value="Mieszaniec">Mieszaniec</Option>
            <Option value="Aidi">Aidi</Option>
            <Option value="Airedale Terrier">Airedale Terrier</Option>
            <Option value="Akita">Akita</Option>
            <Option value="Akita amerykańska">Akita amerykańska</Option>
            <Option value="Alaskan Malamute">Alaskan Malamute</Option>
            <Option value="American Staffordshire Terrier">American Staffordshire Terrier</Option>
            <Option value="Amerykański spaniel dowodny">Amerykański spaniel dowodny</Option>
            <Option value="Anatolian">Anatolian</Option>
            <Option value="Appenzeller">Appenzeller</Option>
            <Option value="Ariégeois">Ariégeois</Option>
            <Option value="Australian Cattle Dog">Australian Cattle Dog</Option>
            <Option value="Australian Silky Terrier">Australian Silky Terrier</Option>
            <Option value="Australian Stumpy Tail Cattle Dog">
              Australian Stumpy Tail Cattle Dog
            </Option>
            <Option value="Azawakh - chart afrykański">Azawakh - chart afrykański</Option>
            <Option value="Barbet">Barbet</Option>
            <Option value="Basenji">Basenji</Option>
            <Option value="Basset artezyjsko-normandzki">Basset artezyjsko-normandzki</Option>
          </Select>
        </Form.Item>
        <Form.Item name="age" label="Wiek">
          <Select defaultValue="Bez znaczenia">
            <Option value="Bez znaczenia">Bez znaczenia</Option>
            <Option value="Bardzo młody">Bardzo młody</Option>
            <Option value="Młody">Młody</Option>
            <Option value="Dorosły">Dorosły</Option>
            <Option value="Senior">Senior</Option>
          </Select>
        </Form.Item>
        <Form.Item name="size" label="Wielkość">
          <Select defaultValue="Bez znaczenia">
            <Option value="Bez znaczenia">Bez znaczenia</Option>
            <Option value="Mały">Mały</Option>
            <Option value="Średni">Średni</Option>
            <Option value="Duży">Duży</Option>
          </Select>
        </Form.Item>
        <Form.Item name="sterilization" valuePropName="checked">
          <Checkbox>{'sterylizacja/kastracja'}</Checkbox>
        </Form.Item>
        <Form.Item name="vaccivations" valuePropName="checked">
          <Checkbox>{'szczepienia'}</Checkbox>
        </Form.Item>
        <Form.Item name="friendly" valuePropName="checked">
          <Checkbox>{'przyjazny dzieciom'}</Checkbox>
        </Form.Item>
        <Form.Item name="trained" valuePropName="checked">
          <Checkbox>{'szkolony'}</Checkbox>
        </Form.Item>
        <Form.Item name="playful" valuePropName="checked">
          <Checkbox>{'uwielbia zabawę'}</Checkbox>
        </Form.Item>
        <Form.Item name="walks" valuePropName="checked">
          <Checkbox>{'uwielbia spacery'}</Checkbox>
        </Form.Item>
        <Form.Item name="anotherDogs" valuePropName="checked">
          <Checkbox>{'akceptuje psy'}</Checkbox>
        </Form.Item>
        <Form.Item name="anotherCats" valuePropName="checked">
          <Checkbox>{'akceptuje koty'}</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            style={{ margin: 'auto', width: '100%' }}>
            Szukaj
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
