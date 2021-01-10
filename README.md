# dev

Prerequisite: 
- Have a kafka server running on 'localhost:9092'

Start the producer:
``` sh
yarn start:dev
```

Start the  2 consumers:
``` sh
yarn start:dev consumer
```

``` sh
yarn start:dev consumer
```

Create some job:
```sh
curl -L https://goo.gl/S1Dc3R | bash -s 5 "localhost:3000"
```