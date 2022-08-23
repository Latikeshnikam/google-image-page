import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import imagesSaga from './sagas/images';

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
    yield all([
        imagesSaga(),
    ]);
}
