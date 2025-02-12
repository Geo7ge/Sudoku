function Tile({ value, colIndex, rowIndex, isFixed, onClick }) {
  return (
    <div
      className={`border-black border-[1px] sm:border-2 flex items-center justify-center
        aspect-square w-full h-full select-none text-center font-sans
        ${(colIndex + rowIndex) % 2 === 1 ? "bg-blue-200" : "bg-white"}
        ${(colIndex + 1) % 3 === 0 ? "border-r-2 md:border-r-4" : ""}
        ${(rowIndex + 1) % 3 === 0 ? "border-b-2 md:border-b-4" : ""}
        ${
          isFixed
            ? "text-black font-bold"
            : "text-blue-900 font-bold cursor-pointer"
        }
        text-3xl sm:text-4xl md:text-4xl lg:text-5xl
      `}
      onClick={isFixed ? null : onClick}
    >
      {value === 0 ? "" : value}
    </div>
  );
}

export default Tile;
