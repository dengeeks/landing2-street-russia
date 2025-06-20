type ModalType = 'donating' | null;

export type ModalStateType = {
  currentModal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
};
