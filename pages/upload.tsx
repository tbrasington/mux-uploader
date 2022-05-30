import { styled } from "@stitches/react";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Bubble } from "../components/Bubble";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import fetch from "unfetch";
import useSwr from "swr";
import * as UpChunk from "@mux/upchunk";
import Router from "next/router";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: `0 $pageMarginX`,
  background: `$backgroundBase`,
  width: "100%",
  minHeight: "100vh",
});

export function Upload() {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    return await res.json();
  };

  const [isUploading, setIsUploading] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [uploadId, setUploadId] = useState(null);
  const [progress, setProgress] = useState<Number>(0);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, error } = useSwr(
    () => (isPreparing ? `/api/upload/${uploadId}` : null),
    fetcher,
    { refreshInterval: 5000 }
  );

  console.log("data", data);
  console.log("error", error);
  const upload = data && data.upload;

  const createUpload = async () => {
    try {
      return fetch("/api/upload", {
        method: "POST",
      })
        .then((res) => res.json())
        .then(({ id, url }) => {
          setUploadId(id);
          return url;
        });
    } catch (e) {
      console.error("Error in createUpload", e);
      setErrorMessage("Error creating upload");
    }
  };

  const startUpload = () => {
    if (inputRef && inputRef.current && inputRef.current.files) {
      setIsUploading(true);
      const upload = UpChunk.createUpload({
        endpoint: createUpload,
        file: inputRef.current.files[0],
      });

      upload.on("error", (err) => {
        if (err && err.detail) {
          setErrorMessage(err.detail.message);
        } else {
          setErrorMessage("Error uploading file");
        }
      });

      upload.on("progress", (progress) => {
        setProgress(Math.floor(progress.detail));
      });

      upload.on("success", () => {
        setIsPreparing(true);
      });
    }
  };

  useEffect(() => {
    if (upload && upload.asset_id) {
      Router.push({
        pathname: `/asset/${upload.asset_id}`,
      });
    }
  }, [upload]);
  return (
    <Container>
      <Bubble
        label="Upload a video file"
        value="Search for a file on your computer. Any mp4 or mov is good. "
      >
        {!isUploading && (
          <label>
            <Button
              onClick={() =>
                inputRef && inputRef.current && inputRef.current.click()
              }
            >
              Select video file
            </Button>
            <input type="file" onChange={startUpload} ref={inputRef} />
          </label>
        )}
      </Bubble>
    </Container>
  );
}

Upload.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Upload;
