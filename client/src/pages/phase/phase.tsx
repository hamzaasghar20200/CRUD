import { CButton, CModal, CModalBody, CModalHeader } from "@coreui/react";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {
  requestSocietyData, requestSocietyDataSuccess
} from "../../state/state/SocietyState";
export const Phase = () => {
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
    debugger
    e.preventDefault();
    let data = {
      name: isName,
      location: isLoaction,
      image: isFile,
      description: isDec,
    }
    dispatch(requestSocietyDataSuccess(data))
  }
  return (
    <>
      <div className="text-right py-4">
        <button
          className="btn btn-primary"
          onClick={() => setIsCreateSociety(!createSociety)}
        >
          Add Phase
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
                  name="Message"
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
          <div className="col-lg-4">
            <div className="card-wrapper">
              <div className="user-pic">
                <img
                  src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="name">
                <h3 className="pt-2">Lorem Ipsum</h3>
              </div>
              <div className="social-details">
                <div className="followers">
                    <p className="px-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque molestias, velit odit reprehenderit, unde obcaecati atque</p>
                  <h3 className="font-18"><span className="font-14 text-muted">Address: </span> jkas askljs aks</h3>
                </div>
              </div>
              <div className="card-btn">
                <button type="button" className="w-100">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-wrapper">
              <div className="user-pic">
                <img
                  src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="name">
                <h3 className="pt-2">Lorem Ipsum</h3>
              </div>
              <div className="social-details">
                <div className="followers">
                    <p className="px-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque molestias, velit odit reprehenderit, unde obcaecati atque</p>
                  <h3 className="font-18"><span className="font-14 text-muted">Address: </span> jkas askljs aks</h3>
                </div>
              </div>
              <div className="card-btn">
                <button type="button" className="w-100">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-wrapper">
              <div className="user-pic">
                <img
                  src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="name">
                <h3 className="pt-2">Lorem Ipsum</h3>
              </div>
              <div className="social-details">
                <div className="followers">
                    <p className="px-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque molestias, velit odit reprehenderit, unde obcaecati atque</p>
                  <h3 className="font-18"><span className="font-14 text-muted">Address: </span> jkas askljs aks</h3>
                </div>
              </div>
              <div className="card-btn">
                <button type="button" className="w-100">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
