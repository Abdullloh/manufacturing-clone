import { Button, Flex, Form, Input, Typography } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/cabinet');
  };

  return (
    <Flex gap="middle" style={{ height: '100%' }}>
      <Flex flex={1} align="center" justify="center">
        <img src="/logo.png" width="50%" alt="" />
      </Flex>
      <Flex
        flex={1}
        vertical
        justify="center"
        align="center"
        style={{ background: 'rgb(15 23 42)' }}
      >
        {/* <Flex vertical flex={1} align="center" justify="center"> */}
        <Title style={{ textAlign: 'center', color: '#fff' }} level={2}>
          Tizimga kirish
        </Title>
        <Form style={{ display: 'flex', gap: 8, flexDirection: 'column', width: '60%' }}>
          <Input placeholder="Login" />
          <Input placeholder="Parol" type="password" />
          <Button
            onClick={handleLogin}
            style={{ background: '#184da2e2' }}
            type="primary"
            htmlType="submit"
          >
            Kirish
          </Button>
        </Form>
        {/* </Flex> */}
      </Flex>
    </Flex>
  );
};
