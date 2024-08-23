function PrimaryButton({ content, onClick, disabled }) {
  return (
    <button
      className="flex h-7 w-24 items-center justify-center rounded-md bg-secondaryColor text-white disabled:opacity-75"
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default PrimaryButton;
