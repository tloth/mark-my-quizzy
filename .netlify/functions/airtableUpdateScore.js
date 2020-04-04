const { config } = require('dotenv');
config();
const Airtable = require('airtable');

var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appvXxiTEwZwrbroU'
);

const recordId = 'recanP6EYqyiX2K8D'; //passed in somehow
const score = 45; //passed in somehow

exports.handler = function(event, context, callback) {
  base('Spring quiz answers').update(
    recordId,
    {
      score,
    },
    function(err, record) {
      if (err) {
        console.error('Error in updateScore handler: ', err);
        return;
      }
      console.log('Score updated in Airtable to: ', record.get('score'));
    }
  );
};
