import { PokemonServiceOpenapi } from "../openapi";
import { PokemonServiceListFavouritesPathType } from "./pokemon-service-list-favourites-path.type";

export type PokemonServiceListFavouritesMethodType = keyof Pick<
  PokemonServiceOpenapi.paths[PokemonServiceListFavouritesPathType],
  "get"
>;
