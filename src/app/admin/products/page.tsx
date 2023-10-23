'use client'
import { _e } from "@/app/helpers/Dict";
import ProductTable from "./components/Table";
import ProductModal from "./components/Modal";

import { useAppDispatch } from "../store";
import Products, { Product } from "./models/Products";
import useSWR from "swr";
import { Button } from "@nextui-org/react";
import { openProductModal, setProduct } from "./slices/Modal";
import { Add } from "@mui/icons-material";
import { useEffect } from "react";

const ProductsPage = () => {
  const appDispatch = useAppDispatch();
  const {data, error, isLoading, mutate} = useSWR(Products.API_PRODUCTS, Products.get);

  const handleAddProduct = () => {
    appDispatch(setProduct({} as Product));
    appDispatch(openProductModal());
  }

  useEffect(() => {
    // identify dark mode
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="mb-8 text-4xl"><_e>Products</_e></h2>
        <Button color="primary" onClick={handleAddProduct}><_e>Add Product</_e><Add /></Button>
      </div>
      <ProductTable products={data} mutator={mutate} loading={isLoading} />
      <ProductModal products={data} mutator={mutate} loading={isLoading} />
    </>
  );
}

export default ProductsPage;