const MAX_TITLE_LENGTH = 95;
const MAX_DESCRIPTION_LENGTH = 160;
const NO_CONTENT = 'No content available';

export const truncateTitle = (title) => {
  if (!title) {
    return NO_CONTENT;
  }
  if (title & (title.length > MAX_TITLE_LENGTH)) {
    return `${title.substring(0, MAX_TITLE_LENGTH)}...`;
  }
  return title;
};
export const truncateDescription = (description) => {
  if (!description) {
    return NO_CONTENT;
  }
  if (description & (description.length > MAX_DESCRIPTION_LENGTH)) {
    return `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`;
  }
  return description;
};
