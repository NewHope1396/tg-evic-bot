const noData = "Не вказано";

const createMessage = ({ type, name, tel, brand, model, area, comment }) => {
  const orderMessage = `
  Нове Замовлення!!!
  
  Ім'я: ${name || noData}
  Телефон: 0${tel}
  Марка: ${brand?.label || noData}
  Модель: ${model?.label || noData}
  Область: ${area?.label || noData}
  Коментар: ${comment || noData}
  `;

  const consultationMessage = `
  Консультація!!!
  
  Ім'я: ${name || noData}
  Телефон: ${tel}
  Коментар: ${comment || noData}
  `;

  return type === "order" ? orderMessage : consultationMessage;
};

module.exports = createMessage;
