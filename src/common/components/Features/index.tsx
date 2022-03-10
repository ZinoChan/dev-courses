import Title from "../UI/Title";
import {
  GlobalOutlined,
  ClockCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-lg mx-auto px-2">
        <Title headline="our features" subHeadline="what makes us the best" />
        <div className="grid grid-cols-3 gap-12">
          <div className="rounded hover:shadow-md hover:bg-white p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full text-white text-4xl bg-primary-200 flex items-center justify-center">
              <GlobalOutlined />
            </div>
            <h4 className="text-lg font-bold text-primary-dark-100 capitalize mb-4">
              Real World Projects
            </h4>
            <p className="text-gray-400 text-sm">
              un testo segnaposto utilizzato nel settore della .
            </p>
          </div>
          <div className="rounded hover:shadow-md hover:bg-white p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full text-white text-4xl bg-primary-100 flex items-center justify-center">
              <ClockCircleOutlined />
            </div>
            <h4 className="text-lg font-bold text-primary-dark-100 capitalize mb-4">
              Flexible time
            </h4>
            <p className="text-gray-400 text-sm">
              un testo segnaposto utilizzato nel settore della .
            </p>
          </div>
          <div className="rounded hover:shadow-md hover:bg-white p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full text-white text-4xl bg-primary-300 flex items-center justify-center">
              <TeamOutlined />
            </div>
            <h4 className="text-lg font-bold text-primary-dark-100 capitalize mb-4">
              Practice working in team
            </h4>
            <p className="text-gray-400 text-sm">
              un testo segnaposto utilizzato nel settore della .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
