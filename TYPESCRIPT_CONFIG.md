Common TypeScript compiler and tsconfig options
You can store the TS compiler configuration in the file called "tsconfig.json". You’ll usually add this file to the root directory of your project, together with the "package.json".

When you launch the compiler, it reads the "tsconfig.json" from the folder you launched it from, to get the instructions about how to compile your project (e.g., which source files to compile, where to store the output, etc).

The compiler reads the "tsconfig.json" from the folder where you run it. Also, you can tell the compiler where to look for the config using the "-p" option:

tsc -p tsconfig.server.json
The structure of the "tsconfig.json" looks like this:

{
"compilerOptions": {
The options from the "Compiler Options" doc(https://www.typescriptlang.org/docs/handbook/compiler-options.html), like:
"target": "es6",
"outDir": "dist"
}
Other options, like:
"files": [],
"include": [],
"exclude": []
}
Now, I’d like to explain the most common compiler/tsconfig options:

"target": "es6"
This is the version of ECMAScript you would like to compile your code to.

Common values: ES5, ES6/ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, ESNext

The ESNext option targets the latest supported ES proposed features according to the “tc39 / proposals” document: https://github.com/tc39/proposals

Choose this option based on the environment you would like to run your code in. For example, if you are targeting very old browsers, you might want to choose “ES5”. If you are going to run your code in Node 12.10, you can set the target to “ES2019”, because according to https://node.green website ES2019 is supported by this version of Node.

"lib": ["dom", "dom.iterable", "esnext"]
This is the list of library files you would like to include during the compilation. Basically, the library files tell the compiler which features you can use in your TypeScript code. For example, there is a library file called “DOM”. This file tells the compiler how the DOM API looks. So when we use the DOM API in our TS code (e.g., document.querySelector("a")), compiler knows how to check it.

If we don’t set this option, compiler will use a default value which is based on the target you’ve chosen (e.g., for ES6 this is "DOM,ES6,DOM.Iterable,ScriptHost").

Sometimes, you would want to tweak this option, such that you can use some feature in your TS code.

"strict": true
Enables all strict type checking options, like noImplicitAny, noImplicitThis, alwaysStrict, strictBindCallApply, strictNullChecks, strictFunctionTypes, strictPropertyInitialization. I suggest to enable this option in order to improve the type safety of your code.

"module": "commonjs"
This option sets the module system that will be used in the compiled (.JS) files. You should choose the module system that is supported by the environment where your code will run. For example, Node.js uses CommonJS.

If you’d like to compile your code for the browser, you’d have to combine the "module" option with the "outFile" option. The "outFile" option tells the compiler to bundle all your code into a single file, which you can include into an HTML file using a <script> tag. The "outFile" option can be used only with AMD or SystemJS module systems. So, if you use the "outFile" option, you should set the "module" option to either "amd" or "system". And in order to use the compiled JS file in an HTML file, you should set up a corresponding module loader, like https://requirejs.org/ or https://github.com/systemjs/systemjs. Anyway, instead of using the "outFile" option, I would recommend using TypeScript together with webpack to bundle your code: https://webpack.js.org/guides/typescript/. And, for REAL projects, it would be even better if you use a framework, like Create React App(https://create-react-app.dev/) or Next.js(https://nextjs.org/). We will use Next.js later in this course.

"moduleResolution": "node"
This option defines how the compiler resolves modules - how it looks at the module import statements - how it decides what should be imported given an import statement, like "import a from 'moduleA'". The value "node" tells the compiler to mimic the Node.js module resolution strategy. At the moment (December 2019) there are only 2 values: "node" and "classic". Classic is deprecated and it’s there only for backwards compatibility.

"esModuleInterop": true
This option allows us to import default from commonjs modules which don’t have a default export (modules which didn’t export the "default" property), like React, as if they have it. For example, in TypeScript, before, we used to import React like this:

import \* as React from 'react'
Having this option enabled, we can import React like this:

import React from 'react'
Later in this course you’ll find the lecture about this option.

"jsx": "preserve"
We use this option to tell the compiler how to transform the JSX code. "preserve" leaves JSX as is in the compiled files, while the "react" option turns JSX into the React API calls (e.g., React.createElement('div')).

Usually, we use preserve in order to leave the JSX transformation to a different tool in our build chain (e.g., Babel).

"skipLibCheck": true
This option tells the compiler whether to type check the declaration(\*.d.ts) files (yours and the ones from the third party packages) in your project.

The idea behind this option is to reduce the compile time of a project, by skipping the type checking of the declarations which are already tested by their authors and are known to work correctly.

Also, it might happen that you use a few packages whose type definitions are incompatible. Or, you’re importing a package that was built using a tsconfig which is less strict than yours (e.g., your config has the "strict" option enabled, while the other config has it disabled). In these cases the compiler will produce errors while type checking those packages.

With this option enabled the compiler won’t go deep into checking the types of the third party packages, but it will still check our code against the type definitions provided by these packages.

I have published a detailed article about this option on my website: TypeScript: the skipLibCheck Option Explained. Please have a look at it for a more detailed explanation and a few examples.

"files": ["./file1.ts", "./file2.d.ts", …]
We use this option to list the files which the compiler should always include in the compilation. The files included using this option are included regardless of the "exclude" option.

"include": ["src/**/*"]
We use this option to list the files we’d like to be compiled. While the "files" option requires relative or absolute paths to the files, the "include" option allows glob-like patterns, like:

"\*\*" - any subdirectory

"\*" - any file name

"?" - a character followed by the question mark becomes optional (e.g., "src/\*.tsx?")

"exclude": ["node_modules", "**/*/*.test.ts"]
This option excludes the files from the compilation. It accepts the same patterns as the "include" option. You can use this option to filter the files specified using the "include" option. The "exclude" option doesn’t affect the "files" option.

Usually, you’d like to exclude node_modules, test files, and the compilation output directory.

If you omit this option, the compiler will exclude the folder specified using the "outDir" option.

If you won’t specify both options, "files" and "include", the compiler will compile all the TS files from the root directory and any subdirectory excluding the files specified using the "exclude" option.
