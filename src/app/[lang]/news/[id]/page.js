import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";

import Footer from "@/components/custom/Footer";
import { getDictionary } from "../../dictionaries";
import { baseUrl } from "@/EndPoints";

async function getData(id, lang) {
  const response = await fetch(
    `${baseUrl}/api/news-collections/${id}?populate=*&locale=${lang}`
  );
  const res = await response.json();
  return res.data;
}

export default async function NewsPage({ params }) {
  params = await params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const newsId = params.id;
  // const news = dictionary.newsItems.find(
  //   (news) => news.id === parseInt(newsId)
  // );
  const news = await getData(params.id, lang);
  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />

      <section className="w-full bg-white py-16 md:py-16 mt-[50px] px-[20px] lg:px-[100px]">
        <div className="container px-4 md:px-6">
          <img
            src={baseUrl + news.Image[0].url}
            className="sm:h-[250px] md:h-[400px] w-full object-cover"
            alt=""
          />

          <h2 className="text-[25px] font-bold my-5">{news.Title}</h2>

          <p className="whitespace-pre-wrap">{news.description}</p>
        </div>
      </section>

      <Footer dictionary={dictionary} />
    </>
  );
}
