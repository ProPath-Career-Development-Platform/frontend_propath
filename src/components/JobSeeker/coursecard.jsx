import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import courses from "/courses.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Grid } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import { CardOverflow, CardActions } from "@mui/joy";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
export default function CourseCard({
  title,
  company,
  content,
  location,
  type,
  img,
  slot,
}) {
  const Navigate = useNavigate();
  const columns = Math.ceil(Math.sqrt(content.length));
  const coursepage = () => {
    alert("hello");
    Navigate("/JobSeeker/courses/course/", { state: { title } });
  };

  if (type == 1) {
    return (
      <Box
        sx={{
          width: 350,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "block",
            left: "500px",
            top: "-24px",
            bottom: "-24px",
            // Comment out or remove the following code to eliminate the text
            /*
          '&::before': {
            top: '4px',
            content: '"vertical"',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            content: '"horizontal"',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          */
          }}
        />
        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            // make the card resizable for demo

            resize: "horizontal",
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
            <img src={img} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              <BusinessIcon /> {company}
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
                sx={{ position: "absolute", right: 15 }}
              >
                <LocationOnIcon /> {location}
              </Typography>
            </Typography>
            <Typography fontSize="xl" fontWeight="lg">
              {title}
            </Typography>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="error"
              sx={{
                position: "absolute",
                top: "15px",
                right: "15px",
                backgroundColor: "red",
                color: "white",
                padding: "4px 8px",
                borderRadius: "4px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": {
                    transform: "scale(1)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                  },
                  "50%": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  },
                  "100%": {
                    transform: "scale(1)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                  },
                },
              }}
            >
              {slot} slots remaining
            </Typography>

            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 1.5,
                my: 1.5,
                display: "flex",
                gap: 2,
                height: 100,
                "& > div": { flex: 1 },
              }}
            >
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
              >
                Skills you will gain:
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: `repeat(${columns}, 1fr)`, // Dynamic columns based on the number of skills
                    },
                    gap: 1,
                  }}
                >
                  {content.map((skill, index) => (
                    <Typography key={index} component="span" display="block">
                      <FiberManualRecordIcon />
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </Typography>
            </Sheet>
            <Box sx={{ display: "flex", gap: 1.5, marginBottom: "15px" }}>
              <div>
                <Typography sx={{ fontSize: "12px" }}>
                  <GroupIcon /> 12 Users Enrolled
                </Typography>
              </div>

              <Button
                sx={{ position: "absolute", right: "15px" }}
                onClick={coursepage}
              >
                Enroll
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  } else {
    return (
      <Card
        data-resizable
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%", // Full width for list view

          resize: "horizontal",
          "--icon-size": "60px", // Adjust icon size proportionally
          padding: 2,
          gap: 2,
          margin: "20px",
          border: "1px solid #ccc",
          position: "relative",
          maxHeight: "25%", // Optional border for better distinction
        }}
      >
        <Typography
          level="body-sm"
          fontWeight="lg"
          textColor="error"
          sx={{
            position: "absolute",
            top: "0px",
            right: "2px",
            backgroundColor: "red",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              },
              "50%": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              },
              "100%": {
                transform: "scale(1)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              },
            },
          }}
        >
          {slot} slots remaining
        </Typography>

        <CardOverflow sx={{ top: "8px" }}>
          <AspectRatio
            variant="outlined"
            color="warning"
            ratio="1"
            sx={{
              m: "auto",
              borderRadius: "50%",
              width: "var(--icon-size)",
              boxShadow: "sm",

              position: "relative",
            }}
          >
            <div>
              <img src={img} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginLeft: "20px",
            position: "relative",
            top: "10px",
          }}
        >
          <Typography level="title-lg">
            {title}
            <BusinessIcon sx={{ marginLeft: "30px" }} /> {company}
            <LocationOnIcon sx={{ marginLeft: "25px" }} /> {location}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            {content.map((skill, index) => (
              <Typography key={index} component="span" display="block">
                <FiberManualRecordIcon sx={{ fontSize: "small" }} />
                {skill}
              </Typography>
            ))}
          </Box>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "4px",
            }}
          >
            <Button
              variant="solid"
              sx={{
                maxWidth: "20%",
                position: "absolute",
                right: "0px",
                bottom: "4px",
                backgroundColor: "blue",
              }}
            >
              Apply Now{" "}
              <ArrowRightAltIcon
                sx={{ marginLeft: " 3px " }}
              ></ArrowRightAltIcon>
            </Button>
          </CardActions>
        </Box>
      </Card>
    );
  }
}
