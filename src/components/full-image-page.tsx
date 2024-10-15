import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);
    return (
        <div className="flex w-full h-full m-0 bg-white/80 text-sky-800">
            <div className="flex flex-shrink justify-center items-center w-4/5">
                <img src={image.url} className="flex-shrink object-contain" />
            </div>
            <div className="flex flex-col flex-shrink-0 border-l-pink-200 p-2">
                <div className="text-xl font-bold">{image.name}</div>
            </div>
        </div>
    );
}
