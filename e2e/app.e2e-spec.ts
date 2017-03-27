import { Architectnow.BeerrecipesPage } from './app.po';

describe('architectnow.beerrecipes App', () => {
  let page: Architectnow.BeerrecipesPage;

  beforeEach(() => {
    page = new Architectnow.BeerrecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
