import { useState } from "react";

export const useModalStatus = () => {
  const [modal, setmodal] = useState({
    status: false,
    title: "",
    body: "",
  });

  const closeModal = () =>
    setmodal((prev) => ({
      ...prev,
      status: false,
    }));

  const openModal = (title: string, body: string) =>
    setmodal({
      status: true,
      title,
      body,
    });

  return {
    status: modal.status,
    title: modal.title,
    body: modal.body,
    closeModal,
    openModal,
  };
};
