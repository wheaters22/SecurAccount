SECURACCOUNT (securaccount.com)

Online resource to view all associated automated payments tied to your cards and bank accounts. Useful to viewing

Library to use: [https://stormpath.com/blog/build-nodejs-express-stormpath-app](https://stormpath.com/blog/build-nodejs-express-stormpath-app)

Proposed Flow:

- User signs up to create a username and password
- User inputs bank account or card number and saves to the associated bank we provide
- Enter all accounts associated with that credit card
- User can add multiple cards and multiple accounts to each card
- User can view/add/update/delete

View 1: User-Input Form – Name &amp; Password

View 2: Summary – Add a banking institution, account type and card/account number

View 3: Add any and all payment transactions associated with that banking institution &amp; payment amount

Same page views will include ability to add new bank or add new payment transaction

NOTE: WE WILL NOT PROCESS TRANSACTIONS, ONLY SAVE WHAT PAYMENTS YOU HAVE SETUP TO EACH OF YOUR ACCOUNTS. WHEN YOU LOSE A CARD OR FORGET YOUR ACCOUNT NUMBER, EASILY VIEW ALL AUTOMATED PAYMENT RECORDS.



Schema:

- Table: Customer
  - ID
  - Name
  - Password
- Table: Financial Institution
  - ID
  - Institution Name
  - Account or Card Number
  - Account Type (checking/credit/credit union, etc.)
  - Payment Date
- Table: Payee Account
  - ID
  - Bank Name/Creditor
  - Bill Amount
- Relational
  - Customer ID
  - FI ID
  - Payee ID
  - Timestamp