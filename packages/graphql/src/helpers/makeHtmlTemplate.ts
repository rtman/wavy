import handlebars from 'handlebars';

import { readFile } from './readFile';

export const makeHtmlTemplate = async (htmlFilePath: string) => {
  const htmlFile = await readFile(htmlFilePath);

  return handlebars.compile(htmlFile);
};
