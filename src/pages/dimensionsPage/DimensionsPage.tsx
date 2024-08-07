import { Button, Flex, Typography } from 'antd';
import { FC } from 'react';
import { DIMENSIONS_COLUMNS } from '../../features/dimensions/columns';
import { AddDimensionModal } from '../../features/dimensions/components/modals';
import { IDimension } from '../../features/dimensions/models';
import {
  useCreateDimensionMutation,
  useDeleteDimensionMutation,
  useGetValumeTypeListQuery,
} from '../../features/dimensions/services';
import { Filter } from '../../shared/components/filter';
import { ReusableTable } from '../../shared/components/table';
import { useFilter } from '../../shared/hooks';
import { useModal } from '../../shared/hooks/useModal';
const { Title } = Typography;

export const DimensionsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addDimension] = useCreateDimensionMutation();
  const { debouncedValue, from_date, to_date, handleRangeChange, handleChangeInput } = useFilter();
  const [deleteDimension] = useDeleteDimensionMutation();
  const { data, isLoading, refetch } = useGetValumeTypeListQuery(
    { keyword: debouncedValue, from_date, to_date },
    { refetchOnMountOrArgChange: true },
  );
  const handleDeleteDimension = (id: string) => {
    deleteDimension({ id }).then(refetch);
  };

  const handleCreateCategory = (values: any) => {
    console.log(values);

    addDimension(values).then(handleCloseModal).then(refetch);
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
        onEdit={() => {}}
        onDelete={handleDeleteDimension}
        loading={isLoading}
        dataSource={data}
        columns={DIMENSIONS_COLUMNS}
      />

      <AddDimensionModal
        open={isModalOpen}
        title="O'LCHOV BIRLIGI QO'SHISH"
        onSubmit={handleCreateCategory}
        onOk={() => {}}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
