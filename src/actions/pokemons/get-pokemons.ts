import { pokeApi } from '../../config/api/pokeApi';
import type { Pokemon } from '../../domain/entities/pokemon';
import type {
	PokeAPIPaginatedResponse,
	PokeAPIPokemon
} from '../../infrastructure/interfaces/pokepi.interfaces';
import { PokemonMapper } from '../../infrastructure/mappers/pokemon.mapper';

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

		const pokemonsPromises = pokeApiPokemons.map(item =>
			PokemonMapper.pokeApiPokemonToEntity(item.data)
		);

		return await Promise.all(pokemonsPromises);
	} catch (error) {
		throw new Error('Error getting pokemons');
	}
};
