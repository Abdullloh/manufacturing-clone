import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDeleteProductMutation } from '../../features/products/services';

export const ProductDeletePage: FC = () => {
  const { id } = useParams();
  const [deleteProduct] = useDeleteProductMutation();

  useEffect(() => {
    if (id) {
      deleteProduct({ id }).then(window.close);
    }
  }, [id, deleteProduct]);

  return <div>Maxsulot uchirilmoqda</div>;
};
