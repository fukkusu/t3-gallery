import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { images } from "~/server/db/schema";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 40 } })
    .middleware(async ({ req }) => {
      const user = auth();
      if (!user.userId) throw new Error("Unauthorized");

      // const fullUserData = await clerkClient.users.getUser(user.userId);

      // if (fullUserData?.privateMetadata?.["can-upload"] !== true)
      //   throw new Error("User Does Not Have Upload Permissions");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: metadata.userId,
      });

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
