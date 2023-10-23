type PriceProps = {
  value: number
  currency?: string
}

const Price = (props: PriceProps) => (
  <>{ toCurrency(props.value, props.currency) }</>
);

const toCurrency = (value?: number, currency?: string) => (
  (value || '--').toLocaleString(document.documentElement.getAttribute('lang')!, {
    style: 'currency',
    currency: currency || 'USD'
  })
);

export { toCurrency };
export default Price;