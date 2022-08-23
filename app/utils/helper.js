// example: 20/01/01
export const GetDateForRangePicker = dateToConvert => {
  const dateConverted = new Date(parseInt(dateToConvert));

  const year = dateConverted.getFullYear() % 100;
  const month = (dateConverted.getMonth() + 1).toString().padStart(2, '0');
  const day = dateConverted
    .getDate()
    .toString()
    .padStart();

  return `${year}/${month}/${day}`;
};
/* Generate uuid */
function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const CreateUUID = createUUID;
// example: 2020/01/01
export const GetFullDate = dateToConvert => {
  const dateConverted = new Date(parseInt(dateToConvert));

  const year = dateConverted.getFullYear();
  const month = (dateConverted.getMonth() + 1).toString().padStart(2, '0');
  const day = dateConverted
    .getDate()
    .toString()
    .padStart(2, '0');

  return `${year}/${month}/${day}`;
};

function dateTimeFormat(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = days[a.getDay()];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour %= 12;
  hour = hour || 12; // the hour '0' should be '12'
  min = min < 10 ? `0${min}` : min;
  const formattedMinuteValue = `0${min}`.slice(-2);
  const sec = a.getSeconds();
  const time = `${date}, ${month} ${year} ${hour}:${formattedMinuteValue} ${ampm}`;
  return time;
}
export const DateTimeFormatting = dateTimeFormat;
const unescapeHtml = encodedStr => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(
    `<!doctype html><body>${encodedStr}`,
    'text/html',
  );
  return dom.body.textContent;
};
export const UnescapeHtml = unescapeHtml;
export const DisabledDateTillSpecificDate = startDate => {
  return function disabledDate(current) {
    let startCheck = true;
    // let endCheck = true;
    if (startDate) {
      startCheck =
        current && current < moment(new Date(startDate * 1000), 'DD MMM YYYY');
    }
    // if (endDate) {
    //   endCheck = current && current > moment(endDate, 'YYYY-MM-DD');
    // }
    // console.log(new Date(startDate * 1000), { startCheck });
    return startDate && startCheck;
  };
};

export const getInitialLettersOfEachWord = str => {
  let matches = str && typeof str === 'string' && str.match(/\b(\w)/g);
  let acronym = matches && matches.join('');
  let letters = acronym && acronym.toUpperCase();
  if (letters) {
    if (letters.length === 1) {
      return letters.charAt(0);
    } else {
      return letters.charAt(0) + letters.charAt(letters.length - 1);
    }
  }
};
const funcToReturnUpdatedList = (arrayList, selectedId, updatedObject) => {
  const updatedArray = arrayList.filter(single => single.id !== selectedId);
  updatedArray.splice(
    arrayList.findIndex(single => single.id === selectedId),
    0,
    updatedObject,
  );
  return updatedArray;
};
export const FuncToReturnUpdatedList = funcToReturnUpdatedList;
