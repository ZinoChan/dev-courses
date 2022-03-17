import Button from "../UI/Button";
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
          <Button className="rounded btn-gradient">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
