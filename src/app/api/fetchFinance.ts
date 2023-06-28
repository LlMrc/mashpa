

export const fetchNews = async ()=>{
    const url = 'https://cnbc.p.rapidapi.com/news/v2/list-special-reports?pageSize=30&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'cnbc.p.rapidapi.com',
		'X-RapidAPI-Key': 'f6780b750dmsh73629311abdc462p1346aejsnbc316f87258c'
	}
};
	const response = await fetch(url, options);
    if(!response.ok) throw new Error('faild to fetch data')
	const result = await response.json()
    return result

}

export default fetchNews



