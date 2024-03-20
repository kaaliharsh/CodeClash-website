export default function NewAlbum({ customClasses }) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4${
        customClasses ? ` ${customClasses}` : ""
      }`}
    >
      <h4 className="text-white font-permanentMarker text-xl">
        where coders clash
      </h4>
      <h4 className="text-white font-rockSalt text-xl">and champions arise</h4>
      <p className="text-fluo-green text-base">31 Hrs Offline hackathon</p>
    </div>
  );
}
