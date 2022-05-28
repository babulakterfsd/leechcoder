import {
    Avatar,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import {
    Add as AddIcon,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";
  import { Box } from "@mui/system";
  
  const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  const StyledBox = styled(Box)(({theme}) => ({
    width: '400px',
    height: '280px',
    background: '#fff',
    color: '#000',
    borderRadius: '20px',
    padding: '30px 30px 320px 30px',
    [theme.breakpoints.down("sm")] : {
      margin: '0 10px',
  }
}))
  
  const Add = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Tooltip
          onClick={(e) => setOpen(true)}
          title="Delete"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <SytledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBox>
            <Typography variant="h6" color="gray" textAlign="center" mb={2}>
              Create post
            </Typography>
            <UserBox>
              <Avatar
                src="https://i.ibb.co/PDnnXFK/babulakter.jpg"
                sx={{ width: 30, height: 30 }}
              />
              <Typography fontWeight={500} variant="span">
                Babul Akter
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </StyledBox>
        </SytledModal>
      </>
    );
  };
  
  export default Add;