import imageCompression from "browser-image-compression";
import { ChangeEvent } from "react";

/**
 * \# 이미지 압축 후 압축된 이미지의 Promise 반환
 *
 * e.g. <input type="file" accept="image/*" onChange={(ev) => compressImage(ev).then((img) => ...)}/>
 * @param ev input의 onChange 이벤트
 * @returns 압축된 이미지 파일의 Promise
 */
export const compressImage = async (ev: ChangeEvent<HTMLInputElement>) => {
  if (!ev.target.files) return; //> 에러 방지 1
  const file = ev.target.files[0];
  if (!file) return; //> 에러 방지 2

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 250,
    useWebWorker: true,
    fileType: "image/jpeg",
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.log(error);
  }
};
