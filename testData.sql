INSERT INTO customers (customer_name, customer_pw, createdAt, updatedAt) VALUES ("briant", "b123", now(), now());
INSERT INTO customers (customer_name, customer_pw, createdAt, updatedAt) VALUES ("jeff", "j123", now(), now());
INSERT INTO customers (customer_name, customer_pw, createdAt, updatedAt) VALUES ("wheatley", "w123", now(), now());
INSERT INTO payfroms (bank_name, createdAt, updatedAt) VALUES ("Bank of America NA", now(), now());
INSERT INTO payfroms (bank_name, createdAt, updatedAt) VALUES ("Wells Fargo Bank NA", now(), now());
INSERT INTO payfroms (bank_name, createdAt, updatedAt) VALUES ("JPM Chase NA", now(), now());
INSERT INTO payfroms (bank_name, createdAt, updatedAt) VALUES ("Suntrust Bank NA", now(), now());
INSERT INTO paytos (vendor_name, createdAt, updatedAt) VALUES ("Verizon", now(), now());
INSERT INTO paytos (vendor_name, createdAt, updatedAt) VALUES ("FPL", now(), now());
INSERT INTO paytos (vendor_name, createdAt, updatedAt) VALUES ("Comcast", now(), now());
INSERT INTO paytos (vendor_name, createdAt, updatedAt) VALUES ("Ally Car Loan", now(), now());
INSERT INTO paytos (vendor_name, createdAt, updatedAt) VALUES ("NetFlix", now(), now());
INSERT INTO paytos (vendor_name, createdAt, updatedAt) VALUES ("Spotify", now(), now());
INSERT INTO paytos (vendor_name, createdAt, updatedAt) VALUES ("Amazon Prime", now(), now());
#records cust ID = 1
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (1, 10.00, "90123", "80123", "CA", "2017-01-15", 1, 7, now(), now());
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (1, 20.00, "90124", "80124", "CA", "2017-02-15", 2, 6, now(), now());
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (1, 30.00, "90125", "80125", "CC", "2017-03-01", 3, 5, now(), now());
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (1, 40.00, "90126", "80126", "CC", "2017-04-01", 4, 4, now(), now());
#records cust ID = 2
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (2, 50.00, "90234", "80227", "CC", "2017-05-15", 4, 3, now(), now());
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (2, 60.00, "90235", "80228", "CC", "2017-06-01", 3, 2, now(), now());
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (2, 70.00, "90236", "80229", "CA", "2017-07-15", 2, 5, now(), now());
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (2, 80.00, "90237", "80220", "O", "2017-08-01", 2, 7, now(), now());
#records cust ID = 3
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (3, 90.00, "90367", "80323", "CA", "2017-09-01", 2, 5, now(), now());
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (3, 15.00, "90368", "80324", "CA", "2017-10-01", 1, 2, now(), now());
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (3, 25.00, "90369", "80325", "CA", "2017-11-15", 4, 4, now(), now());
INSERT INTO records (customer_id, amount_due, customer_acct, vend_acct, cust_acct_type, pmt_date, bank_id, vendor_id, createdAt, updatedAt) VALUES (3, 35.00, "90360", "80326", "O", "2017-12-15", 3, 3, now(), now());
