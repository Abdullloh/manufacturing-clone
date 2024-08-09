import { Button, Flex, Typography } from 'antd';
import { FC, useState } from 'react';
import { MODEL_TYPES_COLUMNS } from '../../features/modelTypes/columns';
import { AddModalTypeModal } from '../../features/modelTypes/components/modals';
import { IModelType } from '../../features/modelTypes/models';
import {
  useCreateModelTypeMutation,
  useDeleteModelTypeMutation,
  useGetModelTypeListQuery,
  useUpdateModelTypeMutation,
} from '../../features/modelTypes/services';
import { Filter } from '../../shared/components/filter';
import { ReusableTable } from '../../shared/components/table';
import { useFilter } from '../../shared/hooks';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const ModelsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addModelType] = useCreateModelTypeMutation();
  const [updateModelType] = useUpdateModelTypeMutation();
  const { debouncedValue, from_date, to_date, handleRangeChange, handleChangeInput } = useFilter();
  const [deleteModelType] = useDeleteModelTypeMutation();
  const [id, setId] = useState<string>('');
  const { data, isLoading, refetch } = useGetModelTypeListQuery(
    Object.assign({ keyword: debouncedValue }, from_date && to_date ? { from_date, to_date } : {}),
    { refetchOnMountOrArgChange: true },
  );
  const handleDeleteModelType = (id: string) => {
    deleteModelType({ id }).then(refetch);
  };

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
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
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
