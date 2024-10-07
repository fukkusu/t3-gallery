import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic"

async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col w-1/3 items-center">
          <Image src={image.url} style={{objectFit: "contain"}} width={320} height={320} alt={image.name} />
          <div className="text-l">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above!</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

