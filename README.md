# HOW-TO: run

```
npm i
npm run container
```

Attention: the `npm i` command will go into the `container`, `cart` and `products` SUB-FOLDERs, and do `npm i` there too!  See topmost `package.json` file for details.

## ATTENTION: Bug - workaround

After starting up the web-server, open browser tabs for:

* http://localhost:3000
* http://localhost:8000
* http://localhost:8001
* You have to reload the above 3 pages - in order - for you to see something.

Not sure why, initial load of webpage shows empty content.

# HOW-TO: run SUB-module "cart"

```
chdir cart
npm i
npm run start
npm run dev
```

# HOW-TO: run SUB-module "products"

Same as for `cart` SUB-Folder.

The End.