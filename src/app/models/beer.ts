import { Amount } from './amount';
import { Ingredients } from './ingredients';

export class Beer {
    id: number;
    name: string;
    description: string;
    firstbrewed: string;
    tagline: string;
    image_url: string;
    abv: number;
    brewers_tips: string;
    food_pairing: string[];
    boil_volume: Amount;
    ingredients: Ingredients;


}
