import { SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs";
import { SimpleUploadButton } from "../_components/simple-upload-button";

export function TopNav() {
  return (
    <nav className="text-l flex w-full items-center justify-between p-8 font-semibold border-b">
      <div>Gallery</div>
      <div className="text-xl text-center font-bold">The cute Tamagotchi Lineup</div>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
