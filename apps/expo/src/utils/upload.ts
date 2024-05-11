import type { AxiosProgressEvent } from "axios";
import axios from "axios";

import type { ImageAssetOrString } from "../components/forms/FormImagePicker";
import type { DocumentAssetOrString } from "../components/forms/FormPdfPicker";

// interface UploadProgress {
//   isTrusted: boolean;
//   lengthComputabe: boolean;
//   loaded: number;
//   total: number;
// }

export const uploadImages = async (
  imageAssets: ImageAssetOrString[],
  useGetSignedUrl: (any: any) => Promise<any>,
  onUploadProgress: (progress: number) => void,
) => {
  if (typeof imageAssets === "string") {
    return imageAssets;
  }
  if (imageAssets.length === 0) {
    return [];
  }
  const imgLen = imageAssets.length;
  let totalProgress = 0;
  return Promise.all(
    imageAssets.map(async (imageAsset) => {
      if (typeof imageAsset === "string") {
        totalProgress += 1 / imgLen / 2;
        onUploadProgress(totalProgress);
        return imageAsset;
      }
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const randomString = Math.random().toString(36).substring(2, 7);

      const cleanFileName = imageAsset[0].fileName
        ? imageAsset[0].fileName.replace(/[^a-zA-Z0-9.]/g, "-")
        : Math.random().toString(16).slice(2);

      const newFilename = `images/${date}-${randomString}-${cleanFileName}`;

      const { data } = await useGetSignedUrl({
        variables: {
          fileType: "image/jpg",
          fileName: newFilename.substring(0, 60),
        },
      });

      const resp = await fetch(imageAsset[0].uri);
      const imageBlob = await resp.blob();

      await axios.put(data!.getSignedUrl.signedUrl, imageBlob, {
        onUploadProgress: (progress: AxiosProgressEvent) => {
          if (!progress.total) {
            return;
          }

          totalProgress += progress.loaded / progress.total / imgLen;
          onUploadProgress(totalProgress);
        },
        headers: {
          "Content-Type": "image/jpg",
        },
      });
      return newFilename;
    }),
  );
};

export const uploadPdfs = async (
  documentAssets: {
    url: DocumentAssetOrString;
    name: string;
  }[],
  useGetSignedUrl: (any: any) => Promise<any>,
  onUploadProgress: (progress: number) => void,
): Promise<{ url: string; name: string }[]> => {
  if (documentAssets.length === 0) {
    return [];
  }
  const imgLen = documentAssets.length * 2;
  let totalProgress = 0.5;
  return Promise.all(
    documentAssets.map(async ({ url: documentAsset, name }) => {
      if (typeof documentAsset === "string") {
        totalProgress += 1 / imgLen;
        onUploadProgress(totalProgress);
        return {
          url: documentAsset,
          name,
        };
      }
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const randomString = Math.random().toString(36).substring(2, 7);
      const cleanFileName = documentAsset[0].name.replace(
        /[^a-zA-Z0-9.]/g,
        "-",
      );
      let newFilename =
        `pdfs/${date}-${randomString}-${cleanFileName}`.substring(0, 40);
      newFilename += ".pdf";

      const { data } = await useGetSignedUrl({
        variables: {
          fileType: documentAsset[0].mimeType,
          fileName: newFilename,
        },
      });

      const resp = await fetch(documentAsset[0].uri);
      const imageBlob = await resp.blob();

      await axios.put(data!.getSignedUrl.signedUrl, imageBlob, {
        onUploadProgress: (progress: AxiosProgressEvent) => {
          if (!progress.total) {
            return;
          }
          totalProgress += progress.loaded / progress.total / imgLen;
          if (totalProgress !== 1) {
            onUploadProgress(totalProgress);
          }
        },
        headers: {
          "Content-Type": documentAsset[0].mimeType,
        },
      });
      return {
        url: newFilename,
        name,
      };
    }),
  );
};
