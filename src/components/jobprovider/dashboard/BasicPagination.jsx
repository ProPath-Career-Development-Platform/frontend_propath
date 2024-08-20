import React from 'react';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider } from '@mui/joy/styles';
import { createTheme } from '@mui/material/styles';

const BasicPagination = ({ page, pageCount, pageChange }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#5F35AE',
                light: '#A374F9',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Pagination
                count={pageCount}
                variant="outlined"
                size="large"
                color="primary"
                page={page}
                onChange={pageChange}
            />
        </ThemeProvider>
    );
};

export default BasicPagination;
