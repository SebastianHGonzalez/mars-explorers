import { create } from "axios";
import { normalize, schema } from "normalizr";

const API_KEY = "DEMO_KEY";

const axios = create({
  baseURL: "https://api.nasa.gov/mars-photos/api/v1/",
  timeout: 1000
});

export const rovers = {
  fetch: () =>
    normalizeResponse(
      axios.get("/rovers", {
        params: {
          api_key: API_KEY
        }
      })
    )
};

function normalizeResponse(axiosResponse) {
  return axiosResponse
    .then(response => response.data)
    .then(data => normalize(data, responseSchema));
}

const camera = new schema.Entity("cameras", {}, { idAttribute: "name" });

const rover = new schema.Entity("rovers", {
  cameras: [camera]
});

const photo = new schema.Entity("photos", {
  camera,
  rover
});

const responseSchema = new schema.Object({
  rovers: new schema.Array(rover),
  photos: new schema.Array(photo)
});
