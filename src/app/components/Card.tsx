'use client'

export function Card() {
  return (
    <div className="flex bg-white shadow-sm min-w-72 max-w-72 rounded h-72">
      <div className="flex items-center justify-center h-44 w-full bg-gray-200">
        <img src="/pao.png" className="object-contain w-full h-full p-5" />
      </div>
    </div>
  );
}