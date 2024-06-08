/**
 * An array of routes that are allowed to be accessed by the user.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /dashboard.
 * @type {string[]}
 */
export const protectedRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for all API authentication routes.
 * Routes that starts with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default login redirect route after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
