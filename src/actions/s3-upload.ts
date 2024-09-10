import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToS3(
  file: File,
  progressCallback: (progress: number) => void
): Promise<{ url: string }> {
  const fileName = `${Date.now()}-${file.name}`;
  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
    Key: fileName,
    Body: file,
    ContentType: file.type,
  };

  const upload = new Upload({
    client: s3Client,
    params: params,
  });

  upload.on("httpUploadProgress", (progress) => {
    if (progress.loaded && progress.total) {
      const percentProgress = (progress.loaded / progress.total) * 100;
      progressCallback(percentProgress);
    }
  });

  await upload.done();

  const url = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${fileName}`;
  return { url };
}
