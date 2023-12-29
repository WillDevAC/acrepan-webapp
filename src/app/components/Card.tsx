'use client'

export function Card() {
  return (
    <div className="flex bg-white shadow-sm min-w-72 max-w-72 rounded h-72">
      <div className="flex items-center justify-center h-44 w-full relative">
        <img src="/pao.png" className="object-contain w-full h-full p-5 mt-20 bg-white" />
        <div className="absolute flex top-0 left-0 m-3 p-1 bg-green-50 text-green-500 font-medium">
          EM DESTAQUE
        </div>
      </div>
    </div>
  );
}