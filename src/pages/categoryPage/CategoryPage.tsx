import { Button, Flex, Typography } from 'antd';
import { FC, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { CATEGORY_COLUMNS } from '../../features/category/columns';
import { CategoryAddModal } from '../../features/category/components/modals';
import { ICategoryResponse } from '../../features/category/models';
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryExcelMutation,
  useGetCategoryListQuery,
  useUpdateCategoryMutation,
} from '../../features/category/services/category.service';
import { Filter } from '../../shared/components/filter';
import { ReusableTable } from '../../shared/components/table';
import { useFiles, useFilter, useModal } from '../../shared/hooks';
const { Title } = Typography;

export const CategoryPage: FC = () => {
  const [addCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const { debouncedValue, from_date, to_date, handleRangeChange, handleChangeInput } = useFilter();
  const queryArgs = useMemo(
    () =>
      Object.assign(
        {
          keyword: debouncedValue,
          limit: 1000000,
        },

        from_date && to_date ? { from_date, to_date } : {},
      ),
    [debouncedValue, from_date, to_date],
  );
  const { handleDownloadExcel } = useFiles(useGetCategoryExcelMutation, queryArgs);

  const { data, isLoading, refetch } = useGetCategoryListQuery(
    queryArgs,

    { refetchOnMountOrArgChange: true },
  );
  const [deleteCategory] = useDeleteCategoryMutation();
  const [id, setId] = useState<string>('');

  const handleCreateCategory = (values: any) => {
    if (!id) return addCategory(values).then(handleCloseModal).then(refetch);
    updateCategory({ ...values, id })
      .then(() => setId(''))
      .then(handleCloseModal)
      .then(refetch);
  };

  const handleDeleteCategory = (id: string) => {
    deleteCategory({ id }).then(refetch);
  };

  const handleEditCategory = (id: string) => {
    setId(id);
    handleOpenModal();
  };

  const handleCancelModal = () => {
    setId('');
    handleCloseModal();
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>KATEGORIYALAR RO'YXATI </Title>
        <Flex gap={4}>
          <Button type="primary" onClick={handleOpenModal}>
            Qo'shish
          </Button>
          <Button type="primary" onClick={handleDownloadExcel}>
            Excel yuklash
          </Button>
        </Flex>
      </Flex>
      <Filter handleInputChange={handleChangeInput} handleRangeChange={handleRangeChange} />
      <ReusableTable<ICategoryResponse>
        onDelete={handleDeleteCategory}
        onEdit={handleEditCategory}
        loading={isLoading}
        dataSource={data?.data}
        columns={CATEGORY_COLUMNS}
      />
      {isModalOpen &&
        createPortal(
          <CategoryAddModal
            id={id}
            open={isModalOpen}
            title="Kategoriya qo'shish"
            onSubmit={handleCreateCategory}
            onOk={handleCreateCategory}
            onCancel={handleCancelModal}
          />,
          document.body,
        )}
    </Flex>
  );
};
