import {
    FETCH_IMAGE_LIST,
    FETCH_IMAGE_LIST_SUCCESS,
    FETCH_IMAGE_LIST_FAILURE,
    FETCH_IMAGE_DETAILS,
    FETCH_IMAGE_DETAILS_SUCCESS,
    FETCH_IMAGE_DETAILS_FAILURE,
} from '../constants'

export const fetchImageList = (params) => ({
  type: FETCH_IMAGE_LIST,
  payload: params
});

export const fetchImageListSuccess = (data) => ({
  type: FETCH_IMAGE_LIST_SUCCESS,
  payload: data
});

export const fetchImageListFailure = (err) => ({
  type: FETCH_IMAGE_LIST_FAILURE,
  payload: err
});

export const fetchImageDetails = (params) => ({
  type: FETCH_IMAGE_DETAILS,
  payload: params
});

export const fetchImageDetailsSuccess = (data) => ({
  type: FETCH_IMAGE_DETAILS_SUCCESS,
  payload: data
});

export const fetchImageDetailsFailure = (err) => ({
  type: FETCH_IMAGE_DETAILS_FAILURE,
  payload: err
});
