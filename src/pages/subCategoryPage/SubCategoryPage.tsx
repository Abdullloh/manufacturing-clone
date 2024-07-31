import { Button, Flex, Table, Typography } from 'antd';
import { FC } from 'react';
import { SubCategoryAddModal } from '../../features/subcategory/components/modals';
import { useCreateSubCategoryMutation } from '../../features/subcategory/services';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const SubCategoryPage: FC = () => {
  const [addSubCategory] = useCreateSubCategoryMutation();
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  const handleCreateCategory = (values: any) => {
    console.log(values);
    // addSubCategory(values);
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

      <SubCategoryAddModal
        open={isModalOpen}
        title="Subkategoriya qo'shish"
        onSubmit={handleCreateCategory}
        onOk={handleCreateCategory}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
