This is my backend advanced project.Here simply I do flight booking app

-`validator` - Here I have used JOI validation . to prevent the mistakes from users's inputs and more.

-`routes` - Express.Routes() -> one routes file has used here ...it can be differ from controllers 

-`controller` - all the functionalities combined and code here .import schema which belongs to Joi import and execute the validation via that. and here I have used "https-status-codes" used for path specified . here basically in whole project I have been used -->normal nodejs type ...always use *require("any")* instead of import stuff.


-`middleware` - here i have used lots of middlewares like multer , 


-`config` - WINSTON packages used here to log my error and infos warning by "combined.log" 

-`repositories` →all logics here which intreact DB with queries and all the raw queries and ORM prisma too

-`services` → all business logics here

-`utils` → here Helper methods contained!

-`prisma`  → gernrator would be clinet and provider is MYSQL and i gave my localhost userwith port number and DB too..


-`swagger` → here i have used SWAGGER fro API documentaion 