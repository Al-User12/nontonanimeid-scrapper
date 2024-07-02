import { JSDOM } from 'jsdom';

export function parseAnimeUpdates(html: string) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const animeUpdates: any[] = [];

  const articles = document.querySelectorAll('article.animeseries');
  articles.forEach((element) => {
    const title = element.querySelector('h3.title span')?.textContent || '';
    const link = element.querySelector('a')?.getAttribute('href') || '';
    const episode = element.querySelector('span.types.episodes')?.textContent || '';
    const imageUrl = element.querySelector('img')?.getAttribute('src') || '';

    animeUpdates.push({
      title,
      link,
      episode,
      imageUrl,
    });
  });

  return animeUpdates;
}