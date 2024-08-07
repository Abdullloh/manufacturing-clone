import { Button, Flex, Typography } from 'antd';
import { FC } from 'react';
import { MODEL_TYPES_COLUMNS } from '../../features/modelTypes/columns';
import { AddModalTypeModal } from '../../features/modelTypes/components/modals';
import { IModelType } from '../../features/modelTypes/models';
import {
  useCreateModelTypeMutation,
  useDeleteModelTypeMutation,
  useGetModelTypeListQuery,
} from '../../features/modelTypes/services';
import { Filter } from '../../shared/components/filter';
import { ReusableTable } from '../../shared/components/table';
import { useFilter } from '../../shared/hooks';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const ModelsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addModalType] = useCreateModelTypeMutation();
  const { debouncedValue, from_date, to_date, handleRangeChange, handleChangeInput } = useFilter();
  const [deleteModelType] = useDeleteModelTypeMutation();
  const { data, isLoading, refetch } = useGetModelTypeListQuery(
    Object.assign({ keyword: debouncedValue }, from_date && to_date ? { from_date, to_date } : {}),
    { refetchOnMountOrArgChange: true },
  );
  const handleDeleteModelType = (id: string) => {
    deleteModelType({ id }).then(refetch);
  };

  const handleAddModelType = (values: any) => {
    addModalType({ model_name: values.model_name }).then(handleCloseModal).then(refetch);
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
        onEdit={() => {}}
        onDelete={handleDeleteModelType}
        loading={isLoading}
        dataSource={data}
        columns={MODEL_TYPES_COLUMNS}
      />

      <AddModalTypeModal
        open={isModalOpen}
        title="Model turi qo'shish"
        onSubmit={handleAddModelType}
        onOk={() => {}}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
