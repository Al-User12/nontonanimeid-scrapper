import { Hono } from 'hono';
import { registerRoutes } from './routes';

const app = new Hono();

registerRoutes(app);

app.fire();

export default app;