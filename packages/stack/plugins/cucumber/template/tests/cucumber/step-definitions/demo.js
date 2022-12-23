const { client } = require('nightwatch-api');
const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^Ich starte die App$/i, async () => {
  await client.url('http://localhost:8080');
  await client.waitForElementVisible('body', 1000);
});

Given(/^Ich oeffne das Formular zum Anlegen$/i, async () => {
  await client.waitForElementVisible('#add');
  await client.click('#add');
  await client.click('#add');
});

Given(/^Ich warte (\d+) Sekunden$/i, async (duration) => {
  await client.pause(duration);
});

Given(/^Die Liste enthaelt keinen Eintrag "([^"]*)"$/i, async (value) => {
  await client.assert.not.containsText('table', value);
});
delete When(/^Ich gebe als Titel "([^"]*)" ein$/i, async (value) => {
  await client.waitForElementVisible('input[name="title"]');
  await client.click('input[name="title"]');
  await client.clearValue('input[name="title"]');
  await client.setValue('input[name="title"]', value);
});

When(/^Ich gebe als Einheit "([^"]*)" ein$/i, async (value) => {
  await client.waitForElementVisible('input[name="unit"]');
  await client.click('input[name="unit"]');
  await client.clearValue('input[name="unit"]');
  await client.setValue('input[name="unit"]', value);
});

When(/^Ich klicke auf Speichern$/i, async () => {
  await client.waitForElementVisible('button[type="submit"]');
  await client.click('button[type="submit"]');
  await client.click('button[type="submit"]');
});

When(/^Ich bearbeite Eintrag (\d+)$/i, async (value) => {
  await client.waitForElementVisible(`button[id="edit-${value}"]`);
  await client.click(`button[id="edit-${value}"]`);
});

When(/^Ich klicke auf Löschen$/i, async () => {
  await client.waitForElementVisible(`button[id="delete"]`);
  await client.click(`button[id="delete"]`);
});

Then(/^Die Liste enthaelt einen Eintrag "([^"]*)"$/i, async (value) => {
  await client.assert.containsText('table', value);
});
