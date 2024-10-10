import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);
    return (
        <div className="flex w-full h-full m-0 bg-white/80 text-sky-800">
            <div className="flex flex-shrink justify-center items-center">
                <img src={image.url} className="object-contain" />
            </div>
            <div className="flex flex-col shrink-0 border-l-zinc-400">
                <div className="text-xl font-bold">{image.name}</div>
            </div>
        </div>
    );
}
