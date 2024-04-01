/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "../");

const cleanFile = (filePath) => {
	const fileName = path.basename(filePath);
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			console.error(`Error reading file ${fileName} from disk: ${err}`);
			return;
		}

		try {
			const content = JSON.parse(data);
			if (content.hasOwnProperty("monster")) {
				delete content._meta;
				const cleanedData = JSON.stringify(content.monster, null, 2);

				fs.writeFile(filePath, cleanedData, "utf8", (err) => {
					if (err) {
						console.error(`Error writing cleaned data to file ${fileName}: ${err}`);
					} else {
						console.log(`File ${fileName} has been cleaned and saved: ${filePath}`);
					}
				});
			} else {
				console.log(`No 'monster' property found in ${fileName}. Skipping file.`);
			}
		} catch (parseError) {
			console.error(`Error parsing JSON in file ${fileName}: ${parseError}`);
		}
	});
};

const cleanDirectoryFiles = () => {
	fs.readdir(directoryPath, (err, files) => {
		if (err) {
			console.error(`Unable to scan directory: ${err}`);
			return;
		}

		files.forEach((file) => {
			if (file.startsWith("bestiary")) {
				const filePath = path.join(directoryPath, file);
				cleanFile(filePath);
			}
		});
	});
};

cleanDirectoryFiles();
