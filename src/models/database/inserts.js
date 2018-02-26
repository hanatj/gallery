const faker = require('faker');

const randomName = () => faker.name.findName(); // Rowan Nikolaus
const randomEmail = () => faker.internet.email(); // Kassandra.Haley@erich.biz
const randomProductName = () => faker.commerce.productName();
const randomWord = () => faker.lorem.word();
const randomText = () => faker.lorem.sentence();
const randomCity = () => faker.address.city();
const randomCountry = () => faker.address.country();
const randomStreetAddress = () => faker.address.streetAddress();
let temp1 = '';
let temp2 = '';
let temp3 = '';
const slugName = name => {
  return name.toLowerCase().replace(/-|\s/g,'');
};
const sql = `
            INSERT INTO photos (photo_id, photo_name, photo_slug,photo_url, extension) VALUES
            (1, 'T-Shirts', '${slugName('T-Shirts')}', 'https://www.kaft.com/resources-3.02.41/images/product_group-basictshirt.png', 'png' ),
            (2, 'Sweat Shirts', '${slugName('Sweat Shirts')}', 'https://www.kaft.com/resources-3.02.41/images/product_group-sweatshirt.png', 'png' ),
            (3, 'Bag', '${slugName('Bag')}', 'https://www.kaft.com/resources-3.02.41/images/product_group-bag.png', 'png' ),
            (4, 'Posters', '${slugName('Posters')}', 'https://www.kaft.com/resources-3.02.41/images/product_group-poster.png', 'png' ),
            (5, 'White T-Shirt', '${slugName('White T-Shirt')}', 'https://www.kaft.com/static/images/cache/626/tisort_emphaty_2398_626_626.jpg', 'jpg' ),
            (6, 'Black T-Shirt', '${slugName('Black T-Shirt')}', 'https://www.kaft.com/static/images/cache/626/tisort_hata_4505_626_626.jpg', 'jpg' ),
            (7, 'Designer', '${slugName('Designer')}', 'https://www.shareicon.net/data/256x256/2016/07/05/791214_man_512x512.png', 'png' ),
            (8, 'Customer', '${slugName('Cus')}', 'https://www.shareicon.net/data/256x256/2016/07/05/791218_man_512x512.png', 'png' ),
            (9, 'Hoodie', '${slugName('Hoodie')}', 'https://www.kaft.com/resources-3.02.41/images/product_group-hoodie.png', 'png' ),
            (10, 'Hoodie For Women', '${slugName('Hoodie For Women')}', 'https://www.kaft.com/static/images/hoodie/0424_1.jpg', 'jpg' ),
            (11, 'Cover', '${slugName('Cover')}', 'http://cdn.nocamels.com/wp-content/uploads/2015/11/1200px-London_Thames_Sunset_panorama_-_Feb_2008-996x446.jpg', 'jpg' ),
            (12, 'Poster-1', '${slugName('Poster-1')}', 'https://www.kaft.com/static/images/cache/626/poster_forestguards_3860_626_626.jpg', 'jpg' ),
            (13, 'Bag-1', '${slugName('Bag-1')}', 'https://www.kaft.com/static/images/bag/0640_1.jpg', 'jpg' );

            INSERT INTO users(id, user_name, neckName, user_email, user_password, user_role,
              avatar_id, cover_id, mobile, country, city, address, balance) VALUES
            (1, '${temp3 = randomName()}', '${temp3}', '${randomEmail()}',
            '$2a$10$varrgIxFvYO5gXwN2YNyAuAq2RlsNormYnd609S4jnZOE3ISE7qri', 'Designer', 7, 11,
            '0000000', '${randomCountry()}', '${randomCity()}', '${randomStreetAddress()}', 2000),
            (2, '${temp3 = randomName()}','${temp3}', '${randomEmail()}',
            '$2a$10$varrgIxFvYO5gXwN2YNyAuAq2RlsNormYnd609S4jnZOE3ISE7qri' ,'Customer', 8, 11,
            '1000000',' ${randomCountry()}', '${randomCity()}', '${randomStreetAddress()}', 1000);

            INSERT INTO brand(brand_id, brand_name, brand_slug) VALUES
            (1, 'American Apparel', '${slugName('American Apparel')}'),
            (2, 'Canvas', '${slugName('Canvas')}'),
            (3, 'LA Apparel',' ${slugName('LA Apparel')}'),
            (4, 'Next Level', '${slugName('Next Level')}');

            INSERT INTO product_category(product_category_id, product_category_slug,
             product_category_name, photo_id) VALUES
             (1, 'men', 'Men', 9),
             (2, 'women', 'Women', 5),
             (3, 'accessories', 'Accessories', 3);

            INSERT INTO product(product_id, product_slug, product_name,
              photo_id, product_category_id) VALUES
            (1, '${slugName('T-Shirts')}', 'T-Shirts', 6, 1),
            (2, '${slugName('Hoodie')}', 'Hoodie', 9, 1),
            (3, '${slugName('SweatShirts')}', 'SweatShirts', 2, 1 ),
            (4, '${slugName('T-Shirts')}', 'T-Shirts', 5, 2),
            (5, '${slugName('Hoodie')}', 'Hoodie', 10, 2),
            (6, '${slugName('SweatShirts')}', 'SweatShirts', 2, 2 ),
            (7, '${slugName('Bags')}', 'Bags', 3, 3 ),
            (8, '${slugName('Accessories')}', 'Accessories', 4, 3 );

          INSERT INTO design_category(design_category_id, design_category_slug,
            design_category_name) VALUES
            (1, '${slugName('Action')}', 'Action'),
            (2, '${slugName('Anime')}', 'Anime'),
            (3, '${slugName('Sport')}', 'Sport');

          INSERT INTO design(design_id, user_id, design_name, design_slug, main_item,
             description, design_category_id, commission,commission_fixed) VALUES
             (1, 1, '${temp1 = randomWord()}',' ${slugName(temp1)}', 1, '${randomText()}',
             1,5, true),
             (2, 1, '${temp1 = randomWord()}', '${slugName(temp1)}', 2, '${randomText()}',
             2,5, true),
             (3, 1, '${temp1 = randomWord()}', '${slugName(temp1)}', 3, '${randomText()}',
             3,5, false);

          INSERT INTO item(item_id, product_id, item_name, item_slug, brand_id,
             design_id, product_rate_no, product_rate_avarage, photo_id, cost, state)
             VALUES
             (1, 1, '${temp2 = randomProductName()}', '${slugName(temp2)}', 1, 1,
             4, 4, 6, 20, 'In-Progress'),
             (2, 4, '${temp2 = randomProductName()}', '${slugName(temp2)}', 1, 2, 4,
             4, 5, 22, 'In-Progress'),
             (3, 8, '${temp2 = randomProductName()}', '${slugName(temp2)}', 4, 3, 3,
             4, 12, 22, 'In-Progress'),
             (4, 8, '${temp2 = randomProductName()}', '${slugName(temp2)}', 4, 1, 3,
              3, 13, 25, 'In-Progress'),
             (5, 6, '${temp2 = randomProductName()}', '${slugName(temp2)}', 2, 2, 3,
             3, 2, 30, 'In-Progress');

         INSERT INTO item_attribute(item_attribute_id, item_id, attribute) VALUES
         (1, 1, '{"size":["L","XL","XXL","XXXL"], "color":["#ffff", "#0000", "#32563"]}'),
         (2, 2, '{"size":["L","XL","XXL","XXXL"], "color":["#ffff", "#0000", "#32563"]}');

         INSERT INTO variation(variation_id, item_id, variation) VALUES
         (1, 1, '{"size": "L", "color":"#ffff", "cost":"20", "photo": "5", "stock": "10"}'),
         (2, 1, '{"size": "XL", "color":"#0000", "cost":"20", "photo": "6", "stock": "10"}'),
         (3, 1, '{"size": "XXL", "color":"#0000", "cost":"20", "photo": "6", "stock": "0"}'),
         (4, 2, '{"size": "XL", "color":"#ffff", "cost":"10", "photo": "5", "stock": "20"}'),
         (5, 2, '{"size": "XXL", "color":"#32563", "cost":"20", "photo": "1", "stock": "20"}'),
         (6, 3, '{"size": "XXL", "color":"#ffff", "cost":"20", "photo": "5", "stock": "0"}');

         INSERT INTO review(review_id, comment, rate, user_id, item_id) VALUES
         (1, '${randomText()}', 4, 2, 1),
         (2, '${randomText()}', 3, 2, 2),
         (3, '${randomText()}', 2, 2, 3),
         (4, '${randomText()}', 5, 2, 4),
         (5, '${randomText()}', 4, 2, 5);

         INSERT INTO review_photos(review_photos_id, review_id, photo_id) VALUES
         (1, 1, 1),
         (2, 1, 2);

         INSERT INTO tag(tag_id, tag_name) VALUES
         (1, '${randomWord()}'),
         (2, '${randomWord()}'),
         (3, '${randomWord()}');

         INSERT INTO item_tag(item_tag_id, item_id, tag_id) VALUES
         (1, 1, 1),
         (2, 1, 2),
         (3, 1, 3);
          `;

module.exports = sql;
