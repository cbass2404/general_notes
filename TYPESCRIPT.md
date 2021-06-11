### A repository containing many examples of how to appropriately use Typescript.

---

_To get started:_

```
$ npm install -dev--save lite-server
```

_To start your live server for seeing updates to index.html and the app.js file use the command (Don't forget to open the console):_

```
$ npm start
```

_To have a file watched and auto compiled on save use:_

```
$ tsc fileName.js -w
```

### tsconfig.json instructions

```
$ tsc --init
```

_To have the entire project watched for changes use:_

```
$ tsc -w
```

> Initialized the tsconfig.json file. Further, you can add 'include', 'exclude', 'files' to customize what you are directing the tsc compiler to handle.

_Example:_

```json
{
    "compilerOptions": {
        "standardKey": "standardValues"
    },
    "exclude": [
        "excluded",
        "**.dev.ts"
        "**/node_modules"
        // node_modules is included by default
    ],
    "include": [
        "app.ts",
        "../folderName"
    ],
    "files": [
        "../component/app.ts"
    ]
}
```

-   The compiler options are many and most can be ignored but some are important to know:

-   Target specifies the type of javascript to compile.

```json
{
    "compilerOptions": {
        "target": "es6"
    }
}
```

-   Lib is an option that lets you specify which library files to include.

```json
{
    "compilerOptions": {
        "lib": ["DOM", "ES6", "DOM.Iterable", "ScriptHost"]
    }
}
```

_Note: the above example is the default if you target es6 for the compiler making typing it out redundant._

-   allowJs and checkJs are used to error check vanilla JS files next to typescript files. you may need to tweak the exclude option to keep it from causing errors between them.

```json
{
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true
    }
}
```

-   jsx is used to enable react type typescript files to preserve the integrity of the structure.

```json
{
    "compilerOptions": {
        "jsx": "preserve"
    }
}
```

-   sourceMap is a roadmap of the compiling process

```json
{
    "compilerOptions": {
        "sourceMap": true
    }
}
```

-   outDir and rootDir are used to specify where the source and compiled files are stored. Specifying the rootDir option prevents typescript from compiling files outside of the parameters you specify.

```json
{
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    }
}
```

-   noEmit will make it check your files without compiling them

```json
{
    "compilerOptions": {
        "noEmit": true
    }
}
```

-   downlevelIterantion should only be used if you are using loops and the compiled code behaves like it shouldn't.

```json
{
    "compilerOptions": {
        "downlevelIteration": true
    }
}
```

-   noEmitOnError prevents it from compiling a JS file if there is an error.

```json
{
    "compilerOptions": {
        "noEmitOnError": true
    }
}
```

-   strict sets all strict rules at the same time.

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```
