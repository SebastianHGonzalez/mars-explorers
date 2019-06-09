import { create } from "axios";
import { normalize } from "normalizr";

import { NASA_BASE_URL, NASA_API_KEY } from "mars-explorer/config";
import schema from "mars-explorer/api/schemas";

const axios = create({
  baseURL: NASA_BASE_URL,
  timeout: 1000
});

export const rovers = {
  fetch: () =>
    normalizeResponse(
      axios.get("/rovers", {
        params: {
          api_key: NASA_API_KEY
        }
      })
    )
};

function normalizeResponse(axiosResponse) {
  return axiosResponse
    .then(response => response.data)
    .then(data => normalize(data, schema));
}
