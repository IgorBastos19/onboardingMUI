import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Box,
  CardHeader,
  Button,
  Typography,
  Link,
} from "@mui/material";
import FormControle from "./Form";
import SendIcon from "@mui/icons-material/Send";

export default function CardForm(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Ocupa toda a altura da tela
      }}
    >
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 350,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          gap: 2,
          borderRadius: 6,
          boxShadow: 5,
          color: "#333",
        }}
      >
        <CardHeader
          title={props.title}
          subheader={props.subheader}
          sx={{
            textAlign: "center",
          }}
        ></CardHeader>
        <CardContent>
          <FormControle fields={props.fields}></FormControle>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            fullWidth
            href={props.HrefBotao}
          >
            {props.TextoBotao}
          </Button>
          <Typography variant="subtitle2" gutterBottom>
            {props.SubTextoBotao}
            <Link href={props.Href} target="_self" rel="noopener">
              {props.link}
            </Link>
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
}
