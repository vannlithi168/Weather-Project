const dayFormat = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = {
    weekday: "long",
  };
  return date.toLocaleDateString(undefined, options);
};

export default dayFormat;
