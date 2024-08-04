import { Button, Card, Flex, Form, Input, Typography } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/cabinet');
  };

  return (
    <Flex vertical gap="middle">
      <Card style={{ width: '100%' }}>
        <Flex vertical gap="middle">
          <Title style={{ textAlign: 'center' }} level={2}>
            Tizimga kirish
          </Title>
          <Form style={{ display: 'flex', gap: 8, flexDirection: 'column', width: '100%' }}>
            <Input placeholder="Login" />
            <Input placeholder="Parol" />
            <Button onClick={handleLogin} type="primary" htmlType="submit">
              Kirish
            </Button>
          </Form>
        </Flex>
      </Card>
    </Flex>
  );
};
