export const BookCover = ({book}) => {

    
  const {
    title,
    author,
    publicationDate,
    imageUrl,
    category,
    description,
    price,
    status,
  } = book;
    return (
      <div className="md:w-1/3 p-6 flex-shrink-0">
        <div className="relative w-full h-auto rounded-lg shadow-xl transform rotate-x-[20deg] origin-bottom perspective-[1000px] transition-transform hover:scale-105">
          <img
            src={
              imageUrl ||
              "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500"
            }
            alt={title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex gap-[0.25rem]">
          <span className="inline-block mt-2 text-red-700 text-[0.85rem] px-2 py-1 bg-red-100 shadow-sm transform -skew-x-12 rounded-sm">
            Price: ${price}
          </span>
          <span className="inline-block mt-2 text-green-700  text-[0.85rem] px-2 py-1 bg-green-100 shadow-sm transform -skew-x-12 rounded-sm">
            {status}
          </span>
        </div>
      </div>
    );
}