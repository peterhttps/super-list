export const saveOnStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

export const getFromStorageArray = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const editFromStorage = (key: string, value: any) => {
  const store = JSON.parse(localStorage.getItem(key) || "{}");
  const newStore = { ...store, ...value };
  localStorage.setItem(key, JSON.stringify(newStore));
};
