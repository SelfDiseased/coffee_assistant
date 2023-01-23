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
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com%2Fwhat-is-espresso-765702&psig=AOvVaw3XxQAyHhMOud5Q5GTjvIZX&ust=1674578014637000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiiq6-P3vwCFQAAAAAdAAAAABAE',
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
