# Faker Package

```
$ npm install faker
```

[Faker Documentation](https://www.npmjs.com/package/faker)

Random data generator for test purposes.

# Setup

```javascript
import faker from 'faker';

export class User {
    name: string;
    locations: {
        lat: number,
        lng: number,
    };

    constructor() {
        this.name = faker.name.firstName();
        this.locations = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
}
```
