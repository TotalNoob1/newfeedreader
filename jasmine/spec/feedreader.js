/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         it('have URLs', function(){
           for(x = 0; x < allFeeds.length; x++){
             expect(allFeeds[x].url).toBeDefined();
             expect(allFeeds[x].url).not.toBe("");
           }
         });
         it('have names', function(){
           for(x = 0; x < allFeeds.length; x++){
             expect(allFeeds[x].name).toBeDefined();
             expect(allFeeds[x].name).not.toBe("");
           }
         });
    });
    describe('The menu', function(){
      it('is hidden be default',function () {
        expect(document.body.classList.value).toContain('menu-hidden');
      });
      it('is shown when clicked',function () {
        document.getElementsByClassName('icon-list')[0].click();//this click opens the menu
        expect(document.body.classList.value).not.toContain('menu-hidden');

      });
      it('and when clicked again',function () {
        document.getElementsByClassName('icon-list')[0].click();//this click closes the menu
        expect(document.body.classList.value).toContain('menu-hidden');
      })

    });


    describe('Intitial Entries',function () {
      beforeEach(function (done) {
        loadFeed(0,done);
      });
      it('has more entries then 0',function () {
        const feed = $('.feed .entry');
        expect(feed.length).toBeGreaterThan(0);//checks how many children there are
      });
    });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection',function () {
    let oldfeed;
    let newfeed;

    beforeEach(function (done) {
      loadFeed(0, function () {
        oldfeed = $('.feed')[0].innerHTML;

        loadFeed(1, function () {
           newfeed = $('.feed')[0].innerHTML;//Gets the feed after it loaded
           done();

        });
      });
    });
    it('to be loaded',function () {
      expect(newfeed).not.toBe(oldfeed);
    });
  });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
