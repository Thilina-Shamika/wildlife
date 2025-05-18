export const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';
export const WORDPRESS_AUTH_TOKEN = process.env.WORDPRESS_AUTH_TOKEN;

export const API_ENDPOINTS = {
  posts: `${WORDPRESS_API_URL}/posts`,
  pages: `${WORDPRESS_API_URL}/pages`,
  categories: `${WORDPRESS_API_URL}/categories`,
  tags: `${WORDPRESS_API_URL}/tags`,
  media: `${WORDPRESS_API_URL}/media`,
  acf: `${WORDPRESS_API_URL}/acf/v3`,
  forms: `${WORDPRESS_API_URL}/wpforms/v1/forms`,
} as const;

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  ...(WORDPRESS_AUTH_TOKEN && {
    Authorization: `Bearer ${WORDPRESS_AUTH_TOKEN}`,
  }),
}; 