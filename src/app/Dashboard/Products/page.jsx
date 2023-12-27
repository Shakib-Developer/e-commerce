"use client";

import SideLayout from "@/components/Master/Side-Layout";
import {
  create_products__Request__API,
  read_all_products__Request__API,
  read_all_categories__Request__API,
} from "@/utility/api";
import { SuccessToast } from "@/utility/FormHelper";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

import ReactQuill from "react-quill";
import { QuillScript } from "@/utility/QuillScript";
import { DeleteAlertProductsPost } from "@/utility/DeleteAlert";
import { ProductsUpdateDialog } from "@/components/ProductsUpdateDialog";

export default function Page() {
  const [editorData, setEditorData] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  let titleRef,
    img1Ref,
    img2Ref,
    img3Ref,
    locationRef,
    brandsRef,
    conditionsRef,
    typeRef,
    priceRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    let title = titleRef.value;
    let img1 = img1Ref.value;
    let img2 = img2Ref.value;
    let img3 = img3Ref.value;
    let location = locationRef.value;
    let brands = brandsRef.value;
    let conditions = conditionsRef.value;
    let type = typeRef.value;
    let price = priceRef.value;
    let des = editorData;
    let catID = categoryId;

    create_products__Request__API({
      title,
      img1,
      img2,
      img3,
      location,
      brands,
      conditions,
      type,
      price,
      des,
      catID,
    }).then((res) => {
      if (res) {
        SuccessToast("Products add successful!");
        titleRef.value = "";
        img1Ref.value = "";
        img2Ref.value = "";
        img3Ref.value = "";
        locationRef.value = "";
        brands.value = "";
        conditions.value = "";
        typeRef.value = "";
        priceRef.value = "";
        setEditorData("");
        read_all_products__Request__API().then((res) => {
          setProducts(res.data);
        });
      }
    });
  };

  const deleteProductsControl = (id) => {
    DeleteAlertProductsPost(id).then((res) => {
      if (res) {
        read_all_products__Request__API().then((res) => {
          setProducts(res.data);
        });
      }
    });
  };

  useEffect(() => {
    read_all_products__Request__API().then((res) => {
      setProducts(res.data);
    });

    read_all_categories__Request__API().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />
      <SideLayout>
        {/* Service Input Form */}

        <div>
          <div className="grid ">
            <div className="p-5">
              <h1 className="fs-2 fw-bold">
                Add Products - please fill in your information to continue
              </h1>
              <div className="mt-5">
                <div className="grid gap-5">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Products Title
                    </label>
                    <input
                      ref={(input) => (titleRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Blog Title"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Image-1
                    </label>
                    <input
                      ref={(input) => (img1Ref = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Image-1"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Image-2
                    </label>
                    <input
                      ref={(input) => (img2Ref = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Image-2"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Image-3
                    </label>
                    <input
                      ref={(input) => (img3Ref = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Image-3"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Location
                    </label>
                    <input
                      ref={(input) => (locationRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Location"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Brands
                    </label>
                    <input
                      ref={(input) => (brandsRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Brands"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Conditions
                    </label>
                    <input
                      ref={(input) => (conditionsRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Conditions"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Type
                    </label>
                    <input
                      ref={(input) => (typeRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Type"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Price
                    </label>
                    <input
                      ref={(input) => (priceRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Price"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Select Category
                    </label>
                    <select
                      id="firstname"
                      onChange={(e) => setCategoryId(e.target.value)}
                      value={categoryId}
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block label-tag text-dark text-uppercase"
                    >
                      Products Description
                    </label>
                    <ReactQuill
                      className="d-block w-100 p-3 mt-2 text-dark bg-light focus:shadow-inner pb-5 dashpro-des"
                      theme="snow"
                      value={editorData}
                      onChange={setEditorData}
                      modules={QuillScript.modules}
                      formats={QuillScript.formats}
                    />
                  </div>
                </div>
                <button
                  onClick={submit}
                  type="submit"
                  className="w-100 py-3 mt-[40px] fw-medium tracking-widest text-white text-uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                >
                  Add Products
                </button>
              </div>
            </div>
          </div>

          <br />
          <br />
          {/* Table */}
          <div className="overflow-hidden rounded-lg border border-dark shadow-md m-5">
            <table className="w-100 border-collapse bg-white text-left text-sm text-dark">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Products Name
                  </th>

                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Products Image-1
                  </th>
                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Products Image-2
                  </th>
                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Products Imag-3
                  </th>

                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Location
                  </th>

                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Brands
                  </th>

                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Conditions
                  </th>

                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Type
                  </th>
                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Price
                  </th>

                  <th scope="col" className="px-5 py-4 fw-medium text-dark">
                    Select Cat
                  </th>

                  <th scope="col" className="px-4 py-4 fw-medium text-dark">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-dark border-t border-dark">
                {products.map((item, index) => (
                  <tr className="hover:bg-gray-50" key={index}>
                    <td className="px-4 py-5">{item.title}</td>

                    <td className="px-4 py-5">
                      <img src={item.img1} alt="" className="dashpro-img" />
                    </td>

                    <td className="px-4 py-5">
                      <img src={item.img2} alt="" className="dashpro-img" />
                    </td>

                    <td className="px-4 py-5">
                      <img src={item.img3} alt="" className="dashpro-img" />
                    </td>

                    <td className="px-4 py-5">{item.location}</td>

                    <td className="px-4 py-5">{item.brands}</td>

                    <td className="px-4 py-5">{item.conditions}</td>

                    <td className="px-4 py-5">{item.type}</td>

                    <td className="px-4 py-5">{item.price}</td>

                    <td className="px-5 py-4">
                      <img src={item.catID} alt="" className="dashcat-img" />
                    </td>

                    <td className="px-5 py-4">
                      <div className="d-flex justify-content-end gap-4">
                        <span
                          className="cursor-pointer"
                          x-data="{ tooltip: 'Delete' }"
                          onClick={() => deleteProductsControl(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </span>
                        <ProductsUpdateDialog id={item.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SideLayout>
    </main>
  );
}
