import { PrismaClient } from "@prisma/client";
import React from "react";
import ProductDetails from "@/components/Home/ProductDetails";

async function getData(id) {
  const prisma = new PrismaClient();

  let Details = await prisma.products.findUnique({
    where: { id: parseInt(id) },
  });
  return { Details: Details };
}

export async function generateMetadata(id) {
  const prisma = new PrismaClient();
  let SEO = prisma.products.findUnique({ where: { id: parseInt(id) } });
  return {
    title: SEO["title"],
    description: SEO["short_des"],
    keywords: SEO["keywords"],
    openGraph: {
      images: SEO["img1"],
    },
  };
}

const Page = async (props) => {
  let id = props.searchParams["id"];
  let data = await getData(id);

  return (
    <div>
      <div className="container mt-5">
        <h5 className="text-uppercase text-info">Details</h5>
        <hr className="text-info" />
        <div className="row">
          <div className="col-12 bg-light">
            <ProductDetails details={data["Details"]} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
