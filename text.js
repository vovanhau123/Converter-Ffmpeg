const axios = require('axios');
const cheerio = require('cheerio');

async function crawlVideos() {
    try {
        // Send a GET request to the website
        const response = await axios.get('https://phimmoisz.net/0dc7180d-16f9-4a5a-9a4e-103e0be4d414');

        // Load the HTML content into cheerio
        const $ = cheerio.load(response.data);

        // Find the video elements on the page
        const videoElements = $('video');

        // Extract information from the video elements
        videoElements.each((index, element) => {
            const videoSource = $(element).attr('src');
            const videoTitle = $(element).attr('title');

            // Do something with the extracted information
            console.log(`Title: ${videoTitle}`);
            console.log(`Source: ${videoSource}`);

            // Log the file path
            const filePath = `C:\\Users\\levan\\Videos\\movice\\`;
            console.log(`File Path: ${filePath}`);
        });
    } catch (error) {
        console.error(error);
    }
}

crawlVideos();