import { Button, Flex, Typography } from 'antd';
import { FC } from 'react';
import { MODEL_TYPES_COLUMNS } from '../../features/modelTypes/columns';
import { AddModalTypeModal } from '../../features/modelTypes/components/modals';
import { IModelType } from '../../features/modelTypes/models';
import {
  useCreateModelTypeMutation,
  useGetModelTypeListQuery,
} from '../../features/modelTypes/services';
import { ReusableTable } from '../../shared/components/table';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const ModelsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addModalType] = useCreateModelTypeMutation();
  const { data, isLoading, refetch } = useGetModelTypeListQuery();

  const handleAddModelType = (values: any) => {
    addModalType({ model_name: values.model_name }).then(handleCloseModal).then(refetch);
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>Model turlari ruyhati</Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <ReusableTable<IModelType>
        onEdit={() => {}}
        onDelete={() => {}}
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
