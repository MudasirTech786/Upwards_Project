"use client";
import useSWR from "swr";
import NewsSectionItem from "./NewsSectionItem";
import { getAllNewsAPI } from "@/EndPoints";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NewsSectionContent({ dictionary, lang }) {
  const { data, error, isLoading } = useSWR(
    `${getAllNewsAPI}&locale=${lang}`,
    fetcher
  );

  const latestNews = data?.data
    ? [...data.data]
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 3)
    : [];

  if (isLoading) return <p>Loading news...</p>;
  if (error) return <p>Failed to load news.</p>;

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <NewsSectionItem key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
}
