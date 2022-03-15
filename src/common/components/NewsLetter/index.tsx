import Title from "../UI/Title";

const NewsLetter = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-md p-10 mx-auto shadow-lg rounded">
        <Title
          subHeadline=" stay up to date"
          headline="Subscribe to our NewsLetter"
        />
        <form className="flex max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-gray-300 bg-gray-50 p-2 border-2 w-full "
          />
          <button className="rounded px-8 py-3  font-bold bg-gradient-to-br from-primary-100 to-primary-200 text-white">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
