import { Hono } from 'hono';
import axios from 'axios';
import { parseAnimeUpdates } from './utils';

export function registerRoutes(app: Hono) {

  app.get('/', async (c) => {
    try {
      const response = await axios.get('https://nontonanimeid.baby/');
      const html = response.data;
      const animeUpdates = parseAnimeUpdates(html);
      return c.json({
        status: 'success',
        message: 'Latest anime updates fetched successfully!',
        data: animeUpdates,
        count: animeUpdates.length,
      });
    } catch (error) {
      return c.json({ error: 'Failed to fetch anime updates' }, 500);
    }
  });
}