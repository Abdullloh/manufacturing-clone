import { Button, Flex, Select, Typography } from 'antd';
import { FC, useState } from 'react';
import { PRODUCT_COLUMNS } from '../../features/products/columns';
import { AddProductModal, ShowQrCodeModal } from '../../features/products/components/modals';
import { IProduct } from '../../features/products/models';
import { useCreateProductMutation, useGetProductsQuery } from '../../features/products/services';
import { ReusableTable } from '../../shared/components/table';
import { useModal } from '../../shared/hooks/useModal';

const { Title } = Typography;

export const ProductsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addProduct] = useCreateProductMutation();
  const [type, setType] = useState<number>(2);
  const { data, isLoading } = useGetProductsQuery(type <= 1 ? { is_deleted: Boolean(type) } : {}, {
    refetchOnMountOrArgChange: true,
  });
  const [qrCodeOpen, setQrCodeOpen] = useState<boolean>(false);

  const [id, setId] = useState<string>('');

  const handleAddProduct = (values: IProduct) => {
    addProduct(values).then(({ data }) => {
      handleCloseModal();
      setId(data.id);
      setQrCodeOpen(true);
    });
  };

  const handleSelectType = (e: any) => {
    setType(e);
  };

  const handlePrintQrCode = () => {
    window.print();
    setQrCodeOpen(false);
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>Mahsulotlar ruyhati </Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>
      <Flex style={{ marginBottom: 10 }} justify="flex-end">
        <Select
          onChange={handleSelectType}
          defaultValue={2}
          options={[
            { label: 'Barcha mahsulotlar', value: 2 },
            { label: 'Chiqib ketgan mahsulotlar', value: 1 },
            { label: 'Kirib kegan mahsulotlar', value: 0 },
          ]}
        />
      </Flex>

      <ReusableTable
        onDelete={() => {}}
        onEdit={() => {}}
        loading={isLoading}
        dataSource={data}
        columns={PRODUCT_COLUMNS}
      />
      {/* <Table loading={isLoading} dataSource={data} columns={PRODUCT_COLUMNS} /> */}

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
