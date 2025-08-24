export const getUserFromStorage = () => {
  const userInfo = localStorage.getItem("userInfo");
  if (!userInfo) return null; // nothing saved yet
  try {
    const parsed = JSON.parse(userInfo);
    return parsed?.token || null;
  } catch (e) {
    console.error("Invalid JSON in localStorage userInfo:", e);
    return null;
  }
};
