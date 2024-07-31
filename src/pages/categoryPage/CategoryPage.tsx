import { Button, Flex, Table, Typography } from 'antd';
import { FC } from 'react';
import { CategoryAddModal } from '../../features/category/components/modals';
import { useCreateCategoryMutation } from '../../features/category/services/category.service';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const CategoryPage: FC = () => {
  const [addCategory] = useCreateCategoryMutation();
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  const handleCreateCategory = (values: any) => {
    console.log(values);
    addCategory(values);
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>Kategoriyalar ruyhati </Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <Table
        dataSource={[{ name: 'Abdulloh' }, { name: 'Abdulloh' }]}
        columns={[{ key: 'name', title: 'Ismi' }]}
      />

      <CategoryAddModal
        open={isModalOpen}
        title="Kategoriya qo'shish"
        onSubmit={handleCreateCategory}
        onOk={handleCreateCategory}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
