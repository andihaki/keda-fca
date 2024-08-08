import { ReactNode } from "react";
import { Button } from "./ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  title: string;
  description: string;
  price: string;
  features: ReactNode[];
};

export default function PricingCard({
  title,
  description,
  price,
  features,
}: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="min-h-8">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-2xl lg:text-4xl font-extrabold">
            {price}
          </span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul role="list" className="mb-8 space-y-4 text-left min-h-28">
          <li className="flex items-center space-x-3"></li>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-center">
        <a
          href="#"
          className="bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
        >
          <Button>Get started</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
