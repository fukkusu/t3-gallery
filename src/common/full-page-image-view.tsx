import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export async function FullPageImageView(props: { photoId: string }) {
    const idAsNumber = Number(props.photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id");

    const image = await getImage(idAsNumber);

    const uploaderInfo = await clerkClient.users.getUser(image.userId);


    return (
        <div className="flex w-full h-full min-w-0 m-0">
            <div className="flex flex-shrink justify-center items-center w-4/5">
                <img src={image.url} className="flex-shrink object-contain" />
            </div>

            <div className="flex flex-col flex-shrink-0">
                <div className="text-lg font-bold border-b p-2">{image.name}</div>
                <div className="p-2"><span>Uploaded by: </span><span>{uploaderInfo.fullName}</span></div>
                <div className="p-2"><span>Created on: </span><span>{new Date(image.createdAt).toLocaleDateString()}</span></div>
                <form
                    action={async () => {
                        "use server";

                        await deleteImage(idAsNumber);
                    }}
                >
                    <Button type="submit" variant="destructive">
                        Delete
                    </Button>
                </form>
            </div >
        </div >
    );
}
