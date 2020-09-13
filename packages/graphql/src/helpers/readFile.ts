import fs from 'fs';

export const readHTMLFile = (path: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, function(err, html) {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
};
