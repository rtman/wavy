'use strict';
const { LokaliseApi } = require('@lokalise/node-api');
const fs = require('fs');
const path = require('path');

// Load api key
let apiKey;
try {
	apiKey = fs.readFileSync(path.resolve(__dirname, 'LOKALISE_API_KEY'), { encoding: 'utf8' }).trim();
} catch (error) {
	console.error(`
You don't have a Lokalise API key. Go to https://lokalise.com/profile,
click on 'API tokens', 'Generate new token', and choose a read-only token.
Then copy it into a file at scripts/LOKALISE_API_KEY`.trim());
	process.exit(1);
}

// Passfolio app project id
const projectId = '445545945c2e638a9326d6.78207472';

// PR config. See https://lokalise.com/api2docs/curl/#transition-download-files-post
const config = {
	format: 'json',
	original_filenames: false,
	bundle_structure: 'src/locales/%LANG_ISO%.%FORMAT%',
	add_newline_eof: true,
	export_sort: 'first_added',
	export_empty_as: 'skip',
	include_comments: false,
	include_description: false,
	triggers: ['github'],
	disable_references: false,
	plural_format: 'i18next',
	placeholder_format: 'i18n',
	indentation: '2sp',
	json_unescaped_slashes: true
};

const makePR = async () => {
	const lokaliseApi = new LokaliseApi({ apiKey });

	try {
		await lokaliseApi.files.download(projectId, config);
	} catch (error) {
		// The api module already prints the error
		process.exit(1);
	}
}

makePR();
