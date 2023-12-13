export const getGifts = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=PPGxGEIpjrmuZaj9N5F0R0nsAdRG1zLs&q=${category}&limit=5`;

	const res = await fetch(url);
	const { data } = await res.json();

	const gifts = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));

	return gifts;
};
