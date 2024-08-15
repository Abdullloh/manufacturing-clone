import { Button, Flex, Typography } from 'antd';
import { FC, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { SUB_CATEGORY_COLUMNS } from '../../features/subcategory/columns';
import { SubCategoryAddModal } from '../../features/subcategory/components/modals';
import { ISubcategory } from '../../features/subcategory/models';
import {
  useCreateSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useGetSubCategoryExcelMutation,
  useGetSubCategoryListQuery,
  useUpdateSubCategoryMutation,
} from '../../features/subcategory/services';
import { Filter } from '../../shared/components/filter';
import { ReusableTable } from '../../shared/components/table';
import { useFiles, useFilter } from '../../shared/hooks';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const SubCategoryPage: FC = () => {
  const [addSubCategory] = useCreateSubCategoryMutation();
  const [updateSubCategory] = useUpdateSubCategoryMutation();
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

  const { data, refetch, isLoading } = useGetSubCategoryListQuery(queryArgs, {
    refetchOnMountOrArgChange: true,
  });
  const { handleDownloadExcel } = useFiles(useGetSubCategoryExcelMutation, queryArgs);
  const [id, setId] = useState<string>('');
  const [deleteSubCategory] = useDeleteSubCategoryMutation();

  const handleDeleteSubCategory = (id: string) => {
    deleteSubCategory({ id }).then(refetch);
  };

  const handleCreateCategory = (values: any) => {
    if (!id) return addSubCategory(values).then(refetch).then(handleCloseModal);
    updateSubCategory({ ...values, id })
      .then(() => setId(''))
      .then(handleCloseModal)
      .then(refetch);
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
        <Title level={2}>SUBKATEGORIYALAR RO'YXATI </Title>
        <Flex>
          <Button type="primary" onClick={handleOpenModal}>
            Qo'shish
          </Button>
          <Button type="primary" onClick={handleDownloadExcel}>
            Excel yuklash
          </Button>
        </Flex>
      </Flex>

      <Filter handleInputChange={handleChangeInput} handleRangeChange={handleRangeChange} />

      <ReusableTable<ISubcategory>
        onEdit={handleEditCategory}
        onDelete={handleDeleteSubCategory}
        loading={isLoading}
        dataSource={data?.data}
        columns={SUB_CATEGORY_COLUMNS}
      />

      {isModalOpen &&
        createPortal(
          <SubCategoryAddModal
            id={id}
            open={isModalOpen}
            title="Subkategoriya qo'shish"
            onSubmit={handleCreateCategory}
            onOk={handleCreateCategory}
            onCancel={handleCancelModal}
          />,
          document.body,
        )}
    </Flex>
  );
};
