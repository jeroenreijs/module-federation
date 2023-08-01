# Module Federation

## How to use

Run the following commands in the root directory.

```bash
npm i
npm start
```

There is one app "to rule them all"

- `main`: http://localhost:3001

Both `pages` and `pagebuilder` are independently deployed apps:

- `pages`: http://localhost:3002
- `pagebuilder`: http://localhost:3003

Then there is one shared package that all packages make use of, this holds the navigation:

- `common`

Check out this link below for more examples:

[https://github.com/module-federation/module-federation-examples](https://github.com/module-federation/module-federation-examples)
