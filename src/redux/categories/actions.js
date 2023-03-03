import {
  START_FETCHING_CATEGORIES,
  SUCCESS_FETCHING_CATEGORIES,
  ERROR_FETCHING_CATEGORIES,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise"; // berfungsi memberikan delay selama 1 detik sebelum melakukan akses
// tujuan: misal kita akan melakukan filter, jadi saat mengetik tdk langsung hit endpoint tapi menunggu 1 detik

import { clearNotif } from "../notif/actions";

let debouncedFetchCategories = debounce(getData, 1000);

// START
export const startFetchingCategories = () => {
  return {
    type: START_FETCHING_CATEGORIES,
  };
};

// SUCCESS
export const successFetchingCategories = ({ categories }) => {
  return {
    type: SUCCESS_FETCHING_CATEGORIES,
    categories,
  };
};

export const errorFetchingCategories = () => {
  return {
    type: ERROR_FETCHING_CATEGORIES,
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(startFetchingCategories());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 2000);

      let res = await debouncedFetchCategories("/cms/categories");

      dispatch(
        successFetchingCategories({
          categories: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingCategories());
    }
  };
};
