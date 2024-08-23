import HomeListItem from "./HomeListItem";

function AboutCompay() {
  return (
    <div className="mt-10 flex w-mainWidth justify-between">
      <img
        src="src/data/presentation-image.jpg"
        alt="multiple books"
        className="w-2/4"
      />
      <div className="pt-20">
        <h2 className="text-4xl font-semibold">Welcome to our Bookstore!</h2>
        <p className="mt-10">
          Discover a world of literary treasures at our online bookstore, where
          we bring the joy of reading right to your doorstep. Whether you're a
          passionate bookworm, a casual reader, or looking for the perfect gift,
          our diverse collection has something for everyone.
        </p>
        <h3 className="mt-5 text-2xl font-semibold">Why Choose Us?</h3>
        <HomeListItem
          question="Vast Selection:"
          answer="  From bestsellers and timeless classics to hidden gems and the latest
          releases, our extensive catalog covers all genres and interests."
        />
        <HomeListItem
          question="Convenient Shopping:"
          answer="Enjoy a seamless and user-friendly shopping experience. Easily browse,
          search, and purchase books from the comfort of your home."
        />
        <HomeListItem
          question="Fast Delivery:"
          answer="We offer quick and reliable shipping options to ensure you get your
          books as soon as possible."
        />
        <HomeListItem
          question="Community Support:"
          answer="A portion of our proceeds goes to supporting literacy programs and
          local libraries, helping to spread the love of reading to everyone."
        />
        <p className="mt-2">
          Thank you for choosing our bookstore. We look forward to fueling your
          passion for reading!
        </p>
        <p>Happy Reading!</p>
      </div>
    </div>
  );
}

export default AboutCompay;
