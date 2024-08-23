function SideButton({ content, onClick }) {
  return (
    <button
      className="flex h-7 w-24 items-center justify-center rounded-md bg-sideColor text-white"
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default SideButton;
