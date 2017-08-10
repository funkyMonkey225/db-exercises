const db = require('./db');



class Customer {
    constructor(name, email, addr, password) {
        this.name = name;
        this.email = email;
        this.address = addr;
        this.password = password;
    }

    save() {
        return db.query(`
            insert into customers
            (name, email, address, password) 
            values
            ('${this.name}', '${this.email}', '${this.address}', '${this.password}')
        `);
    }

    get(id) {
        return db.one(`
            SELECT name, email, address from customers where customer_id=${id};
        `).then((result) => {
            this.name = result.name;
            this.email = result.email;
            this.address = result.address;
            return result;
        })
    }
}

module.exports = Customer;