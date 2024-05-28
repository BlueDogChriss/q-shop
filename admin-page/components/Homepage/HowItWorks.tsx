import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../Homepage/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <GiftIcon />,

    title: "Sign Up & Choose Your Plan",
    description:
      "Create a free account in minutes and dive into our comprehensive demo to explore all the features. No credit card needed! Upgrade to a paid plan whenever you're ready to launch and take your marketplace live.",
  },
  {
    icon: <MapIcon />,
    title: "Build & Customize",
    description:
      "Unleash your creativity and customize your marketplace with your brand identity. Add product categories, define features, and set up shipping options to perfectly suit your marketplace's needs. You can even invite vendors to join your platform and manage their access levels.",
  },
  {
    icon: <PlaneIcon />,
    title: "Go Live & Earn",
    description:
      "Connect your preferred payment gateway to securely accept transactions from customers. Set your commission structure and manage payouts to vendors effortlessly. Once everything is in place, launch your marketplace and watch your business flourish!",
  },
  {
    icon: <MedalIcon />,
    title: "Manage & Analyze",
    description:
      "Keep a pulse on your marketplace's performance with our intuitive admin dashboard. Track key metrics like sales, traffic, and user engagement to gain valuable insights and optimize your marketplace strategy. Easily manage product inventory and update item details as needed - all within a centralized location.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works:{" "}
        </span>
        Launch Your Marketplace in Four Easy Steps!
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      We have streamlined the marketplace creation process into four simple steps. 
      Get started with your free trial today and be selling in no time!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};