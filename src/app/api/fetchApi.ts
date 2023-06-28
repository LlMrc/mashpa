export const fetchNews = async () => {
  const url =
    "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw";
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "f6780b750dmsh73629311abdc462p1346aejsnbc316f87258c",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Failed to fetch data");

  const result = await response.json();

  return result;
};
export default fetchNews;
