/**
 * Merge class names conditionally (lightweight clsx replacement)
 * @param {...(string|undefined|null|false)} classes
 * @returns {string}
 */
export const cn = (...classes) => classes.filter(Boolean).join(" ");

/**
 * Debounce a function
 * @param {Function} fn
 * @param {number} delay
 */
export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Format phone number for display
 * @param {string} raw
 */
export const formatPhone = (raw) => raw.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

/**
 * Scroll to element by id
 * @param {string} id
 */
export const scrollToSection = (id) => {
  const el = document.getElementById(id.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
