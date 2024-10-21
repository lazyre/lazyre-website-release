"use client";

import { useState } from "react";

interface UploadResult {
  url: string;
  sharableLink: string;
}

async function getPresignedUrls(
  fileName: string,
  fileType: string,
  filePath: string
): Promise<{ uploadUrl: string; sharableLink: string }> {
  const response = await fetch("/api/get-presigned-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fileName, fileType, filePath }),
  });

  if (!response.ok) {
    throw new Error("Failed to get presigned URLs");
  }

  const { uploadUrl, sharableLink } = await response.json();
  return { uploadUrl, sharableLink };
}

async function uploadToS3(
  file: File,
  filePath: string,
  progressCallback: (progress: number) => void
): Promise<UploadResult> {
  const { uploadUrl, sharableLink } = await getPresignedUrls(
    file.name,
    file.type,
    filePath
  );

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", uploadUrl);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        progressCallback(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        // The URL where the file can be accessed
        const fileUrl = uploadUrl.split("?")[0];
        resolve({ url: fileUrl, sharableLink });
      } else {
        reject(new Error("Upload failed"));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Upload failed"));
    };

    xhr.send(file);
  });
}

export function useS3Upload() {
  const [uploadProgress, setUploadProgress] = useState<{
    [key: string]: number;
  }>({});

  const upload = async (
    file: File,
    filePath: string
  ): Promise<UploadResult> => {
    try {
      const result = await uploadToS3(file, filePath, (progress) => {
        setUploadProgress((prev) => ({
          ...prev,
          [file.name]: progress,
        }));
      });
      return result;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  return { upload, uploadProgress };
}
