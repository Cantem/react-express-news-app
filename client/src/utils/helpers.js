const MAX_TITLE_LENGTH = 95;
const MAX_DESCRIPTION_LENGTH = 160;

export const truncateTitle = (title) => {
  if(title.length > MAX_TITLE_LENGTH){
    return `${title.substring(0, MAX_TITLE_LENGTH)}...`;
  } return title;
} ;
export const truncateDescription = (description) => {
  if(description.length > MAX_DESCRIPTION_LENGTH) {
    return `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`;
  } return description;
} ;
