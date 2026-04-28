import api from "./axiosInstance";

/**
 * Submit the hero contact / lead form
 * @param {Object} data - { fullName, email, phoneCode, phone, countryCode, message, acceptPolicy }
 * @returns {Promise<{ success: boolean; message: string }>}
 */
export const submitLeadForm = (data) => api.post("/contact/lead", data);

/**
 * Submit the general contact form
 * @param {Object} data - { name, email, subject, message }
 */
export const submitContactForm = (data) => api.post("/contact/general", data);

/**
 * Subscribe to newsletter
 * @param {Object} data - { email }
 */
export const subscribeNewsletter = (data) => api.post("/newsletter/subscribe", data);
