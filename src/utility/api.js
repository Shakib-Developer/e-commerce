import axios from "axios";
import { ErrorToast } from "./FormHelper";

export const read_all_categories__Request__API = async () => {
  let URL = "/api/dashboard/categories/read";

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Create New Products ===================
export const create_products__Request__API = async (reqBody) => {
  let URL = "/api/dashboard/products/create";

  try {
    const result = await axios.post(URL, reqBody);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Read All Products ===================
export const read_all_products__Request__API = async () => {
  let URL = "/api/dashboard/products/read";

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Read single Products ===================
export const read_single_products__Request__API = async (id) => {
  let URL = `/api/dashboard/products/read-single?id=${id}`;

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Update Products ===================
export const update_products__Request__API = async ({
  title,
  img1,
  img2,
  img3,
  type,
  price,
  des,
  id,
}) => {
  let reqBody = {
    title,
    img1,
    img2,
    img3,
    type,
    price,
    des,
  };

  let URL = `/api/dashboard/products/update?id=${id}`;
  console.log(URL);
  try {
    const result = await axios.post(URL, reqBody);

    console.log(result);
    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Delete Single Products ===================
export const delete_products__Request__API = async (id) => {
  let URL = `/api/dashboard/products/delete?id=${id}`;
  try {
    const result = await axios.delete(URL);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ============================ Category ============================

//! ================== Create New Category ===================
export const create_category__Request__API = async (reqBody) => {
  let URL = "/api/dashboard/category/create";

  try {
    const result = await axios.post(URL, reqBody);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Read All Category ===================
export const read_all_category__Request__API = async () => {
  let URL = "/api/dashboard/category/read";

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};
//! ================== Read single Category ===================
export const read_single_category__Request__API = async (id) => {
  let URL = `/api/dashboard/category/read-single?id=${id}`;

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Update Category ===================
export const update_category__Request__API = async ({ name, catimg, id }) => {
  let reqBody = { name, catimg };

  let URL = `/api/dashboard/category/update?id=${id}`;

  try {
    const result = await axios.post(URL, reqBody);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Delete Single Category ===================
export const delete_category__Request__API = async (id) => {
  let URL = `/api/dashboard/category/delete?id=${id}`;
  try {
    const result = await axios.delete(URL);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};
