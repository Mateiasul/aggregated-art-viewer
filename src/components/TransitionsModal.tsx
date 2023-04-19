import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Container, Stack, styled } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: 0,
};

export default function TransitionsModal({ isOpen, modelData, setOpen }) {
  const handleClose = () => setOpen(false);

  const StyledModal = styled(Modal)`
    .MuiBackdrop-root {
      background-color: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(7px);
    }
  `;

  return (
    <div>
      <StyledModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1000,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Stack alignItems="center" spacing={3}>
              <Image
                src={modelData?.image}
                alt="Picture of the author"
                priority
                width={800}
                height={800}
                sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "60%",
                  flexDirection: "row",
                  paddingTop: "20px",
                }}
              >
                <Typography sx={{ fontSize: "30px" }}>Artist:</Typography>
                <Typography sx={{ fontSize: "30px" }}>Dxl</Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "60%",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontSize: "30px" }}>Title:</Typography>
                <Typography sx={{ fontSize: "30px" }}>
                  {modelData?.title}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "60%",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontSize: "30px" }}>Created:</Typography>
                <Typography sx={{ fontSize: "30px" }}>
                  {modelData?.createdAt}
                </Typography>
              </Container>
            </Stack>
          </Box>
        </Fade>
      </StyledModal>
    </div>
  );
}
