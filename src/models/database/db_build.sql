BEGIN;

DROP TABLE IF EXISTS photos,users, brand, product_category,product,design_category,design, item,attribute,item_attribute, variation,variation_attribute,review,review_photos,tag,item_tag cascade ;

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  photo_name VARCHAR NOT NULL,
  photo_slug VARCHAR UNIQUE NOT NULL,
  photo_url VARCHAR UNIQUE NOT NULL,
  extension VARCHAR NOT NULL,
  upload_date timestamp default now()
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  neckName VARCHAR UNIQUE,
  user_email VARCHAR UNIQUE NOT NULL,
  user_password VARCHAR NOT NULL,
  user_role VARCHAR NOT NULL,
  avatar_id INTEGER REFERENCES photos(photo_id),
  cover_id INTEGER REFERENCES photos(photo_id),
  mobile VARCHAR,
  country VARCHAR,
  city VARCHAR,
  address VARCHAR,
  balance VARCHAR,
  join_date timestamp default now()
);

CREATE TABLE brand (
  brand_id SERIAL PRIMARY KEY,
  brand_slug VARCHAR UNIQUE NOT NULL,
  brand_name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE product_category (
  product_category_id SERIAL PRIMARY KEY,
  product_category_slug VARCHAR UNIQUE NOT NULL,
  product_category_name VARCHAR UNIQUE NOT NULL,
  photo_id INTEGER REFERENCES photos(photo_id)
);

CREATE TABLE product (
  product_id SERIAL PRIMARY KEY,
  product_slug VARCHAR NOT NULL,
  product_name VARCHAR NOT NULL,
  photo_id INTEGER REFERENCES photos(photo_id),
  product_category_id INTEGER REFERENCES product_category(product_category_id),
  UNIQUE (product_category_id, product_slug),
  UNIQUE (product_category_id, product_name)
);

CREATE TABLE design_category (
  design_category_id SERIAL PRIMARY KEY,
  design_category_slug VARCHAR UNIQUE NOT NULL,
  design_category_name VARCHAR UNIQUE NOT NULL
);
CREATE TABLE design (
  design_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  design_slug VARCHAR UNIQUE NOT NULL,
  design_name VARCHAR NOT NULL,
  main_item INTEGER,
  description VARCHAR,
  design_category_id INTEGER REFERENCES design_category(design_category_id),
  commission FLOAT default 0,
  commission_fixed BOOLEAN NOT NULL,
  design_date timestamp default now()
);


CREATE TABLE item (
  item_id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES product(product_id),
  item_slug VARCHAR UNIQUE NOT NULL,
  item_name VARCHAR NOT NULL,
  brand_id INTEGER REFERENCES brand(brand_id),
  design_id INTEGER REFERENCES design(design_id),
  product_rate_no INTEGER DEFAULT 0,
  product_rate_avarage FLOAT DEFAULT 0,
  photo_id INTEGER REFERENCES photos(photo_id),
  cost money,
  state VARCHAR NOT NULL
);

CREATE TABLE item_attribute (
  item_attribute_id SERIAL PRIMARY KEY,
  item_id INTEGER REFERENCES item(item_id),
  attribute JSON NOT NULL
);
CREATE TABLE variation (
  variation_id SERIAL PRIMARY KEY,
  item_id INTEGER REFERENCES item(item_id),
  variation JSON NOT NULL
);
CREATE TABLE review (
  review_id SERIAL PRIMARY KEY,
  comment TEXT NOT NULL,
  rate INTEGER,
  user_id INTEGER REFERENCES users(id),
  item_id INTEGER REFERENCES item(item_id)
);
CREATE TABLE review_photos (
  review_photos_id SERIAL PRIMARY KEY,
  review_id INTEGER REFERENCES review(review_id),
  photo_id INTEGER REFERENCES photos(photo_id),
  review_date timestamp default now()
);
CREATE TABLE tag (
  tag_id SERIAL PRIMARY KEY,
  tag_name VARCHAR UNIQUE NOT NULL
);
CREATE TABLE item_tag (
  item_tag_id SERIAL PRIMARY KEY,
  item_id INTEGER REFERENCES item(item_id),
  tag_id INTEGER REFERENCES tag(tag_id)
);
COMMIT ;
