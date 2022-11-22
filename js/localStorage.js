
export function getLocalStorageData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function setLocalStorageData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}