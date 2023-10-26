const noData = "Не вказано";

const createMessage = ({ name, tel, brand, model, comment }) => {
  return `
  Нове Замовлення!!!
  
  Ім'я: ${name || noData}
  Телефон: ${tel}
  Марка: ${brand?.label || noData}
  Модель: ${model?.label || noData}
  Коментар: ${comment || noData}
  `;
};

module.exports = createMessage;
