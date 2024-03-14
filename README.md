# Video Converter using ffmpeg in Node.js

This project is a simple video converter built using Node.js and ffmpeg. It allows you to convert multiple video files from one format to another using a JSON configuration file.

## Prerequisites

Before running this project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [ffmpeg](https://ffmpeg.org/)

## Installation

1. Clone this repository to your local machine:
2. Navigate to the project directory in your terminal:
3. Install the required dependencies:

## Usage

1. Place your video files in a directory.

2. Edit a JSON file named `input.json` in the project directory. This file should contain an array of objects, each specifying the input and output file paths for conversion. For example:

```json
[
    {
        "input": "/path/to/your/input/file1.ts",
        "output": "/path/to/your/output/file1.mp4"
    },
    {
        "input": "/path/to/your/input/file2.ts",
        "output": "/path/to/your/output/file2.mp4"
    }
]
```
## Supported Formats
ffmpeg supports a wide range of video and audio formats for conversion. Some of the commonly supported video formats include:

MP4
AVI
MKV
MOV
MPEG
FLV
WMV
WebM
and more...
For a full list of supported formats, you can refer to the ffmpeg documentation.

Configuration
You can adjust the conversion settings by modifying the convertVideo function in your JavaScript file. This function uses fluent-ffmpeg to define the conversion options.

License
This project is licensed under the MIT License 
