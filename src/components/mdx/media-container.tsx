import Image from "next/image";

interface MediaContainerProps {
  src: string;
  alt?: string;
  type?: "image" | "video";
  className?: string;
}

export function MediaContainer({
  src,
  alt = "",
  type = "image",
  className = "",
}: MediaContainerProps) {
  return (
    <div
      className={`relative flex h-75 w-full items-center justify-center overflow-hidden rounded-lg ring-4 ring-muted ${className}`}
    >
      {type === "image" ? (
        <Image src={src} alt={alt} fill unoptimized className="object-cover object-center" />
      ) : (
        <video
          src={src}
          className="h-full max-h-full w-full max-w-full object-cover object-center"
          controls
        />
      )}
    </div>
  );
}
