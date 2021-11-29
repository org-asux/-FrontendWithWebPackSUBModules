# HOW-TO: run

* STEP 1: `npm i` from ROOT folder.
* STEP 2: follow instructions for `cart` and `products` subfolder (see sub-sections below)
* STEP 3: `npm run container`

> NOTE: the `npm i` command will automatically go into the `container`, `cart` and `products` SUB-FOLDERs, and do `npm i` there too!  See topmost `package.json` file for details on `install` command.

## HOW-TO: run SUB-module "cart"

```
chdir cart
npm i
npm run start
npm run dev
```

## HOW-TO: run SUB-module "products"

Same as for `cart` SUB-Folder (in preceding section above).

## ATTENTION: Bug - workaround

After starting up the web-server, open a *SINGLE* browser tab, for following URLS -- IN SEQUENCE:

* http://localhost:3000
* http://localhost:8000
* http://localhost:8001
* NOTE: Load the above 3 pages - in order.  Then, use browser-back button - for you to see something in 1st link.

Not sure why, that the initial load of 1st webpage shows empty content.

The End.