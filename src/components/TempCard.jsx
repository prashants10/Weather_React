/* eslint-disable react/prop-types */
function TempCard({ temperature, image, title }) {
  return (
    <div className="flex flex-col justify-between items-center border bg-white rounded-3xl p-2 h-[10rem] w-[7rem]">
      <div className="font-semibold text-lg">{title}</div>
      <div className="h-[40%]">
        <img className="h-full" src={image} />
      </div>
      <div className="font-semibold text-lg">{temperature}</div>
    </div>
  );
}
export default TempCard;
