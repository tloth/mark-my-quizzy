const { config } = require('dotenv');
config();
const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appvXxiTEwZwrbroU'
);

exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body);
  const recordId = body.teamId;
  base('Spring quiz answers').update(
    recordId,
    {
      score: body.teamScore,
    },
    function(err, record) {
      if (err) {
        callback('Error in updateScore handler: ', err);
        return;
      }

      callback(null, {
        body: JSON.stringify(
          'Score updated in Airtable to: ',
          record.get('score')
        ),
      });
    }
  );
};
