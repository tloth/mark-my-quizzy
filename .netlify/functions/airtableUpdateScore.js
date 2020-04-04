const { config } = require('dotenv');
config();
const Airtable = require('airtable');

var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appvXxiTEwZwrbroU'
);

const recordId = 'recanP6EYqyiX2K8D'; //passed in somehow
// const score = 45; //passed in somehow

exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body);
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
