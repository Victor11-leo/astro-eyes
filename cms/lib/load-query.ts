// ./src/sanity/lib/load-query.ts
import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

const visualEditingEnabled = 'true'
const token = 'skQngNgR8IdGAUOLEp3S9vpUPW7irnzWmjhIyCFh8da0qs6olUTM77FMSM3RRkwk8idHveeirNIKRv4x7GUgf7xTdVkkblPeLwqv8McnnehMyQ1sQfYR1Rvf0S5mARiDCHqaUbYK2Vamruka5uHmGD0CG3QPUjQUcM7YtxrJ4MHqIaV4cm6o'

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {

    if (visualEditingEnabled && !token) {
        throw new Error(
          "The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing.",
        );
    }

    const perspective = visualEditingEnabled ? "previewDrafts" : "published";

  const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    { 
        filterResponse: false,
        perspective,
        resultSourceMap: visualEditingEnabled ? "withKeyArraySelector" : false,
        stega: visualEditingEnabled,
        ...(visualEditingEnabled ? { token } : {}),
    }
  );

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}