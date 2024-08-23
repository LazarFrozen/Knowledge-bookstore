import { ClockLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="mb-10 mt-10 flex items-center justify-center">
      <ClockLoader color={"#db5300"} size={150} />
    </div>
  );
}

export default Spinner;
