import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc}) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex flex-col w-1/3 items-center">
            <img src={image.url} alt={image.name} />
            <div className="text-l">{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

