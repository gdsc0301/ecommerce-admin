import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button
} from "@nextui-org/react";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";

import { addProductModalImage, closeProductModal, openProductModal, removeProductModalImage, setModalLoading, setModalProductField, setProductModalNewImage } from "../slices/Modal";
import { AddAPhoto, Delete, Save } from "@mui/icons-material";
import { __ } from "@/app/helpers/Dict";
import Image from "next/image";

import { KeyedMutator } from "swr";
import { ChangeEvent } from "react";
import Products, { Product } from "../models/Products";

import { _e } from "@/app/helpers/Dict";

const ProductModal = (props: {products: Product[] | undefined, mutator: KeyedMutator<Product[]>, loading: boolean}) => {
  const appDispatch = useAppDispatch();
  const { isOpen, product, loading, newImage } = useSelector((state: RootState) => state.productModal);

  const close = () => {
    appDispatch(setModalLoading(true));
    if(product.id) {
      Products.update(product).then((updatedItem: Product) => {
        props.mutator(
          [
            ...(props.products ? props.products.filter(item => item.id !== updatedItem.id) : []),
            updatedItem
          ]
        );

        appDispatch(setModalLoading(false));
        appDispatch(closeProductModal());
      }).catch(err => {
        console.error(err);
        
        appDispatch(setModalLoading(false));
      })
    }else {
      Products.create(product).then(updatedItem => {
        props.mutator([...props.products || [], updatedItem]);
        appDispatch(setModalLoading(false));
        appDispatch(closeProductModal());
      });
    }
  }

  const handleOpenChange = (open: boolean) => {
    appDispatch(open ? openProductModal() : closeProductModal()); 
  }

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    appDispatch(setModalProductField({field: e.target.name as keyof typeof product, value: e.target.value}));
  }
  
  return (
    <Modal isOpen={isOpen} onOpenChange={handleOpenChange} size="5xl" scrollBehavior="inside" className="max-h-[85vh]">
      <ModalContent>
        <ModalHeader>{product.id ? `Edit ${product.title}` : 'Create Product'}</ModalHeader>
        <ModalBody className="flex flex-col lg:grid gap-4 lg:grid-cols-2">
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
              <Input type="text" label="Thumbnail" name="thumbnail" onChange={handleFieldChange} value={product?.thumbnail} />
            </div>

            <Input
              type="text"
              label="Image URL"
              value={newImage}
              onChange={(e) => appDispatch(setProductModalNewImage(e.target.value))}
              endContent={(
                <Button
                  color="secondary"
                  className="min-w-0"
                  onClick={() => appDispatch(addProductModalImage(newImage))}
                  >
                  <AddAPhoto />
                </Button>
              )}
            />
            <div className="images grid gap-4 grid-cols-2 lg:grid-cols-3">
              {product?.images?.map((image, index) => (
                <div key={index} className="relative block w-full h-36 object-cover rounded-xl overflow-hidden">
                  <Image src={image} className="object-cover" alt="" fill />
                  <Button
                    className="absolute top-0 right-0 min-w-0 min-h-0"
                    color="danger"
                    size="sm"
                    onClick={() => appDispatch(removeProductModalImage(image))}>
                      <Delete />
                    </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="meta flex flex-col gap-4">
            <Input type="text" label="Title" name="title" onChange={handleFieldChange} value={product?.title} autoFocus />
            <Input type="text" label="Description" name="description" onChange={handleFieldChange} value={product?.description} />
            <div className="grid gap-4 grid-cols-2">
              <Input type="number" label="Price" name="price" onChange={handleFieldChange} value={product?.price + ''} startContent='$' />
              <Input type="number" label="Discount Percentage" name="discountPercentage" onChange={handleFieldChange} value={product?.discountPercentage + ''} endContent='%' />
            </div>
            <Input type="number" label="Rating" name="rating" onChange={handleFieldChange} value={product?.rating + ''} />
            <Input type="number" label="Stock" name="stock" onChange={handleFieldChange} value={product?.stock + ''} endContent='un' />
            <Input type="text" label="Brand" name="brand" onChange={handleFieldChange} value={product?.brand} />
            <Input type="text" label="Category" name="category" onChange={handleFieldChange} value={product?.category} />

            <Button className="mt-8" onClick={close} color="primary" variant="shadow" isLoading={loading}>
              <_e>{product ? 'Save' : 'Add'}</_e><Save />
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ProductModal;