Feature to buy items has been added

Task4
1. Pipe for product component price and name
2. Change result type of ProductService getProducts method on promise
3. Add custom orderBy pipe

Task5
1. Path 'product-list' has been added as a default path
2. Routing for products also added
    User can open one product ('product/:productID') and see feedback for it (now feedbacks for all products are the same)
3. Admin module has been added
    User will be redirect for login (canLoad guard), if he still is logout.
    After login user can see 'products' (same with 'produst-list'), 'product/add' add new product, 'product/edit/productID' edit info about existing product and 'cart' watch list of purchases
    ProductFormComponent is used to add and edit component. It uses ProductResolveGuard to get product.

Task6
1. Backend has been done with json server
2. Http service has been added
