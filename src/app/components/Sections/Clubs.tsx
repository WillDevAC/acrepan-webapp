import { ProductList } from "@/types/product";

import api from "@/services/api";
import { Clubs } from "@/types/plans";
import { GetClubs } from "../Get/GetClubs";

export async function Clubs() {
  const response = await api.get("/plan");
  const clubs: Clubs = response.data;

  return (
    <>
      <div className="flex w-full p-5 flex-col gap-2">
        <h1 className="font-bold">Pode entrar e aproveitar</h1>
      </div>
      <div className="flex w-full pr-5 pl-5">
        <GetClubs plans={clubs.plans} count={clubs.count} />
      </div>
    </>
  );
}
