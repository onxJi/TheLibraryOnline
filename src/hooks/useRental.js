export const useRental = (book = {}) => {
  const { bookId, title, imageUrl, author, category, price } = book;

  const handleRental = () => {
    alert(`Renting ${title} for $${price}`);
  };

  return { bookId, title, imageUrl, author, category, price, handleRental };
};
