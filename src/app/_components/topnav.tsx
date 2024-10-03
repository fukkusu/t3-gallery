import { SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs";

export function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between p-8 text-l font-semibold">
            <div>Gallery</div>
            <div className="text-xl font-bold">The cute Tamagotchi Lineup</div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </ nav>
    );
}