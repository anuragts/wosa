"use client"
import { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

type CardProps = {
  name: string;
  imageUrl: string;
  description: string;
  url: string;
  githubUrl: string;
  closedSrcName: string;
};

export default function CardComponent(props: CardProps) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <Card className="w-80 py-4 mx-auto my-4">
      <CardHeader className="pb-4 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">
          {props.closedSrcName}'s alternative
        </p>
        <h4 className="font-bold text-2xl">{props.name}</h4>
        <small className="text-default-500">
          {showFullText
            ? props.description
            : `${props.description.slice(0, 100)}${
                props.description.length > 100 ? "..." : ""
              }`}
          <span
            className="text-primary cursor-pointer"
            onClick={toggleShowFullText}
          >
            {showFullText ? " Show less" : " Show more"}
          </span>
        </small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={props.imageUrl}
            width={150}
          />
        </div>
      </CardBody>
      <div className="flex justify-between px-4 pb-4">
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Try
        </a>
        <a
          href={props.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Github
        </a>
      </div>
    </Card>
  );
}
