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
      <ul className="flex flex-col gap-5 text-sm underline md:flex-row md:gap-10 lg:gap-28 xl:gap-[138px] 2xl:gap-[220px] 3xl:gap-[460px]">
        {footerDoc.map(ell => (
          <li key={ell.name}>
            <Link href={ell.href}>{ell.name}</Link>
          </li>
        ))}
      </ul>

      {document && (
        <Modal modalClose={handlerShowModal} modal={modal} className='px-10 py-10' scroll>
          <PDFView document={document} />
        </Modal>
      )}
    </>
  );
};
