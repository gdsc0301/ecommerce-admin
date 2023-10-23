'use client'
import useSWR from "swr";

import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect } from "react";

import { useSelector } from "react-redux";
import { AddAPhoto, ArrowBack, Delete, Save } from "@mui/icons-material";

import { RootState, useAppDispatch } from "../../store";
import Products from "../models/Products";
import { addProductImage, removeProductImage, setLoading, setProduct, setProductField, setProductNewImage } from "../slices/Page";

import { _e } from "@/app/helpers/Dict";

import Loading from "../../loading";


const ProductPage = ({params}: { params: { slug: string }}) => {
  const router = useRouter();

  const appDispatch = useAppDispatch();
  const { newImage, product, loading } = useSelector((state: RootState) => state.productPage);

  const { data } = useSWR(`${Products.API_PRODUCTS}/${params.slug}`, () => Products.getWith(parseInt(params.slug)));

  useEffect(() => {
    if(data){
      appDispatch(setProduct((data)));
    }
  }, [appDispatch, data]);

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    appDispatch(setProductField({field: e.target.name as keyof typeof data, value: e.target.value}));
  }

  const save = () => {
    appDispatch(setLoading(true));
    Products.update(product).then(updatedProduct => {
      appDispatch(setProduct(updatedProduct));
      router.back();
      
      appDispatch(setLoading(false));
    })
  }

  return (
    (!product) 
    ? <Loading />
    : (
      <>
        <nav className="w-full mb-4">
          <Button
            variant="flat"
            size="sm"
            onClick={() => router.back()}>
              <ArrowBack fontSize="small" /> <_e>Back</_e>
            </Button>
        </nav>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="images grid gap-4">
            <div className="grid gap-4">
              <div className="thumbnail relative w-full h-[272px] object-contain rounded-xl overflow-hidden">
                {
                  product.thumbnail
                    ? <Image src={product.thumbnail} alt={product.title} className="object-cover" loading="lazy" fill />
                    : <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-xl">
                        <span className="text-gray-400 text-6xl">?</span>
                      </div>
                }
              </div>
              <Input type="text" label="Thumbnail" name="thumbnail" onChange={handleFieldChange} value={product.thumbnail} />
            </div>
    
            <Input
              type="text"
              label="Image URL"
              value={newImage}
              onChange={(e) => appDispatch(setProductNewImage(e.target.value))}
              endContent={(
                <Button
                  color="secondary"
                  className="min-w-0"
                  onClick={() => appDispatch(addProductImage(newImage))}
                  >
                  <AddAPhoto />
                </Button>
              )}
            />
            <div className="images grid gap-4 grid-cols-2 lg:grid-cols-3">
              {product.images?.map((image, index) => (
                <div key={index} className="relative block w-full h-36 object-cover rounded-xl overflow-hidden">
                  <Image src={image} className="object-cover" alt="" fill />
                  <Button
                    className="absolute top-0 right-0 min-w-0 min-h-0"
                    color="danger"
                    size="sm"
                    onClick={() => appDispatch(removeProductImage(image))}>
                      <Delete />
                    </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="meta flex flex-col gap-4">
            <Input type="text" label="Title" name="title" onChange={handleFieldChange} value={product.title} autoFocus />
            <Input type="text" label="Description" name="description" onChange={handleFieldChange} value={product.description} />
            <div className="grid gap-4 grid-cols-2">
              <Input type="number" label="Price" name="price" onChange={handleFieldChange} value={product.price + ''} startContent='$' />
              <Input type="number" label="Discount Percentage" name="discountPercentage" onChange={handleFieldChange} value={product.discountPercentage + ''} endContent='%' />
            </div>
            <Input type="number" label="Rating" name="rating" onChange={handleFieldChange} value={product.rating + ''} />
            <Input type="number" label="Stock" name="stock" onChange={handleFieldChange} value={product.stock + ''} endContent='un' />
            <Input type="text" label="Brand" name="brand" onChange={handleFieldChange} value={product.brand} />
            <Input type="text" label="Category" name="category" onChange={handleFieldChange} value={product.category} />

            <Button onClick={save} className="mt-8" color="primary" isLoading={loading}><_e>Save</_e><Save /></Button>
          </div>
        </div>
      </>
    )
  )
}

export default ProductPage;