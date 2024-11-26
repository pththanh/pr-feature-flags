import Card from "../../ui/Card/Card";
import { useFlags } from "launchdarkly-react-client-sdk";

const Homepage = () => {
  const { sampleFeature } = useFlags();

  return (
    <div className="flex min-h-screen w-screen justify-center items-center gap-6">
      <Card title="Feature A" className="dark:bg-red-500" />
      <Card title="Feature B" className="dark:bg-red-500" />
      {sampleFeature && <Card title="Feature C" />}
    </div>
  );
};

export default Homepage;
