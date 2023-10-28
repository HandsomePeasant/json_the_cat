// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('Returns an error message (err is not null), while returning no description (desc is null) when an invalid or non-existent breed is passed in', (done) => {
    fetchBreedDescription('xx', (err, desc) => {
      // this scenario should return an error (and rather than accounting for every error message we simply assert that err is not null)
      assert.notEqual(err, null);

      const expectedDesc = null;

      assert.equal(expectedDesc, desc);

      done();
    });
  });
});