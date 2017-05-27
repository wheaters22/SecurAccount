#USE secureaccount_db;
SELECT * FROM customers; 
SELECT * FROM payfroms; 
SELECT * FROM paytos;
SELECT * FROM records;
SELECT customers.customer_name, payfroms.bank_name, records.customer_acct,
	records.cust_acct_type, paytos.vendor_name, records.vend_acct,
	records.amount_due, records.pmt_date
FROM (((records
INNER JOIN customers ON records.customer_id = customers.id)
INNER JOIN payfroms ON records.bank_id = payfroms.id)
INNER JOIN paytos ON records.vendor_id = paytos.id);
