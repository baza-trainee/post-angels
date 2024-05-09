import { request } from 'graphql-request';
import { cache } from 'react';

import { getProjects } from './requests/getProjects';

import { Locale } from '@/i18n.config';
import { getDocuments } from './requests/getDocuments';

export interface DocumentsDataType {
  documents: {
    data: DocumentDataProps[];
  };
}

export interface DocumentDataProps {
  id: string;
  attributes: {
    title: string;
    name: string;
    src: {
      data: {
        attributes: {
          name: string;
          url: string;
          size: number;
          ext: string;
        };
      }[];
    };
  };
}

export const fetchDocuments = cache(async (locale: Locale): Promise<DocumentDataProps[]> => {
  try {
    const data: DocumentsDataType = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getDocuments,
      {
        locale: locale,
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}`,
      }
    );

    const result = data.documents.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [] as any;
  }
});
