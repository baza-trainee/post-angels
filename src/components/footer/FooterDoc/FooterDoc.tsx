'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Modal from '@/components/modal/Modal';
import { PDFView } from '@/components/PDFView/PDFView';

export const FooterDoc = ({
  footerDoc,
  modal,
}: {
  footerDoc: { href: string; name: string }[];
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

  const handlerShowModal = () => {
    router.push(pathname, { scroll: false });
  };
  return (
    <>
      <ul className="flex flex-col gap-5 text-sm underline md:flex-row md:gap-[91px]">
        {footerDoc.map(ell => (
          <li key={ell.name}>
            <Link href={ell.href}>{ell.name}</Link>
          </li>
        ))}
      </ul>

      {document && (
        <Modal modalClose={handlerShowModal} modal={modal} scroll>
          <PDFView document={document} />
        </Modal>
      )}
    </>
  );
};
