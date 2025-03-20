/* eslint-disable react/prop-types */
export default function CitiesHome({name, img}) {
  return (
    <div>
      <div className="flex justify-center items-center mt-[8rem]">
        <div className="max-w-[720px] mx-auto">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56">
              <img
                src={img}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center mb-2">
                <p className="block font-rale antialiased font-medium leading-relaxed text-2xl text-blue-gray-900">
                  {name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
