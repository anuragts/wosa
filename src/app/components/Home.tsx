"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./Card";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Company[]>('/api/post/getAll');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
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
  );
}
