#User
npx sequelize model:generate --name User --attributes name:STRING,slug:STRING,email:STRING,password:STRING,phone:STRING,cpf:INTEGER,birt_date:DATEONLY,gender:STRING,type_user:STRING

# Adress
npx sequelize model:generate --name Adress --attributes id_user:INTEGER,title:STRING,street:STRING,number:STRING,complement:STRING,district:STRING,zip_code:INTEGER,city:STRING,country:STRING,shipping_contact_name:STRING,shipping_contact_phone:STRING

#Category
npx sequelize model:generate --name Category --attributes title:STRING,description:STRING

#Company
npx sequelize model:generate --name Company --attributes corporate_name:STRING,commercial_name:STRING,cnpj:STRING,email:STRING,phone:STRING,slogan:STRING

#Courier
npx sequelize model:generate --name Courier --attributes title:STRING

#OrderStatus
npx sequelize model:generate --name OrderStatus --attributes title:STRING

#PaymentMethod 
npx sequelize model:generate --name PaymentMethod --attributes title:STRING

#ProductStatus
npx sequelize model:generate --name ProductStatus --attributes title:STRING

#RatingSystem
npx sequelize model:generate --name RatingSystem --attributes title:STRING

#Tag
npx sequelize model:generate --name Tag --attributes title:STRING

#TypeProduct
npx sequelize model:generate --name TypeProduct --attributes title:STRING,description:STRING

#Order
npx sequelize model:generate --name Order --attributes id_user:INTEGER,id_status:INTEGER,date_order:DATE,price:DECIMAL,descouint:DECIMAL,price_payment:DECIMAL,id_payment_method:INTEGER,payment_status:STRING,id_adress:INTEGER,id_courier:INTEGER,delivery_time:INTEGER,delivery_price:DECIMAL

#Product
npx sequelize model:generate --name Product --attributes title:STRING,slug:STRING,price:DECIMAL,promotional_price_status:BOOLEAN,promotional_price:DECIMAL,brand:STRING,year:INTEGER,id_type_product:INTEGER,plataform:STRING,short_description:STRING,full_description:STRING,id_rating_system:INTEGER,id_product_status:INTEGER,weight:DECIMAL,formart:INTEGER,length:DECIMAL,width:DECIMAL,diameter:DECIMAL

#OrderProducts
npx sequelize model:generate --name OrderProducts --attributes id_order:INTEGER,id_product:INTEGER

#ProductCategory
npx sequelize model:generate --name ProductCategory --attributes id_product:INTEGER,id_category:INTEGER

#TagProduct
npx sequelize model:generate --name TagProduct --attributes id_product:INTEGER,id_tag:INTEGER

#ProductImage
npx sequelize model:generate --name ProductImage --attributes id_product:INTEGER,file:BLOB,file_original_name:STRING,file_ext:STRING



