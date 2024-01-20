export async function base64Maker(file: Blob | MediaSource) {
  let url = URL.createObjectURL(file);
  return url;
}
