import {
  InstagramFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="py-10 bg-footer-100">
      <div className="max-w-screen-lg mx-auto px-2">
        <div className="grid grid-cols-5 gap-12 ">
          <div className="col-span-2 self-center">
            <p className="text-sm text-gray-400 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              voluptatum incidunt nobis quam, ab earum culpa doloremque
              voluptatibus.
            </p>
            <div className="flex space-x-2">
              <div className="rounded-full bg-white w-10 h-10 shadow-md text-primary-100 flex items-center justify-center hover:bg-primary-100 hover:text-white cursor-pointer">
                <TwitterOutlined />
              </div>
              <div className="rounded-full bg-white w-10 h-10 shadow-md text-primary-100 flex items-center justify-center hover:bg-primary-100 hover:text-white cursor-pointer">
                <InstagramFilled />
              </div>
              <div className="rounded-full bg-white w-10 h-10 shadow-md text-primary-100 flex items-center justify-center hover:bg-primary-100 hover:text-white cursor-pointer">
                <YoutubeFilled />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-primary-dark-100 text-lg mb-4">
              Product
            </h3>
            <ul>
              <li className="text-gray-400 capitalize mb-2">Courses</li>
              <li className="text-gray-400 capitalize mb-2">Pricing</li>
              <li className="text-gray-400 capitalize mb-2">Locations</li>
              <li className="text-gray-400 capitalize mb-2">Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-primary-dark-100 text-lg mb-4">
              Engage
            </h3>
            <ul>
              <li className="text-gray-400 capitalize mb-2">F&Q</li>
              <li className="text-gray-400 capitalize mb-2">Tutorials</li>
              <li className="text-gray-400 capitalize mb-2">About Us</li>
              <li className="text-gray-400 capitalize mb-2">Privacy Policy</li>
              <li className="text-gray-400 capitalize mb-2">
                Terms of Services
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-primary-dark-100 text-lg mb-4">
              Earn Money
            </h3>
            <ul>
              <li className="text-gray-400 capitalize mb-2">Become a Tutor</li>
              <li className="text-gray-400 capitalize mb-2">Q&A Specialist</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
