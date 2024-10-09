"use client";

import { SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="text-l flex w-full items-center justify-between p-8 font-semibold">
      <div>Gallery</div>
      <div className="text-xl font-bold">The cute Tamagotchi Lineup</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
