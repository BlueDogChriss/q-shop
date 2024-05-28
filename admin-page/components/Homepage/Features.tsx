import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from 'next/image'
import image from "../assets/learning-raccoon.png";
import image3 from "../assets/painter-raccoon.png";
import image4 from "../assets/looking-ahead-raccoon.png";

interface FeatureProps {
    title: string;
    description: string;
    image: StaticImageData;
}

const features: FeatureProps[] = [
  {
    title: "Accessibility for All",
    description:
      "Our platform prioritizes accessibility, ensuring your marketplace caters to a wider audience.",
    image: image4,
  },
  {
    title: "No Coding Required",
    description:
      "Build your marketplace with ease using our intuitive drag-and-drop interface. No coding knowledge is necessary!",
    image: image3,
  },
  {
    title: "Easy-to-Learn Interface",
    description:
      "Our user-friendly dashboard streamlines marketplace management. Learn the ropes quickly and focus on growing your business. We offer comprehensive tutorials and in-app guidance to help you every step of the way.",
    image: image,
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "WCAG compliant",
  "Screen Reader Support",
  "Keyboard Navigation",
  "User-friendly interface",
  "no coding experience required",
  "Responsive design",
  "intuitive dashboard",
  "Minimalist",
  "in-app tutorials",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
            
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};