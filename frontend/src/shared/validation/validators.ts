export const emailValidation = {
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Введите корректный email',
  },
};

export const phoneValidation = {
  pattern: {
    value: /^(?:\+7|7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
    message: 'Введите корректный номер (например, +7 923 567-89-90)',
  },
};
