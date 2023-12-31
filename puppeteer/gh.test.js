let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  }, 10000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  }, 10000);
});

describe("Other page github", () => {

  test("Github Actions Title", async() => {
    await page.goto("https://github.com/features/actions"); 
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual( 
      "Automate your workflow from idea to production"
    ); 

  }, 10000);

  test("Github Actions Title", async() => {
    await page.goto("https://github.com/features/securitys"); 
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual( 
      "Security at every step"
    ); 

  }, 10000);

  test("Github Actions Title", async() => {
    await page.goto("https://github.com/features/issues"); 
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual( 
      "Project planning for developers"
    ); 

  }, 10000);

});
