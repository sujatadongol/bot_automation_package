export const getActiveVersionCreatedAt = (
  versionList,
  activeVersion,
  selectedLanguage,
) => {
  let createdAt;
  versionList &&
    versionList.map(single => {
      if (
        single.language === selectedLanguage &&
        single.versionName === activeVersion
      ) {
        createdAt = single.createdAt;
      }
    });
  if (createdAt) {
    return parseInt(createdAt);
  }
};
