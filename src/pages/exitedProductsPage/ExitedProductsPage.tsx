import { Button, Flex, Table, Typography } from 'antd';
import { FC, useMemo, useState } from 'react';
import { EXITED_PRODUCT_COLUMNS } from '../../features/products/columns/exited-product.columns';
import { AddProductModal } from '../../features/products/components/modals';
import { IProduct } from '../../features/products/models';
import {
  useCreateProductMutation,
  useGetExitedProductsQuery,
  useGetProductsExcelMutation,
} from '../../features/products/services';
import { Filter } from '../../shared/components/filter';
import { useFiles, useFilter, useModal } from '../../shared/hooks';

const { Title } = Typography;

export const ExitedProductsPage: FC = () => {
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
  const { data, isLoading } = useGetExitedProductsQuery(queryArgs, {
    refetchOnMountOrArgChange: true,
  });
  const { handleDownloadExcel } = useFiles(useGetProductsExcelMutation, queryArgs);
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
      <Table loading={isLoading} dataSource={data?.data} columns={EXITED_PRODUCT_COLUMNS} />

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
