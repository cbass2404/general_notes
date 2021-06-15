# Parcel Bundler TS Setup

```
$ npm install -g parcel-bundler
```

For documentation go to [parcelJS](https://parceljs.org/)

1. Setup index.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Maps</title>
    </head>
    <body>
        <script src="./src/index.ts"></script>
    </body>
</html>
```

2. In the specified directory path create your fileName.ts file

3. In your terminal, main directory enter the following command:

```
$ parcel index.html
```

4. Open your browser and navigate to the specified port (usually localhost:1234)
