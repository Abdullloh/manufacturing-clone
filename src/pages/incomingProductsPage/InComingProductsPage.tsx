import { Button, Flex, Typography } from 'antd';
import { FC, useMemo, useState } from 'react';
import { PRODUCT_COLUMNS } from '../../features/products/columns';
import { AddProductModal, ShowQrCodeModal } from '../../features/products/components/modals';
import { IProduct } from '../../features/products/models';
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsExcelMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from '../../features/products/services';
import { Filter } from '../../shared/components/filter';
import { ReusableTable } from '../../shared/components/table';
import { useFiles, useFilter } from '../../shared/hooks';
import { useModal } from '../../shared/hooks/useModal';

const { Title } = Typography;

export const IncomingProductsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { debouncedValue, from_date, to_date, handleRangeChange, handleChangeInput } = useFilter();
  const [deletProducs] = useDeleteProductMutation();
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
  const { data, isLoading, refetch } = useGetProductsQuery(queryArgs, {
    refetchOnMountOrArgChange: true,
  });

  const { handleDownloadExcel } = useFiles(useGetProductsExcelMutation, queryArgs);
  const [qrCodeOpen, setQrCodeOpen] = useState<boolean>(false);

  const [id, setId] = useState<string>('');

  const handleDeleteProduct = (id: string) => {
    deletProducs({ id }).then(refetch);
  };

  const handleAddProduct = (values: IProduct) => {
    if (!id) {
      addProduct(values).then(({ data }) => {
        handleCloseModal();
        setId(data.id);
        refetch();
        setQrCodeOpen(true);
      });
    } else {
      updateProduct({ ...values, id }).then(({ data }) => {
        handleCloseModal();
        if (data) {
          setId(data?.id);
        }
        refetch();
        setQrCodeOpen(true);
      });
    }
  };

  const handleEditCategory = (id: string) => {
    setId(id);
    handleOpenModal();
  };

  const handleOpenQrEdit = (id: string) => {
    setId(id);
    setQrCodeOpen(true);
  };
  const handlePrintQrCode = () => {
    window.print();
    setQrCodeOpen(false);
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>MAXSULOTLAR RO'YXATI </Title>
        <Flex gap={4}>
          <Button type="primary" onClick={handleOpenModal}>
            Qo'shish
          </Button>
          <Button type="primary" onClick={handleDownloadExcel}>
            Excel yuklash
          </Button>
        </Flex>
      </Flex>

      <Filter handleRangeChange={handleRangeChange} handleInputChange={handleChangeInput} />

      <ReusableTable
        onDelete={handleDeleteProduct}
        onEdit={handleEditCategory}
        onScanShow={handleOpenQrEdit}
        loading={isLoading}
        dataSource={data?.data}
        columns={PRODUCT_COLUMNS}
        showScannerIcon
      />

      {qrCodeOpen && (
        <ShowQrCodeModal onPrintQrCode={handlePrintQrCode} open={qrCodeOpen} value={id} />
      )}
      {isModalOpen && (
        <AddProductModal
          id={id}
          open={isModalOpen}
          title="Mahsulot qo'shish"
          onSubmit={handleAddProduct}
          onOk={() => {}}
          onCancel={handleCloseModal}
        />
      )}
    </Flex>
  );
};
