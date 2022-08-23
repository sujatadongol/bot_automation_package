// for create fixed reply
const mapMatchingText = list => {
  let matchingTexts = [];
  list && list.map(single => single.value && matchingTexts.push(single.value));
  return matchingTexts;
};

export const mapObjToCreateFixedReply = (
  title,
  replyText,
  matchingTexts,
  language,
  enableExpiration,
  expiredTime,
) => {
  return {
    title: title,
    automatedReplyType: 'FIXED_REPLY_TYPE',
    automatedReplyStatus: 'ACTIVE',
    language: language,
    serviceId: localStorage.getItem('serviceId'),
    fixedReply: {
      matchingTexts: mapMatchingText(matchingTexts),
      replyText: replyText,
      enableExpiration,
      expirationTime: expiredTime,
      language: language,
    },
  };
};
// for create fixed reply

// for update fixed reply
export const mapFetchedMatchingText = matchingTexts => {
  let mappedMatchingText = [];
  matchingTexts &&
    matchingTexts.map(single =>
      mappedMatchingText.push({ id: Math.random(), value: single }),
    );
  return mappedMatchingText;
};

const mapMatchingTextToUpdateFixedReply = matchingTexts => {
  let mappedMatchingTexts = [];
  matchingTexts &&
    matchingTexts.map(
      single => single.value && mappedMatchingTexts.push(single.value),
    );
  return mappedMatchingTexts;
};

const mapFixedReplyObj = (
  fixedReply,
  enableExpiration,
  expiredTime,
  matchingTexts,
  replyText,
) => {
  return {
    ...fixedReply,
    enableExpiration,
    expirationTime: expiredTime,
    replyText,
    matchingTexts: mapMatchingTextToUpdateFixedReply(matchingTexts),
  };
};

export const mapObjToUpdateFixedReply = (
  title,
  replyText,
  matchingTexts,
  enableExpiration,
  expiredTime,
  fixedReplyObj,
) => {
  return {
    ...fixedReplyObj,
    title: title,
    fixedReply: mapFixedReplyObj(
      fixedReplyObj.fixedReply,
      enableExpiration,
      expiredTime,
      matchingTexts,
      replyText,
    ),
  };
};
// for update fixed reply

export const getHoursArray = () => {
  let arr = [];

  for (let i = 1; i <= 24; i++) {
    arr.push({ value: i + ' hr' + (i > 1 ? 's' : ''), timestamp: 60 * 60 * i });
  }
  return arr;
};

export const mapExpiredTimestamp = (arr, timestamp) => {
  let expiredTime = 0;
  arr &&
    arr.map(single => {
      if (single.timestamp === parseInt(timestamp)) {
        expiredTime = single.value;
      }
    });
  return expiredTime === 0 ? 'Time' : expiredTime;
};
