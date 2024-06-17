"use client";

import PreviewModal from "@/components/previewModal";
import { useState, useEffect } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
