import { Button, Flex, Typography } from 'antd';
import { FC, useMemo, useState } from 'react';
import { MODEL_TYPES_COLUMNS } from '../../features/modelTypes/columns';
import { AddModalTypeModal } from '../../features/modelTypes/components/modals';
import { IModelType } from '../../features/modelTypes/models';
import {
  useCreateModelTypeMutation,
  useDeleteModelTypeMutation,
  useGetModelTypeExcelMutation,
  useGetModelTypeListQuery,
  useUpdateModelTypeMutation,
} from '../../features/modelTypes/services';
import { Filter } from '../../shared/components/filter';
import { ReusableTable } from '../../shared/components/table';
import { useFiles, useFilter } from '../../shared/hooks';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const ModelsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addModelType] = useCreateModelTypeMutation();
  const [updateModelType] = useUpdateModelTypeMutation();
  const { debouncedValue, from_date, to_date, handleRangeChange, handleChangeInput } = useFilter();
  const [deleteModelType] = useDeleteModelTypeMutation();
  const [id, setId] = useState<string>('');
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

  const { data, isLoading, refetch } = useGetModelTypeListQuery(queryArgs, {
    refetchOnMountOrArgChange: true,
  });
  const handleDeleteModelType = (id: string) => {
    deleteModelType({ id }).then(refetch);
  };
  const { handleDownloadExcel } = useFiles(useGetModelTypeExcelMutation, queryArgs);
  const handleAddModelType = (values: any) => {
    if (!id)
      return addModelType({ model_name: values.model_name }).then(handleCloseModal).then(refetch);
    updateModelType({ ...values, id })
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
        <Title level={2}>MODEL TURLARI RO'YXATI</Title>
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

      <ReusableTable<IModelType>
        onEdit={handleEditCategory}
        onDelete={handleDeleteModelType}
        loading={isLoading}
        dataSource={data?.data}
        columns={MODEL_TYPES_COLUMNS}
      />
      {isModalOpen && (
        <AddModalTypeModal
          id={id}
          open={isModalOpen}
          title="Model turi qo'shish"
          onSubmit={handleAddModelType}
          onCancel={handleCancelModal}
        />
      )}
    </Flex>
  );
};
