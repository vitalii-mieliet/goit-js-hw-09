export function saveInLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLS(key) {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
}

export function removeFromLS(key) {
  localStorage.removeItem(key);
}
