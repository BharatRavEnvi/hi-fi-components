import { Backdrop, Box, Fade, Modal, Paper } from "@mui/material";
import React from "react";
import { CloseIcon } from "../../../../assets/svgs/svg";

const CustomModal = ({ children, open, handleClose = () => {}, ...rest }) => {
  return (
    <Modal
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
      open={open || false}
      onClose={handleClose}
      {...rest}
    >
      <Fade in={open}>
        <Box
          sx={{
            bgcolor: "background.paper",
            height: "85vh",
            overflowY: "scroll",
            maxWidth: "98vw",
            minWidth: "60vw",
            marginY: "auto",
            borderRadius: "1rem",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "flex-start",
            overflow: "hidden",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <CloseIcon onClick={handleClose} />
          </Box>

          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
