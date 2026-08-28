import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";
import volumeService from "@/services/volumeService";
import { useEffect, useState } from "react";

function AJIS() {
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const latestVolume = volumes?.length > 0 ? volumes[0] : null;

  useEffect(() => {
    async function fetchVolumes() {
      setLoading(true);
      setError(null);
      try {
        // Fetch only volumes with status "1" (active volumes)
        const response = await volumeService.getVolumes(null, { status: "1" });
        if (response.success) {
          setVolumes(response.data);
        } else {
          setError(response.error || "Failed to load volumes.");
        }
      } catch (_) {
        setError("Failed to load volumes.");
      } finally {
        setLoading(false);
      }
    }
    fetchVolumes();
  }, []);
  return (
    <Container className="py-10 md:py-20 flex flex-nowrap flex-col md:flex-row  md:items-center gap-10 md:gap-20">
      <div className="space-y-3">
        <h1 className="relative inline-block text-5xl font-bold font-serif">
          Asian Journal of Insects (AJIS)
        </h1>
        <Separator />
        <p className="leading-relaxed text-lg">
          As part of our commitment to advancing scientific research and
          knowledge exchange, the Philippine Coleopterists Society, Inc.
          publishes the Asian Journal of Insect Science (AJIS) (Online ISSN:
          3155-6671), the official scientific journal of the Society
        </p>
      </div>
      <div className="md:w-1/3 mb-6 md:mb-0">
        <p className="mb-4 font-serif text-xl md:text-xl font-semibold">
          Vol. {latestVolume.volumeNo} No. {latestVolume.seriesNo} (
          {latestVolume.year}): {latestVolume.month}
        </p>
        {latestVolume.banner ? (
          <>
            <img
              src={latestVolume.banner}
              alt={`Vol. ${latestVolume.volumeNo} No. ${latestVolume.seriesNo} Banner`}
              className="max-h-[280px] object-contain rounded-lg shadow-lg"
            />
            <p className="mt-3 font-serif text-gray-500 font-medium">
              <b>DOI:</b>{" "}
              <a href={latestVolume.doi}>
                <u>{latestVolume.doi}</u>
              </a>
            </p>
            <p className="text-gray-500 font-serif text-sm">
              <b>Published:</b>{" "}
              {new Date(latestVolume.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
              })}
            </p>
          </>
        ) : (
          <div className="mx-auto max-h-[360px] w-full bg-gray-200 flex items-center justify-center rounded-lg text-gray-400 h-[180px] md:h-[360px]">
            No banner image available
          </div>
        )}
      </div>
    </Container>
  );
}

export default AJIS;
