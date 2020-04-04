const { config } = require('dotenv');
config();
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: process.env.AIRTABLE_API_URL,
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base('appvXxiTEwZwrbroU');

exports.handler = function(event, context, callback) {
  const allScores = [];

  base('Spring quiz answers')
    .select({
      view: 'Grid view',
      fields: ['teamname', 'score'],
      sort: [{ field: 'score', direction: 'desc' }],
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          allScores.push(record);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(allScores),
        });
      }
    );
};
