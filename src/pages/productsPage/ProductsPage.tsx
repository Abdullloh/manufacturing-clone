import { Button, Flex, Table, Typography } from 'antd';
import { FC, useMemo, useState } from 'react';
import { PRODUCT_COLUMNS } from '../../features/products/columns';
import { AddProductModal, ShowQrCodeModal } from '../../features/products/components/modals';
import { IProduct } from '../../features/products/models';
import {
  useCreateProductMutation,
  useGetProductsExcelMutation,
  useGetProductsQuery,
} from '../../features/products/services';
import { Filter } from '../../shared/components/filter';
import { useFiles, useFilter } from '../../shared/hooks';
import { useModal } from '../../shared/hooks/useModal';

const { Title } = Typography;

export const ProductsPage: FC = () => {
  const { isModalOpen, handleCloseModal } = useModal();
  const [addProduct] = useCreateProductMutation();
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
  const { handleDownloadExcel } = useFiles(useGetProductsExcelMutation, queryArgs);
  const { data, isLoading } = useGetProductsQuery(queryArgs, { refetchOnMountOrArgChange: true });
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
        <Button type="primary" onClick={handleDownloadExcel}>
          Excel yuklash
        </Button>
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
