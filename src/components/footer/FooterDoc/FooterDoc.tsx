'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Modal from '@/components/modal/Modal';
import { PDFView } from '@/components/PDFView/PDFView';
import { DocumentDataProps } from '@/api/fetchDocuments';

export const FooterDoc = ({
  footerDoc,
  modal,
  documents,
}: {
  footerDoc: { href: string; name: string }[];
  documents: DocumentDataProps[];
  modal: {
    button: {
      label: string;
    };
  };
}) => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const document = params.get('document');
  console.log(document);
  const handlerShowModal = () => {
    router.push(pathname, { scroll: false });
  };

  const getDoc = (path: string, documents: DocumentDataProps[]) => {
    return documents.filter(
      el => `${el.attributes.name}${el.attributes.src.data[0].attributes.ext}` === path
    )[0];
  };
  return (
    <>
      <ul className="flex flex-col gap-5 text-sm underline md:flex-row md:gap-10 lg:gap-28 xl:gap-[138px] 2xl:gap-[220px] 3xl:gap-[460px]">
        {footerDoc.map(ell => (
          <li key={ell.name}>
            <Link href={ell.href}>{ell.name}</Link>
          </li>
        ))}
      </ul>

      {document && (
        <Modal modalClose={handlerShowModal} modal={modal} className="z-50 px-10 py-10" scroll>
          <PDFView documents={getDoc(document, documents)} />
        </Modal>
      )}
    </>
  );
};
