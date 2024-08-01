import { Button, Flex, Table, Typography } from 'antd';
import { FC } from 'react';
import { AddProductModal } from '../../features/products/components/modals/AddProductModal';
import { useModal } from '../../shared/hooks/useModal';

const { Title } = Typography;

export const ProductsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

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

      <AddProductModal
        open={isModalOpen}
        title="Subkategoriya qo'shish"
        onSubmit={() => {}}
        onOk={() => {}}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
