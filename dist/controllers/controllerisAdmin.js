"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAdmin = (req, res, next) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Authorization token is missing or invalid.' });
    }
    if (!user.isAdmin) {
        return res.status(403).json({ message: 'You do not have permission to access this resource.' });
    }
    next();
};
exports.default = isAdmin;
