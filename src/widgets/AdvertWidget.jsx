import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>

            <Typography align="center" color={dark} variant="h5" fontWeight="500">
                Sponsored
            </Typography>

            <img
                width="100%"
                height="auto"
                alt="advert"
                src={require("./gemstones.jpg")}
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <Typography align="center" color={main}>The Righteous Gemstones</Typography>
            <Typography align="center" color={medium} m="0.5rem 0">
                Are you feeling lost, hopeless, or just plain out of luck?
                From lost faith to lost car keys, no problem is too big
                or too small for the Gemstones to handle. Contact us now!
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;