import { Button, Flex, Table, Typography } from 'antd';
import { FC } from 'react';
import { SUB_CATEGORY_COLUMNS } from '../../features/subcategory/columns';
import { SubCategoryAddModal } from '../../features/subcategory/components/modals';
import {
  useCreateSubCategoryMutation,
  useGetSubCategoryListQuery,
} from '../../features/subcategory/services';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const SubCategoryPage: FC = () => {
  const [addSubCategory] = useCreateSubCategoryMutation();
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const { data, refetch, isLoading } = useGetSubCategoryListQuery();

  const handleCreateCategory = (values: any) => {
    console.log(values);
    addSubCategory({ sub_category_name: values.sub_category_name }).then(refetch);
    handleCloseModal();
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>Sub kategoriyalar ruyhati </Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <Table loading={isLoading} dataSource={data} columns={SUB_CATEGORY_COLUMNS} />

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
