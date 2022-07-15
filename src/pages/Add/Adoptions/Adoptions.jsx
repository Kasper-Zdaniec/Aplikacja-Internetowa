import React, { useState } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import Layout from '../../../components/Layout/Layout';

const { Option } = Select;

export default function AddAdOptions() {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [sex, setSex] = useState();
  const [age, setAge] = useState();
  const [breed, setBreed] = useState();
  const [size, setSize] = useState();
  const [description, setDescription] = useState();
  const [sterilization, setSterilization] = useState();
  const [vaccivations, setVaccivations] = useState();
  const [friendly, setFriendly] = useState();
  const [trained, setTrained] = useState();
  const [playful, setPlayful] = useState();
  const [walks, setWalks] = useState();
  const [anotherDogs, setAnotherDogs] = useState();
  const [anotherCats, setAnotherCats] = useState();

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'psygarnij');
    const res = await fetch('	https://api.cloudinary.com/v1_1/dyt2lit8x/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();

    setImage(file.secure_url);
  };

  const onFinish = () => {
    const newDog = {
      name,
      city,
      sex,
      age,
      breed,
      size,
      description,
      sterilization,
      vaccivations,
      friendly,
      trained,
      playful,
      walks,
      anotherDogs,
      anotherCats,
      url: image
    };

    fetch('http://localhost:8000/adOptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDog)
    }).then(() => {
      window.history.pushState({}, undefined, '/');
    });
  };

  const onFinishFailed = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Layout title="Dodaj psa do adopcji">
      <div style={{ margin: '0 auto', width: '40rem' }}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{
            justifyContent: 'left',
            flexDirection: 'column',
            border: '3px solid',
            background: '#001529',
            padding: '20px',
            borderRadius: '25px'
          }}>
          <Form.Item
            rules={[{ required: true, message: 'Miasto jest wymagane!' }]}
            label="Miasto"
            name="city">
            <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Miasto" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Imię psa jest wymagane!' }]}
            label="Imię zwierzaka (jeśli znasz)"
            name="name">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Imię psa" />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Płeć" name="sex">
            <Select value={sex} onChange={(value) => setSex(value)}>
              <Option value="On">On</Option>
              <Option value="Ona">Ona</Option>
            </Select>
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Wiek" name="age">
            <Select value={age} onChange={(value) => setAge(value)}>
              <Option value="Bardzo młody">Bardzo młody</Option>
              <Option value="Młody">Młody</Option>
              <Option value="Dorosły">Dorosły</Option>
              <Option value="Senior">Senior</Option>
            </Select>
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Rasa" name="breed">
            <Select showSearch value={breed} onChange={(value) => setBreed(value)}>
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
          <Form.Item rules={[{ required: true }]} label="Wielkość" name="size">
            <Select onChange={(value) => setSize(value)} value={size}>
              <Option value="Mały">Mały</Option>
              <Option value="Średni">Średni</Option>
              <Option value="Duży">Duży</Option>
            </Select>
          </Form.Item>
          <Form.Item name="sterilization">
            <Checkbox checked={sterilization} onChange={(e) => setSterilization(e.target.checked)}>
              {'sterylizacja/kastracja'}
            </Checkbox>
          </Form.Item>
          <Form.Item name="vaccivations">
            <Checkbox checked={vaccivations} onChange={(e) => setVaccivations(e.target.checked)}>
              {'szczepienia'}
            </Checkbox>
          </Form.Item>
          <Form.Item name="friendly">
            <Checkbox checked={friendly} onChange={(e) => setFriendly(e.target.checked)}>
              {'przyjazny dzieciom'}
            </Checkbox>
          </Form.Item>
          <Form.Item name="trained">
            <Checkbox checked={trained} onChange={(e) => setTrained(e.target.checked)}>
              {'szkolony'}
            </Checkbox>
          </Form.Item>
          <Form.Item name="checked">
            <Checkbox checked={playful} onChange={(e) => setPlayful(e.target.checked)}>
              {'uwielbia zabawę'}
            </Checkbox>
          </Form.Item>
          <Form.Item name="walks">
            <Checkbox checked={walks} onChange={(e) => setWalks(e.target.checked)}>
              {'uwielbia spacery'}
            </Checkbox>
          </Form.Item>
          <Form.Item name="anotherDogs">
            <Checkbox checked={anotherDogs} onChange={(e) => setAnotherDogs(e.target.checked)}>
              {'akceptuje psy'}
            </Checkbox>
          </Form.Item>
          <Form.Item name="anotherCats">
            <Checkbox checked={anotherCats} onChange={(e) => setAnotherCats(e.target.checked)}>
              {'akceptuje koty'}
            </Checkbox>
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Opis zwierzaka" name="description">
            <Input.TextArea
              style={{ height: 120 }}
              placeholder="Opis zwierzaka"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Zdjęcie zwierzaka" name="file">
            <Input type="file" name="file" placeholder="Upload an image" onChange={uploadImage} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              style={{ margin: 'auto', width: '100%' }}>
              Dodaj
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}
