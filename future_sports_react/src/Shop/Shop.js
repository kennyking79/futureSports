import React, { useState } from "react";
import StockList from './ShopItemDataBase.json';
import ErrorBoundary from "../ErrorBoundary.js";
import { Card, CardMedia, CardContent, Typography, Button, Grid, Modal, Box, IconButton, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ShopItem({ item }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = (event) => {
        event.stopPropagation();
        setOpen(false);
    }

    return (
        <Card sx={{ maxWidth: 345, margin: 'auto', backgroundColor: 'black', color: 'white' }} onClick={handleOpen}>
            <CardMedia
                component="img"
                height="140"
                image={item.image_ref}
                alt={item.item_name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.item_name}
                </Typography>
                <Typography variant="body2">
                    ${item.item_cost}
                </Typography>
            </CardContent>
            <Button variant="contained" color="primary">Add to Cart</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    bgcolor: 'background.paper', 
                    boxShadow: 24, 
                    p: 4
                }}>
                    <IconButton 
                        aria-label="close" 
                        onClick={handleClose}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img src={item.image_ref} style={{ maxWidth: '100%', maxHeight: '100%' }} alt={item.item_name} />
                </Box>
            </Modal>
        </Card>
    );
}
function Shop() {
    return (
        <ErrorBoundary>
            <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', backgroundColor: 'gray', color: 'white' }}>
                        <Typography variant="h4" gutterBottom>
                            Get all you favourite player merch here !
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            click on the merchandise images to see the full purchasable item !
                        </Typography>
                    </Paper>
            </Grid>
            <Grid container spacing={2} style={{ padding: '20px', backgroundColor: 'black' }}>
                {StockList.map(item => (
                    
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <ShopItem item={item} key={item.id}/>
                    </Grid>
                ))}
            </Grid>
        </ErrorBoundary>
    );
}

export default Shop;
