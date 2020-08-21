const ACTION_DELAY = 25;

function testFall(url) {
  return (browser) => {
    console.log(url);
    try {
      browser
        .url(url)
        .pause(ACTION_DELAY)
        .waitForElementVisible('h1')
        .pause(ACTION_DELAY)
        .click('#edit-0')
        .pause(ACTION_DELAY)
        .clearValue('#edit_title')
        .pause(ACTION_DELAY)
        .setValue('#edit_title', 'Baum')
        .pause(ACTION_DELAY)
        .click('#submit')
        .pause(ACTION_DELAY)
        .click('#add')
        .pause(ACTION_DELAY)
        .setValue('#new_title', 'Äpfel')
        .pause(ACTION_DELAY)
        .setValue('#new_unit', 'Pack')
        .pause(ACTION_DELAY)
        .click('#submit')
        .pause(ACTION_DELAY)
        .click('#edit-0')
        .pause(ACTION_DELAY)
        .click('#delete')
        .pause(ACTION_DELAY)
        .click('#edit-1')
        .pause(ACTION_DELAY)
        .click('#delete')
        .pause(ACTION_DELAY)
        .click('#edit-2')
        .pause(ACTION_DELAY)
        .click('#delete')
        .pause(ACTION_DELAY)
        .click('#start')
        .pause(ACTION_DELAY)
        .end();
    } catch (e) {}
  };
}

const tests = {};
['https://github.modevel.de/poc/preact.html'].forEach((url) => {
  tests[url] = testFall(url);
});
module.exports = tests;
