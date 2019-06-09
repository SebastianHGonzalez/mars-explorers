import { schema } from "normalizr";

export const camera = new schema.Entity("cameras", {}, { idAttribute: "name" });

export const rover = new schema.Entity("rovers", {
  cameras: [camera]
});

export const photo = new schema.Entity("photos", {
  camera,
  rover
});

export const responseSchema = new schema.Object({
  rovers: new schema.Array(rover),
  photos: new schema.Array(photo)
});

export default responseSchema;
