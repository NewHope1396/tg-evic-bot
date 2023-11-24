const noData = "Не вказано";

const createMessage = ({ type, name, tel, brand, model, area, comment }) => {
  const orderMessage = `
  Нове Замовлення!!!
  
  Ім'я: ${name || noData}
  Телефон: ${tel}
  Марка: ${brand?.label || noData}
  Модель: ${model?.label || noData}
  Область: ${area || noData}
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
