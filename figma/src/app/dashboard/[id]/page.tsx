type ParamsType = Promise<{ id: string }>;
export default async function Page({ params }: { params: ParamsType }) {
  const { id } = await params;

  const session = await auth();

  return (
    <Room>
        <Canvas></Canvas>
    </Room>
  )
}
