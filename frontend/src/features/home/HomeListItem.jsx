import { FaHandPointRight } from "react-icons/fa";

function HomeListItem({ question, answer }) {
  return (
    <p className="mt-2">
      <span className="flex items-center font-semibold">
        <FaHandPointRight className="text-secondaryColor mr-4" />
        {question}
      </span>
      {answer}
    </p>
  );
}

export default HomeListItem;
