import { Button, Flex, Table, Typography } from 'antd';
import { FC } from 'react';
import { AddDimensionModal } from '../../features/dimensions/components/modals';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const DimensionsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  const handleCreateCategory = (values: any) => {
    console.log(values);
    // a
  };
  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>Sub kategoriyalar ruyhati </Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <Table
        dataSource={[{ name: 'Abdulloh' }, { name: 'Abdulloh' }]}
        columns={[{ key: 'name', title: 'Ismi' }]}
      />

      <AddDimensionModal
        open={isModalOpen}
        title="Subkategoriya qo'shish"
        onSubmit={handleCreateCategory}
        onOk={() => {}}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
