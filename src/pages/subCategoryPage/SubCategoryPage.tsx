import { Button, DatePicker, Flex, Input, Typography } from 'antd';
import { FC } from 'react';
import { SUB_CATEGORY_COLUMNS } from '../../features/subcategory/columns';
import { SubCategoryAddModal } from '../../features/subcategory/components/modals';
import { ISubcategory } from '../../features/subcategory/models';
import {
  useCreateSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useGetSubCategoryListQuery,
} from '../../features/subcategory/services';
import { ReusableTable } from '../../shared/components/table';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

const { RangePicker } = DatePicker;

export const SubCategoryPage: FC = () => {
  const [addSubCategory] = useCreateSubCategoryMutation();
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const { data, refetch, isLoading } = useGetSubCategoryListQuery();
  const [deleteSubCategory] = useDeleteSubCategoryMutation();

  const handleDeleteSubCategory = (id: string) => {
    deleteSubCategory({ id }).then(refetch);
  };

  const handleCreateCategory = (values: any) => {
    addSubCategory(values).then(refetch);
    handleCloseModal();
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>SUBKATEGORIYALAR RO'YXATI </Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <Flex justify="flex-end" style={{ marginBottom: 10 }} gap={5}>
        <Input placeholder="Qidiruv" />
        <RangePicker />
      </Flex>

      <ReusableTable<ISubcategory>
        onEdit={() => {}}
        onDelete={handleDeleteSubCategory}
        loading={isLoading}
        dataSource={data}
        columns={SUB_CATEGORY_COLUMNS}
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
