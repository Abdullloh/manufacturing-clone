import { Flex, Table, Typography } from 'antd';
import { FC, useState } from 'react';
import { PRODUCT_COLUMNS } from '../../features/products/columns';
import { AddProductModal, ShowQrCodeModal } from '../../features/products/components/modals';
import { IProduct } from '../../features/products/models';
import { useCreateProductMutation, useGetProductsQuery } from '../../features/products/services';
import { Filter } from '../../shared/components/filter';
import { useModal } from '../../shared/hooks/useModal';

const { Title } = Typography;

export const ProductsPage: FC = () => {
  const { isModalOpen, handleCloseModal } = useModal();
  const [addProduct] = useCreateProductMutation();
  const { data, isLoading } = useGetProductsQuery(
    { is_deleted: false },
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

      <Filter />

      <Table loading={isLoading} dataSource={data} columns={PRODUCT_COLUMNS} />

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
