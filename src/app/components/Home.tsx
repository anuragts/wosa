"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./ui/Card";
import SkeletonComponent from "./ui/Skeleton";
import { Divider, Button, Link } from "@nextui-org/react";
import StartBtn from "./ui/Start";

interface Company {
  id: string;
  name: string;
  description: string;
  url: string;
  githubUrl: string;
  imageUrl: string;
  createdAt: string;
  closedSrc: ClosedSource[];
}

interface ClosedSource {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
}

export default function Home() {
  const [data, setData] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Company[]>("/api/post/getAll");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-[2rem]">
        <div className="flex justify-center mt-[5rem]">
          <h1 className="text-5xl font-bold">What's Open Source Alternative</h1>
        </div>
        <div className="flex justify-center">
          <p className="text-2xl mt-4 text-default-500">
            Discover open source alternatives to popular software
          </p>
        </div>
        <div className="mt-12 mb-5 flex justify-center">
          <StartBtn />
        </div>
      </div>

      <Divider className="my-4" />

      {loading ? (
        <div className="grid grid-cols-3 gap-4">
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <CardComponent
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              description={item.description}
              url={item.url}
              githubUrl={item.githubUrl}
              closedSrcName={item.closedSrc[0].name}
            />
          ))}
        </div>
      )}
    </div>
  );
}
