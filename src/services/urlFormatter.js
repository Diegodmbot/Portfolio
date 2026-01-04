export const removeURLProtocol = (url) => {
  return url.replace(/^https?:\/\//, "");
};
