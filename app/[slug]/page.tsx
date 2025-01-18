import { fullBlog } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center mb-8">
        <span className="block text-base text-primary font-semibold tracking-wide uppercase">
          Jan Marshal - Blog
        </span>
        <span className="mt-2 block text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
          {/* {data.title} */}
        </span>
      </h1>

      <div className="flex justify-center">
        <Image
          src={urlFor(data.titleImage).url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className="rounded-lg mt-8 border shadow-lg"
        />
      </div>

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
