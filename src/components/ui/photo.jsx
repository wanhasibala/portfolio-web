export default function Photos({ src, alt }) {
  return (
    <>
        <img src={src} alt={alt} className="object-cover w-photo-width  aspect-[16/9]" />
    </>
  );
}
