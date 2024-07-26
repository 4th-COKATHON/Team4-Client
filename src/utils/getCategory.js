const getCategory = (category) => {
  if (category === "CHALLENGE") {
    return "탐험";
  } else if (category === "DEVELOPMENT") {
    return "성장";
  } else if (category === "SOCIAL") {
    return "관계";
  } else if (category === "CULTURE") {
    return "문화";
  }
};

export default getCategory;
