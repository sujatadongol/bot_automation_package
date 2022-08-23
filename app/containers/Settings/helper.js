export const settingsList = settings => {
  const List = [];
  settings &&
    settings.map(single => {
      List.push({
        type: single.type,
        key: single.key,
        value: single.value,
      });
    });
  return List;
};
export const findNewArray = (oldArray, newArray) => {
  const newSettings = [];
  oldArray.map(oldItem => {
    newArray.map(newItem => {
      if (oldItem.key === newItem.key) {
        newSettings.push(newItem);
      }
    });
  });
  return newSettings;
};
