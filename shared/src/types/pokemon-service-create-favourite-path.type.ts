import { PokemonServiceOpenapi } from "../openapi";

export type PokemonServiceCreateFavouritePathType = keyof Pick<
  PokemonServiceOpenapi.paths,
  "/api/pokemon-service/favourites"
>;
