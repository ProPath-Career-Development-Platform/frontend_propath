// src/utils/auth.js
import { jwtDecode } from "jwt-decode";

export function isTokenExpired(token) {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
    } catch (error) {
        return true; // Treat token as expired if decoding fails
    }
}

export function getJobRole() {
    const token = localStorage.getItem('token'); // Adjust if the token is stored elsewhere
    if (token && !isTokenExpired(token)) {
        try {
            const decoded = jwtDecode(token);
            return decoded.role; // Assuming `role` is the key for job role in the token payload
        } catch (error) {
            return null; // Return null if there's an error decoding the token
        }
    }
    return null; // Return null if token is invalid or expired
}

export function getUserId() {
    const token = localStorage.getItem('token'); // Adjust if the token is stored elsewhere
    if (token && !isTokenExpired(token)) {
        try {
            const decoded = jwtDecode(token);
            return decoded.user_id; // Assuming `id` is the key for user ID in the token payload
        } catch (error) {
            return null; // Return null if there's an error decoding the token
        }
    }
    return null; // Return null if token is invalid or expired
}

export function isAuthenticated() {
    const token = localStorage.getItem('token'); // Adjust if the token is stored elsewhere
    return token && !isTokenExpired(token);
}
