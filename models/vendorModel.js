const db = require('../config/db');

const Vendor = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM vendors ORDER BY created_at DESC');
        return rows;
    },
    
    create: async (vendorData) => {
        const { name, email, phone, company } = vendorData;
        const [result] = await db.query(
            'INSERT INTO vendors (name, email, phone, company) VALUES (?, ?, ?, ?)',
            [name, email, phone, company]
        );
        return result;
    }
};

module.exports = Vendor;