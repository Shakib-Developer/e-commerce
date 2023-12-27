"use client";

import SideLayout from "@/components/Master/Side-Layout";
import {
  create_category__Request__API,
  read_all_category__Request__API,
} from "@/utility/api";
import { SuccessToast } from "@/utility/FormHelper";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

import { CategoryUpdateDialog } from "@/components/CategoryUpdateDialog";
import { DeleteAlertCategoryPost } from "@/utility/DeleteAlert";

export default function Page() {
  const [category, setCategory] = useState([]);
  let nameRef,
    catimgRef = useRef();
  const submit = (e) => {
    e.preventDefault();
    let name = nameRef.value;
    let catimg = catimgRef.value;

    create_category__Request__API({ name, catimg }).then((res) => {
      if (res) {
        SuccessToast("Categorye add successful!");
        nameRef.value = "";
        catimgRef.value = "";
        read_all_category__Request__API().then((res) => {
          setCategory(res.data);
        });
      }
    });
  };

  const deleteCategoryControl = (id) => {
    DeleteAlertCategoryPost(id).then((res) => {
      if (res) {
        read_all_category__Request__API().then((res) => {
          setCategory(res.data);
        });
      }
    });
  };

  useEffect(() => {
    read_all_category__Request__API().then((res) => {
      setCategory(res.data);
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
              <h1 className="fs-4 fw-semibold">
                Add Category - please fill in your information to continue
              </h1>
              <div className="mt-6">
                <div className="grid gap-5">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-d-block fw-semibold text-dark text-uppercase"
                    >
                      Category Name
                    </label>
                    <input
                      ref={(input) => (nameRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="category Title"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firstname"
                      className="d-block text-xs font-semibold text-dark text-uppercase"
                    >
                      Image CDN
                    </label>
                    <input
                      ref={(input) => (catimgRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Image CDN"
                      autoComplete="given-name"
                      className="d-block w-100 p-3 mt-2 text-dark bg-light appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>
                </div>
                <button
                  onClick={submit}
                  type="submit"
                  className="w-100 py-3 mt-5 fw-medium tracking-widest text-white text-uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>

          <br />
          <br />
          {/* Table */}
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-100 border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 fw-medium text-dark">
                    Category Name
                  </th>

                  <th scope="col" className="px-6 py-4 fw-medium text-dark">
                    Category Image
                  </th>

                  <th scope="col" className="px-6 py-4 fw-medium text-dark">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark border-t border-dark">
                {category.map((item, index) => (
                  <tr className="hover:bg-gray-50" key={index}>
                    <td className="px-5 py-4">{item.name}</td>

                    <td className="px-5 py-4">
                      <img src={item.catimg} alt="" className="dashcat-img" />
                    </td>

                    <td className="px-5 py-4">
                      <div className="d-flex justify-content-right gap-4">
                        <span
                          className="cursor-pointer"
                          x-data="{ tooltip: 'Delete' }"
                          onClick={() => deleteCategoryControl(item.id)}
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
                        <CategoryUpdateDialog id={item.id} />
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
