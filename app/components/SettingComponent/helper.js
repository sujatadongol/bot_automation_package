export const ticketCreateRule = rules => {
  const customRules = [];
  rules &&
    rules.length > 0 &&
    rules.map(rule => {
      customRules.push({ texts: rule.texts });
    });
  return customRules;
};
