const Vendor = require('../models/vendorModel');

// GET all vendors
exports.getVendors = async (req, res) => {
    try {
        const vendors = await Vendor.getAll();
        res.status(200).json(vendors);
    } catch (error) {
        console.error("Error fetching vendors:", error);
        res.status(500).json({ message: 'Server error fetching vendors' });
    }
};

// POST a new vendor
exports.createVendor = async (req, res) => {
    try {
        const { name, email, phone, company } = req.body;
        
        // Basic validation
        if (!name || !email || !phone || !company) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        await Vendor.create({ name, email, phone, company });
        res.status(201).json({ message: 'Vendor added successfully!' });
    } catch (error) {
        console.error("Error creating vendor:", error);
        res.status(500).json({ message: 'Server error creating vendor' });
    }
};