import FullPageImageView from "~/common/full-page-image-view";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id");

  return (
    <div className="h-full">
      <FullPageImageView photoId={photoId} />
    </div>
  );
}
