import { NextResponse } from "next/server";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: Request) {
  const { fileName, fileType, filePath } = await request.json();

  try {
    const putCommand = new PutObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Key: filePath,
      ContentType: fileType,
    });

    const uploadUrl = await getSignedUrl(s3Client, putCommand, {
      expiresIn: 3600, // 1 hour for upload
    });

    const getCommand = new GetObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Key: filePath,
    });

    const sharableLink = await getSignedUrl(s3Client, getCommand, {
      expiresIn: 172800, // 2 days for sharable link
    });

    return NextResponse.json({ uploadUrl, sharableLink });
  } catch (error) {
    console.error("Error generating presigned URLs:", error);
    return NextResponse.json(
      { error: "Error generating presigned URLs" },
      { status: 500 }
    );
  }
}
