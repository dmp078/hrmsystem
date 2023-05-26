import React, { memo, useRef, useState } from "react";
import { logoEngland, logoHR, logoVN } from "../../assets/images";
import { FormattedMessage } from "react-intl";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { INTL_ACTIONS } from "../../redux/actions/intl/actions";
import { LANGUAGES } from "../../configs/intl/languages/languages";
import { RootState } from "../../redux/store";
import { onLogout } from "../../services/auth/logout";
import { Link } from "react-router-dom";
import { ROUTES } from "../../configs/routes/ROUTES";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { updateLang } from "../../services/intl/updateLang";

const Navbar = () => {
  const dispatch = useDispatch();
  const refModalProfile = useRef(null);
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const lang = useSelector((state: RootState) => state.intl.lang);

  const handleUpdateLanguage = (language: string) => {
    updateLang(language);
  };

  const handleLogout = () => {
    setShowModal(false);
    onLogout();
  };

  useOnClickOutside(refModalProfile, () => setShowModalProfile(false));

  return (
    <div className="h-10 bg-white px-6 fixed top-0 w-full flex justify-between shadow-md z-50">
      <div className="flex gap-2">
        <img src={logoHR} className="w-6" alt="" />
        <div className="my-auto font-semibold">
          <FormattedMessage id="auth.hr.management.system" />
        </div>
      </div>

      <div className="flex gap-4">
        <Dropdown className="my-auto">
          <Dropdown.Toggle className="py-0 my-auto" style={{ backgroundColor: "#F1F3F5", outline: "none" }} variant="">
            <FormattedMessage id={`language.${lang}`} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <div className="flex gap-2" onClick={() => handleUpdateLanguage(LANGUAGES.ENGLISH)}>
                <img src={logoEngland} className="w-6" alt="" />
                <FormattedMessage id={`language.${LANGUAGES.ENGLISH}`} />
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="flex gap-2" onClick={() => handleUpdateLanguage(LANGUAGES.VIETNAM)}>
                <img src={logoVN} className="w-6" alt="" />
                <FormattedMessage id={`language.${LANGUAGES.VIETNAM}`} />
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="relative flex">
          <div
            onClick={() => setShowModalProfile(true)}
            className="w-7 h-7 cursor-pointer rounded-full bg-orange-500 my-auto"
          />

          {showModalProfile && (
            <div
              ref={refModalProfile}
              className="bg-white rounded-b-xl flex flex-col absolute px-4 pt-4 pb-6 right-2 top-11"
            >
              <div className="flex gap-2 mb-6">
                <div className="w-14 h-14 rounded-full bg-orange-500 mx-auto my-auto" />
                <h3 className="my-auto text-md">Phuong</h3>
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <h3 className="my-auto text-sm">Sew Department</h3>
                <h3 className="my-auto text-sm">NIK: PGA0047</h3>
              </div>

              <Button onClick={() => setShowModal(true)} className="w-full mb-2">
                <FormattedMessage id="auth.signout" />
              </Button>

              <a href={ROUTES.settings} className="text-[#0091FF] no-underline mx-auto">
                <FormattedMessage id="auth.change.password" />
              </a>
            </div>
          )}

          <Modal show={showModal}>
            <Modal.Body>
              <FormattedMessage id="confirm.sign.out" />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)} variant="secondary">
                {<FormattedMessage id="close" />}
              </Button>
              <Button onClick={handleLogout} variant="primary">
                {<FormattedMessage id="confirm" />}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
