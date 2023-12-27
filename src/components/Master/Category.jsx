"use client";
import Link from "next/link";

function Category(props) {
  return (
    <>
      <div className="container mx-auto my-5">
        <div className="cats">
          {props.data["categories"].map((Item, i) => (
            <Link
              key={i}
              className="text-decoration-none"
              href={"/Products/" + Item["name"] + "?id=" + Item["id"]}
            >
              <div className="cat-bg">
                <div>
                  <img
                    className="cat-img"
                    src={Item["catimg"]}
                    alt="Category Image"
                  />
                </div>
                <div className="cat-text">
                  <h5>{Item["name"]}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto pt-5">
        <div className="row">
          <div className="col-12 text-start">
            <div className="home-text">
              <h5>About Gorib, The Largest Marketplace in Bangladesh!</h5>
              <p>
                Gorib is a platform on which you can buy and sell almost
                everything! We help people buy and sell vehicles, find
                properties, get jobs or recruit employees, buy and sell mobile
                phones, purchase electronic products, and much more. With more
                than 50 categories our solutions are built to be safe, smart,
                and convenient for our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
