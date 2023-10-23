import { __, _e } from "@/app/helpers/Dict";

import { Button, Pagination, Skeleton, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Delete, Edit } from "@mui/icons-material";

import Products, { Product } from "../models/Products";
import Price from "../models/Price";
import { useAppDispatch } from "../../store";

import { openProductModal, setProduct } from "../slices/Modal";
import { KeyedMutator } from "swr";
import { useMemo, useState } from "react";
import ProductFilter from "./Filter";

const ProductTable = (props: {products: Product[] | undefined, mutator: KeyedMutator<Product[]>, loading: boolean}) => {
  const appDispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  
  const rowsPerPage = 8;
  const pages = Math.ceil((props.products?.length || 0) / rowsPerPage);
  const items = useMemo(() => props.products?.slice(rowsPerPage * (page - 1), rowsPerPage * page), [props.products, page]);
    
  const deleteProduct = (id: number) => {
    Products.delete(id).then(() => {
      props.mutator(props.products?.filter((product: Product) => product.id !== id));
    })
  }

  const editProduct = (product: Product) => {
    appDispatch(setProduct(product));
    appDispatch(openProductModal());
  }

  return (
    <Table
      aria-label="Products table"
      // topContent={<ProductFilter />} // Under construction
      bottomContent={
        pages > 1 ? (
          <div className="flex justify-center">
            <Pagination
              showControls
              showShadow
              color="danger"
              page={page}
              total={pages}
              onChange={page => setPage(page)}
              />
          </div>
        ) : ''
      }
    >
      <TableHeader>
        <TableColumn><_e>Name</_e></TableColumn>
        <TableColumn><_e>Price</_e></TableColumn>
        <TableColumn><_e>Sale Discount</_e></TableColumn>
        <TableColumn><_e>Stock</_e></TableColumn>
        <TableColumn><_e>Category</_e></TableColumn>
        <TableColumn className="text-center"><_e>Actions</_e></TableColumn>
      </TableHeader>
      <TableBody emptyContent={__('No products available')}>
        {props.loading || !items ? (
          <TableRow>
            <TableCell>
              <Skeleton />
            </TableCell>
            <TableCell>
              <Skeleton />
            </TableCell>
            <TableCell>
              <Skeleton />
            </TableCell>
            <TableCell>
              <Skeleton />
            </TableCell>
            <TableCell>
              <Skeleton />
            </TableCell>
            <TableCell>
              <Skeleton />
            </TableCell>
          </TableRow>
        ) : (
          items.map((product: Product) => (
            <TableRow key={product.id}>
              <TableCell>{product.title}</TableCell>
              <TableCell><Price value={product.price} /></TableCell>
              <TableCell>{product.discountPercentage}%</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="flex justify-center">
                <Button onClick={()=> deleteProduct(product.id)} variant="light" size="sm" className="min-w-0">
                  <Delete color="error" />
                </Button>
                <Button onClick={() => editProduct(product)} variant="light" size="sm" className="min-w-0">
                  <Edit />
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
)
}

export default ProductTable;