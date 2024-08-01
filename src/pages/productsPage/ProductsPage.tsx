import { Button, Flex, Table, Typography } from 'antd';
import { FC, useState } from 'react';
import { QRCodeGenerator } from '../../components';
import { AddProductModal } from '../../features/products/components/modals/AddProductModal';
import { useModal } from '../../shared/hooks/useModal';

const { Title } = Typography;

export const ProductsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [isQrcCodeVisible, setIsQrCideVisible] = useState(false);
  const [data, setData] = useState<any>();

  const handleAddProduct = (values: any) => {
    setData(values);
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>Mahsulotlar ruyhati </Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <Table
        dataSource={[{ name: 'Abdulloh' }, { name: 'Abdulloh' }]}
        columns={[{ key: 'name', title: 'Ismi' }]}
      />
      {data && <QRCodeGenerator value={data} />}

      <AddProductModal
        open={isModalOpen}
        title="Subkategoriya qo'shish"
        onSubmit={handleAddProduct}
        onOk={() => {}}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
