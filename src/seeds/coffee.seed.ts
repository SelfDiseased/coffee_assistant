import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Coffee } from '@entities/coffee.entity';
import { CreateCoffeeDto } from '@dtos/coffee/create-coffee.dto';
import { Taste } from '@root/domain/entities/taste.entity';
import { Ingredient } from '@root/domain/entities/ingredient.entity';

export default class CreateRatecard implements Seeder {
  private coffees: Coffee[] = CreateCoffeeDto.toEntities([
    {
      name: 'espresso',
      recipe: `1. Grind your coffee beans finely. Use approximately one part coffee for every two parts of water, or about 7 grams of coffee per shot. Tamp the grounds tightly into your espresso machine’s portafilter.
        2. Put the portafilter into your espresso machine and place an espresso cup beneath the brew head. Start pulling the shot and start a timer at the same time.
        3. Allow 25 milliliters of water to flow through your grounds for 25 to 30 seconds. Stop brewing once you hit the water amount and time frame.
        4. Enjoy your short black coffee plain or with a sugar cube!`,
      strength: 7,
      volume: 0.025,
      kilocalories: 5,
      ingredients: [{ name: 'boiled water' }, { name: 'fresh coffee beans' }],
      tastes: [{ name: 'bitter' }],
      imageUrl: 'https://aeromatic.app/img/recipe/photos/1.91x1-espresso.jpg',
    },
    {
      name: 'Flat white',
      recipe: `1. Make around 35ml espresso using your coffee machine and pour into the base of your cup.
        2. Steam the milk with the steamer attachment so that it has around 1-2cm of foam on top.
        3. Hold the jug so that the spout is about 3-4cm above the cup and pour the milk in steadily.
        4. As the volume within the cup increases, bring the jug as close to the surface of the drink as possible whilst aiming to pour into the centre.
        5. Once the milk jug is almost touching the surface of the coffee, tilt the jug to speed up the rate of pour. As you accelerate, the milk will hit the back of the cup and start naturally folding in on itself to create a pattern on the top.`,
      strength: 5,
      volume: 0.025,
      kilocalories: 66,
      ingredients: [{ name: 'milk' }, { name: 'ground espresso' }],
      tastes: [{ name: 'lactic' }],
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-d8ada0f.jpg?quality=90&webp=true&resize=440,400',
    },
    {
      name: 'Cappuccino',
      recipe: `1. Make around 35ml espresso using your coffee machine and pour into the base of your cup.
        2. Steam the milk with the steamer attachment so that it has around 4-6cm of foam on top.
        3. Hold the jug so that the spout is about 3-4cm above the cup and pour the milk in steadily.
        4. As the volume within the cup increases, bring the jug as close to the surface of the drink as possible whilst aiming to pour into the centre.
        5. Once the milk jug is almost touching the surface of the coffee, tilt the jug to speed up the rate of pour. As you accelerate, the milk will hit the back of the cup and start naturally folding in on itself to create a pattern on the top.
        6. Dust the surface with a little cocoa powder if you like.`,
      strength: 6,
      volume: 0.025,
      kilocalories: 98,
      ingredients: [
        { name: 'milk' },
        { name: 'ground espresso' },
        { name: 'cocoa powder' },
      ],
      tastes: [{ name: 'creamy' }, { name: 'smooth' }, { name: 'lactic' }],
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cappucino-32dbfba.jpg?quality=90&webp=true&resize=440,400',
    },

    {
      name: 'Macchiato',
      recipe: `1. Make around 35ml espresso using your coffee machine and pour into the base of your cup.
        2. Steam the milk with the steamer attachment so that it has around 1-2cm of foam on top
        3. Spoon 2-3 teaspoons of the foam on top of the espresso (discard the rest of the milk).`,
      strength: 3,
      volume: 0.025,
      kilocalories: 35,
      ingredients: [{ name: 'milk' }, { name: 'ground espresso' }],
      tastes: [{ name: 'caramel' }, { name: 'lactic' }],
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/macchiato-027-35b22b8.jpg?quality=90&webp=true&resize=440,400',
    },

    {
      name: 'Mocha',
      recipe: `1. Make around 35ml espresso using your coffee machine and pour into the base of your cup.
        2. Add the drinking chocolate and mix well until smooth.
        3. Steam the milk with the steamer attachment so that it has around 4-6cm of foam on top.
        4. Hold the jug so that the spout is about 3-4cm above the cup and pour the milk in steadily.
        5. As the volume within the cup increases, bring the jug as close to the surface of the drink as possible whilst aiming into the centre.
        6. Once the milk jug is almost touching the surface of the coffee, tilt to speed up the rate of pour. As you accelerate, the milk will hit the back of the cup and start naturally folding in on itself to create a pattern on the top.`,
      strength: 4,
      volume: 0.025,
      kilocalories: 168,
      ingredients: [
        { name: 'milk' },
        { name: 'ground espresso' },
        { name: 'drinking chocolate' },
      ],
      tastes: [{ name: 'caramel' }, { name: 'lactic' }],
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mocha-001-8301418.jpg?quality=90&webp=true&resize=440,400',
    },

    {
      name: 'Café au lait',
      recipe: `1. Pour the hot coffee into a large mug (the mug will need to hold 130ml, plus a little foam).
        2. Pour over the steamed milk and top with a little of the foam, if you like.`,
      strength: 6,
      volume: 0.025,
      kilocalories: 83,
      ingredients: [{ name: 'steamed milk' }, { name: 'ground robusta' }],
      tastes: [{ name: 'bitter' }, { name: 'lactic' }],
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Cafe-au-lait-259a97b.png?quality=90&webp=true&resize=750,681',
    },

    {
      name: 'Cortado',
      recipe: `1. Pour the espresso into a 4-6oz heatproof glass or cup, then pour over the steamed milk.
        2. Finish with a little bit of foam on top (around the thickness of a finger).`,
      strength: 8,
      volume: 0.025,
      kilocalories: 29,
      ingredients: [{ name: 'steamed milk' }, { name: 'espresso' }],
      tastes: [{ name: 'bitter' }, { name: 'lactic' }, { name: 'strong' }],
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Cortada-2e01077.png?quality=90&webp=true&resize=750,681',
    },

    {
      name: 'Latte',
      recipe: `1. Dust off that coffee machine and learn a few barista skills to make a creamy latte.
        2. Steam the milk with the steamer attachment so that it has around 2-3cm of foam on top.
        3. Hold the jug so that the spout is about 3-4cm above the cup and pour the milk in steadily.
        4. As the volume within the cup increases, bring the jug as close to the surface of the drink as possible whilst aiming to pour into the centre.
        5. Once the milk jug is almost touching the surface of the coffee, tilt to speed up the rate of pour. As you accelerate, the milk will hit the back of the cup and start naturally folding in on itself to create a pattern on the top.`,
      strength: 2,
      volume: 0.025,
      kilocalories: 161,
      ingredients: [{ name: 'milk' }, { name: 'ground espresso' }],
      tastes: [{ name: 'lactic' }, { name: 'creamy' }, { name: 'light' }],
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/latte-e2a66d3.jpg?quality=90&webp=true&resize=440,400',
    },

    {
      name: 'Pumpkin spice latte',
      recipe: `1. Put the pumpkin purée in a large heatproof glass or mug.
        2. Stir in the spices and espresso or strong coffee.
        3. Heat the milk in a saucepan over a low heat until steaming and frothy.
        4. Pour into the glass or mug, and spoon over any froth.
        5. Stir to combine, then dust with more cinnamon or some pumpkin spice before serving.`,
      strength: 2,
      volume: 0.025,
      kilocalories: 185,
      ingredients: [
        { name: 'pumpkin purée' },
        { name: 'ground cinnamon' },
        { name: 'ground ginger' },
        { name: 'ground nutmeg' },
        { name: 'espresso' },
        { name: 'milk' },
      ],
      tastes: [{ name: 'spicy' }, { name: 'creamy' }, { name: 'pumpkin' }],
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Pumpkin-Spice-Latte-a05c0ca.jpg?quality=90&webp=true&resize=750,681',
    },

    {
      name: 'Dalgona coffee',
      recipe: `1. Whisk the coffee, sugar and 3 tbsp boiling water in a bowl for approximately 5 mins until the mixture is thick and fluffy with stiff peaks.
        2. For hot coffee, heat the milk and pour into two heatproof glasses. For cold coffee, pour the cold milk into two glasses.
        3. Divide the coffee mixture in half and spoon evenly on top of the glasses.
        4. Serve and stir thoroughly before drinking.`,
      strength: 2,
      volume: 0.025,
      kilocalories: 211,
      ingredients: [
        { name: 'milk' },
        { name: 'sugar' },
        { name: 'instant coffee' },
      ],
      tastes: [{ name: 'sweet' }, { name: 'creamy' }, { name: 'lactic' }],
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dalgona-coffee-ddfc357.jpg?quality=90&webp=true&resize=440,400',
    },
  ]);

  private async seedTable(connection: Connection, values: any) {
    try {
      await connection.query(`DELETE FROM coffees_ingredients`);
      await connection.query(`DELETE FROM coffees_tastes`);

      await connection.query(`DELETE FROM coffee`);
      await connection.query(`DELETE FROM taste`);
      await connection.query(`DELETE FROM ingredient`);

      await connection.createEntityManager().save(Coffee, values);
    } catch (err) {
      throw err;
    }
  }

  async run(factory: Factory, connection: Connection): Promise<void> {
    try {
      await this.seedTable(connection, this.coffees);
    } catch (err) {
      console.error(err.message);
    }
  }
}
