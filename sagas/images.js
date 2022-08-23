import { put, call, takeEvery, all } from 'redux-saga/effects';
import { FETCH_IMAGE_LIST, FETCH_IMAGE_DETAILS } from "../constants";
import apiHelper from '../apiHelper'

import {
  fetchImageListSuccess,
  fetchImageListFailure,
  fetchImageDetailsSuccess,
  fetchImageDetailsFailure,
} from '../actions/imageAction';

function* fetchImages(action) {
  try {
      const res = yield call(apiHelper.fetchImages, action.payload)
      yield put(fetchImageListSuccess(res.data))
  } catch (error) {
      yield put(fetchImageListFailure(error))
  }
}

function* fetchImageDetails(action) {
  try {
      const res = yield call(apiHelper.fetchImageDetails, action.payload)
      yield put(fetchImageDetailsSuccess(res.data))
  } catch (error) {
      yield put(fetchImageDetailsFailure(error))
  }
}

export default function* imagesSaga() {
  yield all([
      takeEvery(FETCH_IMAGE_LIST, fetchImages),
      takeEvery(FETCH_IMAGE_DETAILS, fetchImageDetails),
  ])
}
