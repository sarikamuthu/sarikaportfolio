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
  const data = (await getData(params.slug)) as fullBlog | null;
  const titleImageUrl = data?.titleImage ? urlFor(data.titleImage).url() : "/profile.jpg";
  const content = data?.content ?? [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center">
        <span className="block text-base font-semibold uppercase tracking-wide text-primary">
          Jan Marshal - Blog
        </span>
        <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
          {data?.title ?? "Blog post unavailable"}
        </span>
      </h1>

      {titleImageUrl ? (
        <div className="flex justify-center">
          <Image
            src={titleImageUrl}
            width={800}
            height={800}
            alt={data?.title ? `${data.title} cover` : "Blog cover image"}
            priority
            className="mt-8 rounded-lg border shadow-lg"
          />
        </div>
      ) : null}

      <div className="prose prose-blue prose-lg mt-16 dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={content} />
      </div>
    </div>
  );
}
