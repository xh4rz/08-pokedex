import { pokeApi } from '../../config/api/pokeApi';
import type { Pokemon } from '../../domain/entities/pokemon';
import type {
	PokeAPIPaginatedResponse,
	PokeAPIPokemon
} from '../../infrastructure/interfaces/pokepi.interfaces';

export const getPokemons = async (
	page: number,
	limit = 20
): Promise<Pokemon[]> => {
	try {
		const url = `/pokemon?offset=${page * 10}&limit=${limit}`;

		const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

		const pokemonPrommises = data.results.map(info => {
			return pokeApi.get<PokeAPIPokemon>(info.url);
		});

		const pokeApiPokemons = await Promise.all(pokemonPrommises);

		console.log(pokeApiPokemons);

		return [];
	} catch (error) {
		throw new Error('Error getting pokemons');
	}
};
