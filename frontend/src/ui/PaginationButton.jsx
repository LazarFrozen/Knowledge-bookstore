function PaginationButton({ text, icon, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex h-10 w-32 items-center justify-center gap-3 rounded-xl bg-white p-1 text-xl transition-all duration-300 hover:bg-secondaryColor hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-fontPrimary"
    >
      {text === "Next" ? (
        <>
          {text} {icon}
        </>
      ) : (
        <>
          {icon} {text}
        </>
      )}
    </button>
  );
}

export default PaginationButton;
