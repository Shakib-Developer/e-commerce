import React, { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import ReactQuill from "react-quill";
import { QuillScript } from "@/utility/QuillScript";
import {
  read_single_products__Request__API,
  update_products__Request__API,
} from "@/utility/api";
import { SuccessToast } from "@/utility/FormHelper";

export function ProductsUpdateDialog({ id }) {
  let titleRef,
    img1Ref,
    img2Ref,
    img3Ref,
    locationRef,
    brandsRef,
    conditionsRef,
    typeRef,
    priceRef = useRef();
  const [editorData, setEditorData] = useState("");
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    read_single_products__Request__API(id).then((res) => {
      setProducts(res?.data[0]);
      setEditorData(res?.data[0]?.des);
    });
  };

  const handelClose = () => {
    setOpen(false);
  };

  const submit = (id) => {
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
    update_products__Request__API({
      title,
      img1,
      img2,
      img3,
      location,
      brands,
      brands,
      conditions,
      type,
      price,
      des,
      id,
    }).then((res) => {
      if (res) {
        handelClose();
        SuccessToast("Products update successful!");
      }
    });
  };

  return (
    <>
      <span
        onClick={handleOpen}
        x-data="{ tooltip: 'Edite' }"
        className="cursor-pointer"
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </span>
      <Dialog open={open} handler={handleOpen}>
        <div className="d-flex align-items-center justify-content-between">
          <DialogHeader className="d-flex flex-column align-items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Edit Products
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handelClose}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <div className="grid gap-5">
            <Typography className="-mb-1" color="dark" variant="h6">
              ID = {products?.id}
            </Typography>
            <Typography className="-mb-1" color="dark" variant="h6">
              Title
            </Typography>
            <input
              className="border p-2 border-dark"
              placeholder="Title"
              defaultValue={products?.title}
              ref={(input) => (titleRef = input)}
            />
            <input
              className="border p-2 border-dark"
              placeholder="Img CDN-1"
              defaultValue={products?.img1}
              ref={(input) => (img1Ref = input)}
            />
            <input
              className="border p-2 border-dark"
              placeholder="Img CDN-2"
              defaultValue={products?.img2}
              ref={(input) => (img2Ref = input)}
            />
            <input
              className="border p-2 border-dark"
              placeholder="Img CDN-3"
              defaultValue={products?.img3}
              ref={(input) => (img3Ref = input)}
            />
            <input
              className="border p-2 border-dark"
              placeholder="Location"
              defaultValue={products?.location}
              ref={(input) => (locationRef = input)}
            />
            <input
              className="border p-2 border-dark"
              placeholder="Brands"
              defaultValue={products?.brands}
              ref={(input) => (brandsRef = input)}
            />
            <input
              className="border p-2 border-dark"
              placeholder="Conditions"
              defaultValue={products?.conditions}
              ref={(input) => (conditionsRef = input)}
            />
            <input
              className="border p-2 border-dark"
              placeholder="Type"
              defaultValue={products?.type}
              ref={(input) => (typeRef = input)}
            />
            <input
              className="border p-2 border-dark"
              placeholder="Price"
              defaultValue={products?.price}
              ref={(input) => (priceRef = input)}
            />
            <ReactQuill
              className="upload-des d-block w-100 p-3 mt-2 text-gray-700 bg-dark pb-5"
              theme="snow"
              value={editorData}
              onChange={setEditorData}
              modules={QuillScript.modules}
              formats={QuillScript.formats}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="dark" onClick={handelClose}>
            cancel
          </Button>
          <Button
            variant="gradient"
            color="dark"
            onClick={() => submit(products?.id)}
          >
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
