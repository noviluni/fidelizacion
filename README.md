# Loyalty React component 

## Build project

To build the app (front and api):

```bash
docker-compose build
```

## Run project

To run it:

```bash
docker-compose up
```

And now open [http://localhost:3000](http://localhost:3000).

## Development

##### Front
In the project directory, you can run:

```bash
npm start
```

to run the React component in develop mode. Now you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.

When finishing development, don't forget to execute:

```bash
npm run build
```

or 

```bash
yarn build
```

to generate the new build.


##### Api

To start the python webserver first you need to install hug:

```bash
pip3 install hug
```

and then you can execute:

```bash
hug -f src_api/api.py
```

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
