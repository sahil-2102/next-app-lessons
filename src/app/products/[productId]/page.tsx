export default async function ProductById({
    params,
}: {
    params: Promise<{productId: string}>;
}
) {
    const productId = (await params).productId
  return (
    <div>Details about {productId}</div>
  )
}