export const cleanUrl = (baseUrl, path) => {
  const cleanedBaseUrl = baseUrl.replace(/\/+$/, ""); // Remove trailing slashes
  const cleanedPath = path.replace(/^\/+/, ""); // Remove leading slashes
  return `${cleanedBaseUrl}/${cleanedPath}`;
};