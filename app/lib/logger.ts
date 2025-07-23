export default function logger(error: unknown) {
  if (process.env.ENV === "development") console.log(error);
}
