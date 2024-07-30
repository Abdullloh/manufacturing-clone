import { FC } from 'react';
import { Button, Card, Flex, Input, Typography } from 'antd';
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
          <Input placeholder="Login" />
          <Input placeholder="Parol" />
          <Button onClick={handleLogin} type="primary">
            Kirish
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};
