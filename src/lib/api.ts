import { API_ENDPOINTS, DEFAULT_HEADERS } from '@/config/wordpress';
import type { WordPressPost, WordPressPage, WordPressCategory, WordPressTag, WordPressMedia, WordPressForm, HeaderACF } from '@/types/wordpress';

export async function fetchPosts(params?: Record<string, string>) {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`${API_ENDPOINTS.posts}?${queryString}`, {
    headers: DEFAULT_HEADERS,
  });
  return response.json() as Promise<WordPressPost[]>;
}

export async function fetchPost(slug: string) {
  const response = await fetch(`${API_ENDPOINTS.posts}?slug=${slug}`, {
    headers: DEFAULT_HEADERS,
  });
  const posts = await response.json() as WordPressPost[];
  return posts[0];
}

export async function fetchPages(params?: Record<string, string>) {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`${API_ENDPOINTS.pages}?${queryString}`, {
    headers: DEFAULT_HEADERS,
  });
  return response.json() as Promise<WordPressPage[]>;
}

export async function fetchPage(slug: string) {
  const response = await fetch(`${API_ENDPOINTS.pages}?slug=${slug}`, {
    headers: DEFAULT_HEADERS,
  });
  const pages = await response.json() as WordPressPage[];
  return pages[0];
}

export async function fetchCategories() {
  const response = await fetch(API_ENDPOINTS.categories, {
    headers: DEFAULT_HEADERS,
  });
  return response.json() as Promise<WordPressCategory[]>;
}

export async function fetchTags() {
  const response = await fetch(API_ENDPOINTS.tags, {
    headers: DEFAULT_HEADERS,
  });
  return response.json() as Promise<WordPressTag[]>;
}

export async function fetchMedia(id: number) {
  const response = await fetch(`${API_ENDPOINTS.media}/${id}`, {
    headers: DEFAULT_HEADERS,
  });
  return response.json() as Promise<WordPressMedia>;
}

export async function fetchForm(id: number) {
  const response = await fetch(`${API_ENDPOINTS.forms}/${id}`, {
    headers: DEFAULT_HEADERS,
  });
  return response.json() as Promise<WordPressForm>;
}

export async function submitForm(formId: number, data: Record<string, any>) {
  const response = await fetch(`${API_ENDPOINTS.forms}/${formId}/submit`, {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function fetchHeaderMenu(): Promise<HeaderACF | null> {
  const response = await fetch(`${API_ENDPOINTS.menu}?slug=main-menu&acf_format=standard`, {
    headers: DEFAULT_HEADERS,
  });
  const data = await response.json();
  if (!data || !data.length) return null;
  return data[0].acf as HeaderACF;
} 