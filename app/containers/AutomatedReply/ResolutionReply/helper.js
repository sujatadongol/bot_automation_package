//check if require fields are present or not
export const isProblemSolutionsAdded = problemDefinition => {
  let containsProblemSolution = true;
  problemDefinition &&
    problemDefinition.map(single => {
      if (
        single.value &&
        !(single.problemSolutions && single.problemSolutions.length > 0)
      ) {
        containsProblemSolution = false;
      }
    });
  return containsProblemSolution;
};
export const isStepAdded = problemSolutions => {
  let containsSteps = true;
  problemSolutions &&
    problemSolutions.map(single => {
      // single.steps && single.steps(singleStep)
      if (!(single.steps && single.steps.length > 0)) {
        containsSteps = false;
      }
    });
  return containsSteps;
};

// for create resolution reply
const mapSteps = steps => {
  let mappedSteps = [];
  steps && steps.map(single => mappedSteps.push(single.value));
  return mappedSteps;
};

const mapProblemSolution = problemSolutionList => {
  let mappedProblemSolution = [];
  problemSolutionList &&
    problemSolutionList.map(single =>
      mappedProblemSolution.push({
        possibleSolutionTitle: single.value,
        steps: mapSteps(single.steps),
        feedbackText: single.feedback,
      }),
    );
  return mappedProblemSolution;
};

const mapProblemDefinition = problemDefinitionList => {
  let mappedProblemDefinition = [];
  problemDefinitionList &&
    problemDefinitionList.map(
      singleProblemDefinition =>
        singleProblemDefinition.value &&
        mappedProblemDefinition.push({
          problemDefinitionTitle: singleProblemDefinition.value,
          possibleSolutions: mapProblemSolution(
            singleProblemDefinition.problemSolutions,
          ),
        }),
    );
  return mappedProblemDefinition;
};

export const mapObjToCreateResolutionReply = (
  title,
  language,
  problemDefinition,
) => {
  return {
    title: title,
    automatedReplyType: 'RESOLUTION_REPLY_TYPE',
    automatedReplyStatus: 'ACTIVE',
    language: language,
    serviceId: localStorage.getItem('serviceId'),
    resolutionReply: {
      problemDefinitions: mapProblemDefinition(problemDefinition),
      language: language,
    },
  };
};
// for create resolution reply

// for mapping fetched resolution reply
const mapFetchedSteps = steps => {
  let mappedSteps = [];
  steps &&
    steps.map(single =>
      mappedSteps.push({
        id: Math.random(),
        value: single,
      }),
    );
  return mappedSteps;
};

const mapFetchedProblemSolution = possibleSolutions => {
  let mappedSolutions = [];
  possibleSolutions &&
    possibleSolutions.map(single =>
      mappedSolutions.push({
        id: single.possibleSolutionKey,
        expand: false,
        possibleSolutionId: single.possibleSolutionId,
        value: single.possibleSolutionTitle,
        steps: mapFetchedSteps(single.steps),
        feedback: single.feedbackText,
      }),
    );
  return mappedSolutions;
};

export const mapFetchedProblemDefinition = problemDefinitions => {
  let mappedProblemDefinition = [];
  problemDefinitions &&
    problemDefinitions.map(single =>
      mappedProblemDefinition.push({
        id: single.problemDefinitionKey,
        problemDefinitionId: single.problemDefinitionId,
        serviceId: single.serviceId,
        value: single.problemDefinitionTitle,
        problemSolutions: mapFetchedProblemSolution(single.possibleSolutions),
      }),
    );
  return mappedProblemDefinition;
};
// for mapping fetched resolution reply

// for update resolution reply
const mapStepsToSave = steps => {
  let mappedSteps = [];
  steps && steps.map(single => mappedSteps.push(single.value));
  return mappedSteps;
};

const mapFetchProblemSolution = updatedSolutions => {
  let mappedSolutions = [];
  updatedSolutions &&
    updatedSolutions.map(single => {
      if (single.id.toString().includes('.')) {
        mappedSolutions.push({
          possibleSolutionTitle: single.value,
          steps: mapStepsToSave(single.steps),
          feedbackText: single.feedback,
        });
      } else {
        mappedSolutions.push({
          possibleSolutionKey: single.id,
          possibleSolutionId: single.possibleSolutionId,
          possibleSolutionTitle: single.value,
          steps: mapStepsToSave(single.steps),
          feedbackText: single.feedback,
        });
      }
    });
  if (mappedSolutions && mappedSolutions.length > 0) return mappedSolutions;
};

const mapProblemDefinitionToSave = (
  fetchedProblemDefiniton,
  problemDefinitions,
) => {
  let mappedProblemDefinitions = [];
  problemDefinitions &&
    problemDefinitions.map(single => {
      if (single.id.toString().includes('.')) {
        mappedProblemDefinitions.push({
          problemDefinitionTitle: single.value,
          possibleSolutions: mapFetchProblemSolution(single.problemSolutions),
        });
      } else {
        mappedProblemDefinitions.push({
          problemDefinitionKey: single.id,
          problemDefinitionId: single.problemDefinitionId,
          problemDefinitionTitle: single.value,
          possibleSolutions: mapFetchProblemSolution(single.problemSolutions),
          serviceId: single.serviceId,
        });
      }
    });
  return mappedProblemDefinitions;
};

export const mapObjToUpdateResolutionReply = (
  title,
  problemDefinition,
  resolutionReplyObj,
) => {
  if (resolutionReplyObj) {
    return {
      ...resolutionReplyObj,
      title,
      resolutionReply: {
        ...resolutionReplyObj.resolutionReply,
        problemDefinitions:
          resolutionReplyObj.resolutionReply &&
          mapProblemDefinitionToSave(
            resolutionReplyObj.resolutionReply.problemDefinitions,
            problemDefinition,
          ),
      },
    };
  }
};
// for update resolution reply
