export default (name) => {
  const item = localStorage.getItem(name);
  try {
    const itemParsed = JSON.parse(item);

    if (itemParsed === 'null') {
      return null;
    } else {
      return itemParsed;
    }
  } catch (error) {
    return item === '' ? null : item;
  }
};
