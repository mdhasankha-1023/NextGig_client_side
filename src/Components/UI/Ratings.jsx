import { Box, Rating } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Ratings({value}) {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating name="read-only" value={value} readOnly />
        </Box>
    )
}
