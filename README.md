 # Setting up Database

 Login in the MySOL database Using Shell

 ```shell
    $ mysql -u root -p
 ```

 Do the following as root:

```sql
    CREATE DATABASE shopdb;
    CREATE USER shopper IDENTIFIED WITH mysql_native_password BY 'shoppass';
    GRANT  ALL PRIVILEGES ON shopdb.* TO shopper;
    FLUSH PRIVILEGES;
```