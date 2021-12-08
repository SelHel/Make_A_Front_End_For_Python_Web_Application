async function axiosUrl(url) {
    result = await axios.get(url)
    .catch(function(error) {
        console.log('Error : Failed to connect to ', url, 'Check if API is connected')
        return null
    });
    return result
}