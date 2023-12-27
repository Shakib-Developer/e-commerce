import { PrismaClient } from "@prisma/client";
import ProductList from "@/components/Home/ProductList";
import Hero from "@/components/Home/Hero";

async function getData(id) {
  const prisma = new PrismaClient();

  let Slider = await prisma.products.findMany({ where: { type: "Slider" } });

  let Products = await prisma.products.findMany({
    where: { catID: parseInt(id) },
    orderBy: { id: "desc" },
  });

  return { Products: Products, Slider: Slider };
}

const Page = async (props) => {
  const data = await getData(props.searchParams["id"]);

  return (
    <div>
      <Hero slider={data["Slider"]} />
      <div className="mt-5">
        <h5 className="mx-5 text-uppercase text-info">PRODUCTS</h5>
        <hr className="mx-5 text-info" />
        <div className="row container-fluid">
          <div className="col-12 mx-auto my-5 border">
            <ProductList products={data["Products"]} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
