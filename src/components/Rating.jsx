import Rating from '@mui/material/Rating';

function ProductRating({value}) {
  return (
    <Rating name="half-rating" size="small" readOnly defaultValue={value} precision={0.5} />
  )
}

export default ProductRating