import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { format } from "date-fns";

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage,
      publishedAt,
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
      {/* Publication Date */}
      <div className="text-right text-gray-500 dark:text-gray-400 mb-4">
        {format(new Date(data.publishedAt), 'MMMM dd, yyyy')}
      </div>

      {/* Blog Title */}
      <h1 className="text-center mb-8">
        <span className="block text-base text-primary font-semibold tracking-wide uppercase">
          Akshay Esackimuthu CP - Blog
        </span>
        <span className="mt-2 block text-4xl leading-10 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          {data.title}
        </span>
      </h1>

      {/* Title Image */}
      <div className="flex justify-center mb-8">
        <Image
          src={urlFor(data.titleImage).url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="prose prose-blue prose-xl dark:prose-invert">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}
