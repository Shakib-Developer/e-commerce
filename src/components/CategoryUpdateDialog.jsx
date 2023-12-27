import React, { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

import {
  read_single_category__Request__API,
  update_category__Request__API,
} from "@/utility/api";
import { SuccessToast } from "@/utility/FormHelper";

export function CategoryUpdateDialog({ id }) {
  let nameRef,
    catimgRef = useRef();
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    read_single_category__Request__API(id).then((res) => {
      setCategory(res?.data[0]);
    });
  };

  const handelClose = () => {
    setOpen(false);
  };

  const submit = (id) => {
    let name = nameRef.value;
    let catimg = catimgRef.value;

    update_category__Request__API({ name, catimg, id }).then((res) => {
      if (res) {
        handelClose();
        SuccessToast("Category update successful!");
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
        <div className="d-flex align-items-center justify-content-space-between">
          <DialogHeader className="d-flex flex-col align-items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Edit Category
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
            <Typography className="-mb-1" color="primary" variant="h6">
              Name
            </Typography>
            <input
              className="border p-2 border-dark"
              placeholder="Title"
              defaultValue={category?.name}
              ref={(input) => (nameRef = input)}
            />
            <input
              className="border p-2 border-dark"
              placeholder="Img CDN"
              defaultValue={category?.catimg}
              ref={(input) => (catimgRef = input)}
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
            onClick={() => submit(category?.id)}
          >
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
