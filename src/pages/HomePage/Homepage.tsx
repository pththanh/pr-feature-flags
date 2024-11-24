import Card from "../../ui/Card/Card";
import { ENV } from "../../consts/env";

const Homepage = () => {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center gap-6">
      <Card title="Feature A" className="dark:bg-red-500" />
      <Card title="Feature B" className="dark:bg-red-500" />
      {ENV.ENABLE_FEATURE_C === "true" && <Card title="Feature C" />}
    </div>
  );
};

export default Homepage;
