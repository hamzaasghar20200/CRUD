import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar-template.scss";
import { AllImages } from "../../assets/All_Images.js";
export const DashboardSidebar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  function handleDropdown(e: any) {
    e.preventDefault();
    setIsDropdown(!isDropdown);
  }

  return (
    <>
      <div className="desktopView h-100">
        <div className="pt-4 pb-2 background-white sidebar-navigation sticky h-100 scroll-custom">
          <div className="userDetails">
            <div className="d-flex">
              <NavLink
                activeClassName="active"
                to="//"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={AllImages.UserImage}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt=""
                  />
                  <div className="pl-2 top-user-profile-sidebar">
                    <h3>haks Farouk</h3>
                    <p>haks Medalyc</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="dropdown-dots">
              <CDropdown className="language-panel p-0">
                <CDropdownToggle className="p-0">
                  <img src={AllImages.More} alt="" />
                </CDropdownToggle>
                <CDropdownMenu className="border-0 shadow">
                  <CDropdownItem className="dropdown-item-lang">
                    haks
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>
          </div>
          <div className="sidebar-navigation">
            <ul className="updated scroll-custom">
            <li>
                <NavLink
                  activeClassName="active"
                  className="d-flex"
                  to="/property"
                >
                  <img src={AllImages.PrescriptionsIcon} alt="" />
                  <span>
                    <span>Property</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/society">
                  <img src={AllImages.DashboardIcon} alt="" />
                  <span>
                    <span>Society</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/phase">
                  <img src={AllImages.ScheduleIcon} alt="" />
                  <span>
                    <span>Phase</span>
                  </span> 
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  className="d-flex"
                  to="/Block"
                >
                  <img src={AllImages.PrescriptionsIcon} alt="" />
                  <span>
                    <span>Block</span>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobileView">
        <div>
          <div className="sticyBottom">
            <ul className="mobileMenu">
              <li>
                <NavLink activeClassName="active" to="/patient-dashboard">
                  <img src={AllImages.DashboardIcon} alt="" />
                  <span>
                    <span>haks</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/chat">
                  <img src={AllImages.ChatIcon} alt="" />
                  <span>
                    <span>haks cha</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/appointment">
                  <img src={AllImages.ScheduleIcon} alt="" />
                  <span>
                    <span>haks appt</span>
                  </span>
                </NavLink>
              </li>
              <li onClick={() => setIsPopup(true)}>
                <img src={AllImages.More} alt="" />
                <span>
                  <span>haks mor</span>
                </span>
              </li>
            </ul>
            {isPopup && (
              <div className="bg-white border-radius-1 py-3 px-2">
                <div className="userDetails">
                  <div className="d-flex">
                    <NavLink
                      className="d-flex align-items-center"
                      activeClassName="active"
                      to="/"
                    >
                      <img
                        src={AllImages.UserImage}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt=""
                      />
                      <div className="pl-2 top-user-profile-sidebar">
                        <h3>haks Farouk</h3>
                        <p>haks Medalyc</p>
                      </div>
                    </NavLink>
                  </div>
                  <div className="dropdown-dots">
                    <CDropdown className="language-panel p-0">
                      <CDropdownToggle className="p-0">
                        <img src={AllImages.More} alt="" />
                      </CDropdownToggle>
                      <CDropdownMenu className="border-0 shadow">
                        <CDropdownItem className="dropdown-item-lang">
                          haks
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <ul>
                  <li>
                    <NavLink
                      activeClassName="active"
                      className="d-flex"
                      to="/prescription"
                    >
                      <img src={AllImages.PrescriptionsIcon} alt="" />
                      <span>
                        <span>haks</span>
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/save-list/">
                      <img src={AllImages.BookmarkIcon} alt="" />
                      <span>
                        <span>haks</span>
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/payment">
                      <img src={AllImages.BankCardIcon} alt="" />
                      <span>
                        <span>haks</span>
                      </span>
                    </NavLink>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <NavLink activeClassName="active" to="/support">
                      <img src={AllImages.Headphone} alt="" />
                      <span>
                        <span>haks</span>
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="report">
                      <img src={AllImages.Bug} alt="" />
                      <span>
                        <span>haks</span>
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
