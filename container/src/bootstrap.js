import { mount as mountProducts } from 'products/ProductIndex'
import { mount as mountMyCart } from 'cart/myCart'

mountProducts(document.querySelector('#product-list'))
mountMyCart(document.querySelector('#cart-items'))

console.log("Container");