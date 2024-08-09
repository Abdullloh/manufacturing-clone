import { Flex, Table, Typography } from 'antd';
import { FC, useState } from 'react';
import { PRODUCT_COLUMNS } from '../../features/products/columns';
import { AddProductModal, ShowQrCodeModal } from '../../features/products/components/modals';
import { IProduct } from '../../features/products/models';
import {
  useCreateProductMutation,
  useGetExitedProductsQuery,
} from '../../features/products/services';
import { Filter } from '../../shared/components/filter';
import { useFilter, useModal } from '../../shared/hooks';

const { Title } = Typography;

export const ExitedProductsPage: FC = () => {
  const { isModalOpen, handleCloseModal } = useModal();
  const [addProduct] = useCreateProductMutation();
  const { debouncedValue, from_date, to_date, handleRangeChange, handleChangeInput } = useFilter();
  const { data, isLoading } = useGetExitedProductsQuery(
    Object.assign(
      { keyword: debouncedValue, is_deleted: true },
      from_date && to_date ? { from_date, to_date } : {},
    ),

    { refetchOnMountOrArgChange: true },
  );
  const [qrCodeOpen, setQrCodeOpen] = useState<boolean>(false);

  const [id, setId] = useState<string>('');

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
      </Flex>
      <Filter handleInputChange={handleChangeInput} handleRangeChange={handleRangeChange} />
      <Table loading={isLoading} dataSource={data?.data} columns={PRODUCT_COLUMNS} />

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
