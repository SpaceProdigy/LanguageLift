import { ToastContainer } from "react-toastify";

import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { RootContext } from "../../main";
import { useMediaQuery } from "@mui/material";

export const AlertComponent = () => {
  const { modeTheme } = useContext(RootContext);
  const screenWidth = useMediaQuery("(max-width:480px)");

  return (
    <div>
      <ToastContainer
        style={
          screenWidth && {
            width: "90%",
            marginTop: 20,
            marginLeft: 20,
          }
        }
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={modeTheme}
      />
    </div>
  );
};

AlertComponent.propTypes = {
  text: PropTypes.string,
  status: PropTypes.string,
  notify: PropTypes.func,
};
