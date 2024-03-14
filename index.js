const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

// Read content from JSON file
const filesToConvert = JSON.parse(fs.readFileSync('input.json'));

// Video conversion function
function convertVideo(inputFilePath, outputFilePath) {
    return new Promise((resolve, reject) => {
        ffmpeg(inputFilePath)
            .output(outputFilePath)
            .outputOptions('-c:v', 'libx264')
            .outputOptions('-preset', 'ultrafast')
            .outputOptions('-b:v', '2000k')
            .on('end', function () {
                resolve();
            })
            .on('error', function (err) {
                reject(err);
            })
            .on('progress', function (progress) {
                //console.log(`\nTiến trình chuyển đổi video từ ${inputFilePath}: ${progress.percent.toFixed(2)}+%`);
                process.stdout.write(`\n Convert video progress \n ${inputFilePath}: ` + progress.percent.toFixed(2) + '%');
            })
            .run();
    });
}

// Chuyển đổi từng video
async function batchConvert() {
    for (let file of filesToConvert) {
        console.log(`\nConvert videos from ${file.input} wall ${file.output}`);
        try {
            await convertVideo(file.input, file.output);
            console.log(`\nConvert videos from ${file.input} wall ${file.output} complete!`);
        } catch (error) {
            console.error(`\nError converting video from ${file.input}:`, error);
        }
    }
}

// Gọi hàm chuyển đổi
batchConvert();
