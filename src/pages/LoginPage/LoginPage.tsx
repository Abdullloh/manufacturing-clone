import { Button, Flex, Form, Input, Typography } from 'antd';
import { FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e: any) => {
    if (
      //@ts-ignore
      loginRef.current.input.value === 'admin' &&
      //@ts-ignore
      passwordRef.current.input.value === 'admin1111'
    ) {
      navigate('/cabinet');
    }
  };

  return (
    <Flex gap="middle" className="h-[100%] w-[100%]">
      <Flex className="hidden md:flex items-center justify-center flex-1">
        <img src="/logo.png" width="50%" alt="" />
      </Flex>
      <Flex className="justify-center items-center bg-[#0f172a] flex-1" vertical>
        <Title style={{ textAlign: 'center', color: '#fff' }} level={2}>
          Tizimga kirish
        </Title>
        <Form className="flex gap-8 flex-col w-[70%]" onFinish={handleLogin}>
          <Input placeholder="Login" ref={loginRef} name="login" />
          <Input placeholder="Parol" ref={passwordRef} type="password" name="password" />
          <Button
            onClick={handleLogin}
            style={{ background: '#184da2e2' }}
            type="primary"
            htmlType="submit"
          >
            Kirish
          </Button>
        </Form>
      </Flex>
    </Flex>
  );
};
