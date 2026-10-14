import type { APIRoute } from 'astro';
import { collections, navigation } from '../data/site';
import { path } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const routes = ['', ...navigation.map((item) => item.slug), ...collections.map((collection) => `flowers/${collection.slug}`)];
  const urls = routes.map((route) => `<url><loc>${new URL(path(route), site).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
