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
    <div className={`ring-4 ring-muted relative w-full h-[300px] rounded-lg overflow-hidden flex items-center justify-center ${className}`}>
      {type === "image" ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          className="object-cover object-center"
        />
      ) : (
        <video
          src={src}
          className="w-full h-full object-cover object-center max-w-full max-h-full"
          controls
        />
      )}
    </div>
  );
}

