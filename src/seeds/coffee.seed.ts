import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Coffee } from '@entities/coffee.entity';
import { CreateCoffeeDto } from '@dtos/coffee/create-coffee.dto';

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
    },
  ]);

  private async seedTable(
    connection: Connection,
    values: any,
    className: any,
    updateAnyway = false,
  ) {
    try {
      const itemsFromDb: any = await connection.getRepository(className).find();
      const newItems = updateAnyway
        ? values
        : values.filter(
            (val) => !itemsFromDb.map((item) => item.id).includes(val.id),
          );
      console.log(newItems);

      await connection.createEntityManager().save(className, newItems);
    } catch (err) {
      throw err;
    }
  }

  async run(factory: Factory, connection: Connection): Promise<void> {
    try {
      await this.seedTable(connection, this.coffees, Coffee);
    } catch (err) {
      console.error(err.message);
    }
  }
}
