import * as React from 'react';
import { Grid, Box, TextField, Stack, Button, Typography, Modal, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Add as AddIcon, DeleteOutlineRoundedIcon } from '@mui/icons-material';
import Sidebar from "../../components/Sidebar";
import { InstructorContainer, InstructorTextTitle } from "./styles";

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function InstructorFormModal({ open, handleClose }: { open: boolean; handleClose: () => void }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                    Cadastrar Aluno
                </Typography>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > :not(style)': { m: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Nome do Aluno" variant="outlined" />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', marginTop: 3 }}>
                        <Button variant="contained" color="error" onClick={handleClose}>
                            Salvar
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    );
}

export default function ListStudents() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Sidebar name="Alunos">
                <Grid container justifyContent="center">
                    <InstructorContainer>
                        <IconButton color="primary" onClick={handleOpen}>
                            <AddIcon />
                        </IconButton>
                    </InstructorContainer>
                </Grid>
                <List sx={{ width: '100%', maxWidth: 700, bgcolor: '#f8f8f8', mt: 2 }}>
                    {[1, 2, 3].map((value) => (
                        <ListItem
                            key={value}
                            disableGutters
                            secondaryAction={
                                <IconButton>
                                    <DeleteOutlineRoundedIcon />
                                </IconButton>
                            }
                        >
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={6}>
                                    <ListItemText primary={`Aluno ${value}`} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" color="textSecondary">
                                        Desenvolvimento de Sistemas
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                </List>
            </Sidebar>
            <InstructorFormModal open={open} handleClose={handleClose} />
        </>
    );
}
