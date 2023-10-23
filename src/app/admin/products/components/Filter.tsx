import useSWR from "swr";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { Chip, Input, Select, SelectItem } from "@nextui-org/react";
import { __ } from "@/app/helpers/Dict";
import Products from "../models/Products";

const ProductFilter = () => {
  const appDispatch = useAppDispatch();
  const {data, error, isLoading, mutate} = useSWR(`${Products.API_PRODUCTS}/categories`, Products.getCategories);
  const {price} = useSelector((state: RootState) => state.productFilter);

  return (
    <div className="flex gap-2">
      {data?.length ? (
        <Select
          items={data}
          label={__('Category')}
          isMultiline
          selectionMode="multiple"
          placeholder={__('Select a Category')}
          renderValue={items => (
            <div className="flex flex-wrap gap-2">
              {items.map(item => <Chip key={item.key}>{item.textValue}</Chip>)}
            </div>
          )}
        >
          {category => (
            <SelectItem key={`category-option-${category}`} textValue={category}>{category}</SelectItem>
          )}
        </Select>
      ) : ''}
      <Input type="range" min={price?.from} max={price?.to} multiple />
    </div>
  )
}

export default ProductFilter;