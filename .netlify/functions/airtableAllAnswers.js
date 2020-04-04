const { config } = require('dotenv');
config();
const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appvXxiTEwZwrbroU'
);

exports.handler = function(event, context, callback) {
  const allAnswers = [];
  base('Spring quiz answers')
    .select({
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          allAnswers.push(record);
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
          body: JSON.stringify(allAnswers),
        });
      }
    );
};
