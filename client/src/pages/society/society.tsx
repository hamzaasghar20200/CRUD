import { CButton, CModal, CModalBody, CModalHeader } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  SocietyState,
   requestSocietyDataSuccess,
   requestSocietyData,
   requestCreateSocietyData
} from "../../state/state/SocietyState";
import { RootState } from "../../state/state/RootReducer";
import { Link } from "react-router-dom";
export const Society = () => {
  const { societies } = useSelector<RootState, SocietyState>(
    (state) => state.societyState
  );
  const [createSociety, setIsCreateSociety] = useState(false);
  const [isName, setIsName] = useState("");
  const [isLoaction, setIsLocation] = useState("");
  const [isFile, setIsFile] = useState("");
  const [isDec, setIsDec] = useState("");

  function handleSetImagePath(e:any){
    let file = ''
    file = e.target.files[0]
    setIsFile(file)
  }
const dispatch = useDispatch()

  function onSubmit(e:any){
    e.preventDefault();
    let data = {
      name: isName,
      location: isLoaction,
      // image: isFile,
      ownerName: isDec,
    }
    dispatch(requestCreateSocietyData(data))
    if(societies.length > 0){
      setIsCreateSociety(false);
    }
  }
  useEffect(() => {
    dispatch(requestSocietyData({}))
  }, [dispatch]);
  return (
    <>
      <div className="text-right py-4">
        <button
          className="btn btn-primary"
          onClick={() => setIsCreateSociety(!createSociety)}
        >
          Add Society
        </button>
      </div>
      {createSociety && (
        <CModal className="show fade" open={true}>
          <CModalHeader className="text-right">
            <i
              className="fa fa-times w-100 text-right cr-p"
              onClick={() => setIsCreateSociety(false)}
            ></i>
          </CModalHeader>
          <CModalBody className="text-left">
            <div className="section-form">
              <form method="post" onSubmit={onSubmit}>
                <div className="intro">
                  <h1>Add Society</h1>
                </div>
                <input type="text" onChange={(e) => setIsName(e.target.value)} placeholder="Name" name="name" />
                <input type="text" onChange={(e) => setIsLocation(e.target.value)} placeholder="Location" name="location" />
                <input
                  className="mb-3"
                  type="file"
                  onChange={handleSetImagePath}
                  name="file"
                />
                <textarea
                  placeholder="Message"
                  name="ownerName"
                  rows={10}
                  onChange={(e) => setIsDec(e.target.value)}
                ></textarea>
                <div className="text-right">
                  <input
                    type="submit"
                    className="btn btn-secondary"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </CModalBody>
        </CModal>
      )}

      <div className="container-fluid">
        <div className="row mt-5 pt-5">
          {societies.map((society, index) => (
            
          <div className="col-lg-4 mb-5 pb-lg-5" key={`skhjdhsd-${index}`}>
            <div className="card-wrapper">
              <div className="user-pic">
                <img
                  src={society.file?.name}
                  alt=""
                />
              </div>
              <div className="name">
                <h3 className="pt-2">{society.name}</h3>
              </div>
              <div className="social-details">
                <div className="followers">
                    <p className="px-3">{society.ownerName}</p>
                  <h3 className="font-18"><span className="font-14 text-muted">Address: </span> {society.address}</h3>
                </div>
              </div>
              <div className="card-btn">
                <Link to={`/society=${society.id}`}>
                <button type="button" className="w-100">Read More</button>
                </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};
