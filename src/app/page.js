import PlainLayout from "@/components/Master/Plain-Layout";
import { PrismaClient } from "@prisma/client";
import Category from "@/components/Master/Category";
import SearchBar from "@/components/Master/SearchBar";
import HomeMoney from "@/components/Home/HomeMoney";
import ProductsSlider from "@/components/Home/ProductsSlider";

async function getData() {
  const prisma = new PrismaClient();

  let categories = await prisma.categories.findMany();
  let Products = await prisma.products.findMany({
    orderBy: { id: "desc" },
  });

  return {
    categories: categories,
    Products: Products,
  };
}

const Page = async () => {
  const data = await getData();

  return (
    <PlainLayout>
      <div className="pb-5 bg-info shadow-sm">
        <SearchBar />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 col-12 px-3 mx-auto text-center my-5">
            <Category data={data} />
          </div>

          <div className="container">
            <h5 className="container text-uppercase text-info">
              Latest PRODUCTS
            </h5>
            <hr className="container hr text-info" />
            <ProductsSlider products={data["Products"]} />
          </div>

          <div className="container pt-4">
            <h5 className="container text-uppercase text-info">
              sale & Make Money
            </h5>
            <hr className="container hr text-info" />
            <HomeMoney />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};
export default Page;
