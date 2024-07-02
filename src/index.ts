import { Hono } from 'hono';
import { registerRoutes } from './routes';
import { printFiglet } from './figlet';
const app = new Hono();

registerRoutes(app);

printFiglet('Made with Hono and Bun!');

app.fire();

console.log('📌 this is a Rest API to scrape anime list from nontonanimeid.baby and ❤️ From Al-User12 ');

export default app;