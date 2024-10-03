import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/aRfQoGrTqkRIz1x4F3GqUEXcNnD4wylBMujpIYCQHe1zk2f8",
  "https://utfs.io/f/aRfQoGrTqkRIY4srwVq0Q9Uzdgbq23lsiLEt7OKWZhmAFSju",
  "https://utfs.io/f/aRfQoGrTqkRIQOUpqfV4uUvPqpzNRS8kJ3E7cfOTF01C2htX",
  "https://utfs.io/f/aRfQoGrTqkRILWi1OQ9oMnPj0HqOe6xDBcCyufKQlhJIWrRk",
  "https://utfs.io/f/aRfQoGrTqkRI4zrySnAHWgbYV2wMZpAKhE8JvBRSj1lPrQ75",
  "https://utfs.io/f/aRfQoGrTqkRITdvwIC7BG9YMHi4FVcLzROtxSP5jdXNa2CAq",
  "https://utfs.io/f/aRfQoGrTqkRIkVKiCWn1TDgapKrOWY762fFo9E5ZVlhwBHQC",
  "https://utfs.io/f/aRfQoGrTqkRIuNCXalE5fgsMzJipPcwFYByhnLGQ6C4WOeo1",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-72  p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}

