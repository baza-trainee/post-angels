'use client';

import { DocumentDataProps } from '@/api/fetchReport';
import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import { useState } from 'react';

interface ModalProps {
  button: {
    label: string;
  };
}
export const ReportGallery = ({
  report_documents,
  modal,
}: {
  report_documents: DocumentDataProps[];
  modal: ModalProps;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<DocumentDataProps>();

  const handleClick = (el: DocumentDataProps) => {
    setSelectedImage(el);
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {report_documents.map(el => (
          <>
            <button aria-label={el.attributes.title} id={el.id} onClick={() => handleClick(el)}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={el.attributes.src.data.attributes.url}
                width={el.attributes.src.data.attributes.width / 4}
                height={el.attributes.src.data.attributes.height / 4}
                alt={el.attributes.title}
              />
            </button>
          </>
        ))}
      </div>
      {isModalOpen && selectedImage?.id && (
        <Modal
          modal={modal}
          modalClose={() => {
            setIsModalOpen(false);
            setSelectedImage(undefined);
          }}
        >
          <div className="h-[auto] max-h-[600px] max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[750px]">
            <Image
              className="h-auto w-full rounded-lg"
              src={selectedImage.attributes.src.data.attributes.url}
              width={selectedImage.attributes.src.data.attributes.width}
              height={selectedImage.attributes.src.data.attributes.height}
              alt={selectedImage.attributes.title}
            />
          </div>
        </Modal>
      )}
    </>
  );
};
