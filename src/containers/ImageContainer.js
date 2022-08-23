import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchImageList,
    fetchImageDetails,
} from '../../actions/imageAction';
import ImageComponent from '../components/ImageComponent';
import ImageHeader from '../components/ImageHeader';


const ImageContainer = () => {

  const [page, setPage] = useState(1)
  const [imageRecords, setImageRecords] = useState([])
  const [showDetails, setDetails] = useState(false)

  const dispatch = useDispatch();
  const { imageList, imageDetails } = useSelector((state) => state.imageReducer);

  useEffect(() => {
    dispatch(fetchImageList({ page: 1, limit: 20}))
    // dispatch(fetchImageDetails({ id: 0 }))
  },[])

  useEffect(() => {
    setImageRecords([...imageRecords, ...imageList])
  },[imageList])

  const handleImageList = () => {
    setTimeout(() => {
      dispatch(fetchImageList({ page: page + 1, limit: 20}))
      setPage(page+1)
    }, 1000)
  }

  const handleImageInfo = (id) => {
    dispatch(fetchImageDetails({ id: id }))
    setDetails(true)
  }

  const handleClose = () => {
    setDetails(false)
  }

  return (
    <>
      <ImageHeader />
      <ImageComponent
        imageList={imageRecords}
        imageDetails={imageDetails}
        handleImageList={handleImageList}
        handleImageInfo={handleImageInfo}
        showDetails={showDetails}
        setDetails={setDetails}
        handleClose={handleClose}
      />
    </>
  )
};

export default ImageContainer;
