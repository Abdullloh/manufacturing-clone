import { Button, Flex, Table, Typography } from 'antd';
import { FC } from 'react';
import { CATEGORY_COLUMNS } from '../../features/category/columns';
import { CategoryAddModal } from '../../features/category/components/modals';
import {
  useCreateCategoryMutation,
  useGetCategoryListQuery,
} from '../../features/category/services/category.service';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const CategoryPage: FC = () => {
  const [addCategory] = useCreateCategoryMutation();
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const { data, isLoading, refetch } = useGetCategoryListQuery({});

  const handleCreateCategory = (values: any) => {
    addCategory(values).then(handleCloseModal).then(refetch);
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>Kategoriyalar ruyhati </Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <Table loading={isLoading} dataSource={data} columns={CATEGORY_COLUMNS} />

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
