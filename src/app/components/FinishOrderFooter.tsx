"use client";

export function FinishOrderFooter() {
  return (
    <div className="absolute bottom-0 border w-full h-16 flex items-center justify-between pr-5 pl-5">
      <div className="flex items-center gap-2">
       <b>Total: </b><p>R$0.00</p>
      </div>
      <button className="bg-red-600 p-2 text-white w-28 rounded">
        Continuar
      </button>
    </div>
  );
}
