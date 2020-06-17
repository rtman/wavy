import { Screen } from 'components';
import * as helpers from 'helpers';
import { songGBucketurls } from 'urls_temp/songUrls';
import { songImageUrls } from 'urls_temp/songImageUrls';
import { albumImageUrls } from 'urls_temp/albumUrls';
import { artistImageUrls } from 'urls_temp/artistUrls';
import { playlistImageUrls } from 'urls_temp/playlistUrls';
import { labelImageUrls } from 'urls_temp/labelUrls';

import React, { useEffect } from 'react';

export const Home = () => {
  // const COMPONENT_NAME = 'Home';

  const convertImageUrls = async (array: string[], title: string) => {
    const imageUrlPromises: Promise<string>[] = [];
    array.forEach((item: string) => {
      imageUrlPromises.push(helpers.getStorageHttpUrl(item));
    });

    const resolvedUrls = await Promise.all(imageUrlPromises);
    console.log(title);
    resolvedUrls.forEach((item: string) => console.log(`url: '${item}`));
  };

  useEffect(() => {
    const runThis = async () => {
      await convertImageUrls(songGBucketurls, 'songGBucketurls');
      await convertImageUrls(songImageUrls, 'songImageUrls');
      await convertImageUrls(albumImageUrls, 'albumImageUrls');
      await convertImageUrls(artistImageUrls, 'artistImageUrls');
      await convertImageUrls(playlistImageUrls, 'playlistImageUrls');
      await convertImageUrls(labelImageUrls, 'labelImageUrls');
    };
    runThis();
  }, []);

  return <Screen></Screen>;
};
