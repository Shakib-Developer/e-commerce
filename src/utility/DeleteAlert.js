import Swal from "sweetalert2";
import {
  delete_products__Request__API,
  delete_category__Request__API,
} from "./api";

export const DeleteAlertProductsPost = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "btn-success",
    cancelButtonColor: "btn-danger",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return delete_products__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};

export const DeleteAlertCategoryPost = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "btn-success",
    cancelButtonColor: "btn-danger",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return delete_category__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};
