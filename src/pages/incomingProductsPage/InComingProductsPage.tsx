import { Button, DatePicker, Flex, Typography } from 'antd';
import { FC, useState } from 'react';
import { PRODUCT_COLUMNS } from '../../features/products/columns';
import { AddProductModal, ShowQrCodeModal } from '../../features/products/components/modals';
import { IProduct } from '../../features/products/models';
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from '../../features/products/services';
import { Filter } from '../../shared/components/filter';
import { ReusableTable } from '../../shared/components/table';
import { useFilter } from '../../shared/hooks';
import { useModal } from '../../shared/hooks/useModal';

const { Title } = Typography;
const { RangePicker } = DatePicker;

export const IncomingProductsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addProduct] = useCreateProductMutation();
  const { debouncedValue, from_date, to_date, handleRangeChange, handleChangeInput } = useFilter();
  const [deletProducs] = useDeleteProductMutation();
  const { data, isLoading, refetch } = useGetProductsQuery(
    { keyword: debouncedValue, from_date, to_date },
    { refetchOnMountOrArgChange: true },
  );
  const [qrCodeOpen, setQrCodeOpen] = useState<boolean>(false);

  const [id, setId] = useState<string>('');

  const handleDeleteProduct = (id: string) => {
    deletProducs({ id }).then(refetch);
  };

  const handleAddProduct = (values: IProduct) => {
    addProduct(values).then(({ data }) => {
      handleCloseModal();
      setId(data.id);
      setQrCodeOpen(true);
    });
  };

  const handlePrintQrCode = () => {
    window.print();
    setQrCodeOpen(false);
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>MAXSULOTLAR RO'YXATI </Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <Filter handleRangeChange={handleRangeChange} handleInputChange={handleChangeInput} />

      <ReusableTable
        onDelete={handleDeleteProduct}
        onEdit={() => {}}
        loading={isLoading}
        dataSource={data}
        columns={PRODUCT_COLUMNS}
      />

      <ShowQrCodeModal onPrintQrCode={handlePrintQrCode} open={qrCodeOpen} value={id} />
      <AddProductModal
        open={isModalOpen}
        title="Mahsulot qo'shish"
        onSubmit={handleAddProduct}
        onOk={() => {}}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
