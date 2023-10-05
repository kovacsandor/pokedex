import { json } from 'body-parser';
import express from 'express';
import { HandleErrorMiddleware } from '../middlewares';
import { CreateFavouriteRoute, ListFavouritesRoute, SearchPokemonRoute } from '../routes';

export const app = express();

app.use(json());
app.use(CreateFavouriteRoute);
app.use(ListFavouritesRoute);
app.use(SearchPokemonRoute);
app.use(HandleErrorMiddleware);
