import groupWith from 'ramda/src/groupWith';
import quizConfig from '../quizConfig';

export const dataFormatter = (data) => {
  const { categoryLength, numberOfCategories } = quizConfig;
  const parsedData = data.map((rawTeamData) => {
    rawTeamData.fields.id = rawTeamData.id;
    return rawTeamData.fields;
  });

  return parsedData.map((teamData) => {
    const { id, teamname, score = undefined } = teamData;

    const questionFields = Object.keys(teamData).filter(
      (key) => !['teamname', 'score', 'id'].includes(key)
    );

    // Returns an array of separate arrays of category fields
    // eg [[a_1, a_2, a_3], [b_1, b_2, b_3]]
    const questionsByCategory = groupWith(
      (a, b) => a.split('_')[0] === b.split('_')[0],
      questionFields
    );

    //returns alphabet array with the right length based on how many categories
    const alphabetLookup = 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .slice(0, numberOfCategories);

    for (let index = 0; index < numberOfCategories; index++) {
      const categoryLetter =
        questionsByCategory[index] &&
        questionsByCategory[index][0].split('_')[0];

      const emptyCategory = [
        alphabetLookup[index], //first item is a letter to say which category it represents
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
      ];

      if (!(categoryLetter === alphabetLookup[index])) {
        questionsByCategory.splice(index, 0, emptyCategory);
      }
    }

    const answersByCategory = questionsByCategory.map((category) => {
      const categoryLetter = category[0].split('_')[0];

      // Makes sure the questions within the category are in the correct order
      const sortedQuestions = category.sort(
        (a, b) => a.split('_')[1] - b.split('_')[1]
      );

      const finalAnswers = [];
      for (let index = 0; index < categoryLength; index++) {
        const currentQuestion = `${categoryLetter}_${index + 1}`;
        sortedQuestions.includes(currentQuestion)
          ? finalAnswers.push(teamData[currentQuestion]) // get corresponding answer from the data
          : finalAnswers.push('-'); // default not answered value
      }

      return { [categoryLetter]: finalAnswers };
    });

    return {
      teamname,
      id,
      score,
      answers: answersByCategory,
    };
  });
};
