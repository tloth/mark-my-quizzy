import { dataFormatter } from '../utils';
import sampleAirtableResponse from '../sampleAirtableResponse';

describe('dataFormatter', () => {
  it('returns the data in the correct format for fully completed form', () => {
    const idealDataFormat = {
      teamname: 'Freddie',
      id: 'recdGUspZTYilfdUA',
      score: 18,
      answers: {
        a: [
          'Senegal',
          'Ontario',
          'East Germany',
          'Benny',
          'Red, White, Green',
          'Lima',
          'India',
          'France',
          'Norwegian',
          'Flemish',
        ],

        b: [
          'False Alarm, I Feel It Coming, Starboy',
          '24',
          'Men',
          'Beyoncé',
          'Ozymandas',
          'Dan Sofer',
          'True',
          'Poisoning',
          'They inspired TV shows',
          'Ed Sheeran single - You',
        ],
        c: [
          'The Breakfast Club',
          'Rapunzel 1985-1990',
          'Sex and the City',
          'The film where someone orgasms',
          'Please',
          'Stuart Little',
          'Men In Black (1997-2002)',
          'Her & also Marriage Story',
          'Ed, Edd and Eddy',
          '3',
        ],
        d: [
          'Great Expectations',
          'Hitchhikers Guide to the Galaxy',
          'Avada Kedavra',
          'Tom Hanks',
          'A Clash of Castles',
          "I'm not going to make up a name here, it's not going to go down well.",
          '37',
          'The Body',
          'Stan Lee',
          'I only came here to shitpost tbh',
        ],
        e: [
          'Born This Way',
          "Harry Potter and the Philosopher's Stone (Hermione Granger)",
          'I need',
          'to',
          'go',
          'but',
          'it',
          'was',
          'the',
          'best',
        ],
        f: [
          'quiz',
          'ever',
          'thank',
          'you',
          'bless',
          'your',
          'souls',
          'and',
          'your',
          'soles, too.',
        ],
      },
    };
    expect(dataFormatter(sampleAirtableResponse)[0]).toEqual(idealDataFormat);
  });

  it('returns the data in the correct format for incomplete form', () => {
    const idealDataFormat = {
      teamname: 'Testy',
      id: 'recobl7QPFEw9v2n5',
      score: undefined,
      answers: {
        a: ['hi', 'hey', '-', 'actually', '-', '-', '-', '-', '-', '-'],
        b: [
          '-',
          '-',
          'I want to test evertyhing',
          'Every case',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
        ],
        c: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        d: [
          'missed out a whole category there',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
          '-',
        ],
        e: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        f: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      },
    };

    expect(dataFormatter(sampleAirtableResponse)[1]).toEqual(idealDataFormat);
  });
});
