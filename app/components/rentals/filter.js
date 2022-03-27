import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      // Rewrote this so that caps sensitivity doesn't matter when searching
      rentals = rentals.filter((rental) =>
        rental.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return rentals;
  }
}
