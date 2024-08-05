import { Button, Flex, Typography } from 'antd';
import { FC } from 'react';
import { DIMENSIONS_COLUMNS } from '../../features/dimensions/columns';
import { AddDimensionModal } from '../../features/dimensions/components/modals';
import { IDimension } from '../../features/dimensions/models';
import {
  useCreateDimensionMutation,
  useGetValumeTypeListQuery,
} from '../../features/dimensions/services';
import { ReusableTable } from '../../shared/components/table';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const DimensionsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addDimension] = useCreateDimensionMutation();
  const { data, isLoading, refetch } = useGetValumeTypeListQuery();

  const handleCreateCategory = (values: any) => {
    addDimension(values).then(handleCloseModal).then(refetch);
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>O'lchov birliklari ruyhati</Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <ReusableTable<IDimension>
        onEdit={() => {}}
        onDelete={() => {}}
        loading={isLoading}
        dataSource={data}
        columns={DIMENSIONS_COLUMNS}
      />

      <AddDimensionModal
        open={isModalOpen}
        title="Subkategoriya qo'shish"
        onSubmit={handleCreateCategory}
        onOk={() => {}}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
