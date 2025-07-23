export default function logger(error: unknown) {
  if (process.env.ENVIRONMENT === "developement") console.log(error);
}
