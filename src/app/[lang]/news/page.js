import Footer from "@/components/custom/Footer";
import { Navbar } from "@/components/custom/Navbar";
import React from "react";
import { getDictionary } from "../dictionaries";
import { baseUrl } from "@/EndPoints";
import Image from "next/image";
import Link from "next/link";
import NewsSectionItem from "@/components/custom/NewsSectionItem";

async function getData(lang) {
  const response = await fetch(
    `${baseUrl}/api/news-collections?populate=*&locale=${lang}`
  );
  const res = await response.json();
  return res.data;
}

async function NewsPage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const news = await getData(lang);
  return (
    <div>
      <Navbar dictionary={dictionary} transparent={false} />

      <section className="w-full py-12 px-[20px] lg:px-[100px] mt-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((news, index) => (
              <NewsSectionItem key={index} news={news} />
            ))}
          </div>
        </div>
      </section>

      <Footer dictionary={dictionary} />
    </div>
  );
}

export default NewsPage;
