import { useRouter } from "next/router";

const DetailProduct = () => {

  const { query } = useRouter();

  return (
    <>
      <h1>Detail Product</h1>
      <p>Product : {query.id}</p>
    </>
  )
};
export default DetailProduct;