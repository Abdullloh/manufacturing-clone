import { Button, Flex, Typography } from 'antd';
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { DIMENSIONS_COLUMNS } from '../../features/dimensions/columns';
import { AddDimensionModal } from '../../features/dimensions/components/modals';
import { IDimension } from '../../features/dimensions/models';
import {
  useCreateDimensionMutation,
  useDeleteDimensionMutation,
  useGetValumeTypeListQuery,
  useUpdateDimensionMutation,
} from '../../features/dimensions/services';
import { Filter } from '../../shared/components/filter';
import { ReusableTable } from '../../shared/components/table';
import { useFilter } from '../../shared/hooks';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const DimensionsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addDimension] = useCreateDimensionMutation();
  const [updateDimension] = useUpdateDimensionMutation();
  const { debouncedValue, from_date, to_date, handleRangeChange, handleChangeInput } = useFilter();
  const [deleteDimension] = useDeleteDimensionMutation();
  const [id, setId] = useState<string>('');
  const { data, isLoading, refetch } = useGetValumeTypeListQuery(
    Object.assign({ keyword: debouncedValue }, from_date && to_date ? { from_date, to_date } : {}),

    { refetchOnMountOrArgChange: true },
  );
  const handleDeleteDimension = (id: string) => {
    deleteDimension({ id }).then(refetch);
  };

  const handleCreateCategory = (values: any) => {
    if (!id) return addDimension(values).then(handleCloseModal).then(refetch);
    updateDimension({ ...values, id })
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
        <Title level={2}>O'LCHOV BIRLIKLARI RO'YXATI</Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>
      <Filter handleInputChange={handleChangeInput} handleRangeChange={handleRangeChange} />
      <ReusableTable<IDimension>
        onEdit={handleEditCategory}
        onDelete={handleDeleteDimension}
        loading={isLoading}
        dataSource={data?.data}
        columns={DIMENSIONS_COLUMNS}
      />

      {isModalOpen &&
        createPortal(
          <AddDimensionModal
            open={isModalOpen}
            id={id}
            title="O'LCHOV BIRLIGI QO'SHISH"
            onSubmit={handleCreateCategory}
            onCancel={handleCancelModal}
          />,
          document.body,
        )}
    </Flex>
  );
};
