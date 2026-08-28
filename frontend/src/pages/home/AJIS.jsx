import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";
import volumeService from "@/services/volumeService";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

function AJIS() {
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const latestVolume = volumes?.length > 0 ? volumes[0] : null;

  async function fetchVolumes() {
    setLoading(true);
    setError(null);
    try {
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

  useEffect(() => {
    fetchVolumes();
  }, []);

  return (
    <Container className="py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-center gap-14 md:gap-20">
        {/* ---------- Left: intro ---------- */}
        <div className="md:w-3/5 space-y-5">
          <p className="text-xs  font-medium tracking-[0.2em] uppercase text-[#4B5D45]">
            Official journal &middot; Philippine Coleopterists Society, Inc.
          </p>

          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#1C2620] leading-[1.1]">
            Asian Journal of Insect Science
          </h1>

          <p className="text-lg leading-relaxed text-[#3D453E]">
            As part of our commitment to advancing scientific research and
            knowledge exchange, the Philippine Coleopterists Society, Inc.
            manages and publishes the Asian Journal of Insect Science (AJIS)
            (Online ISSN: 3155-6671), the official scientific journal of the
            Society.
          </p>

          <p className=" text-xs tracking-wide text-[#8A8478]">
            ONLINE ISSN&nbsp; 3155-6671
          </p>

          {latestVolume && (
            <Link
              to={`/ajis/issues`}
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[#1C2620] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5D45] rounded-sm"
            >
              <span className="border-b border-[#1C2620] group-hover:border-[#4B5D45] group-hover:text-[#4B5D45] transition-colors">
                Read the current issue
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        {/* ---------- Right: specimen card ---------- */}
        <div className="md:w-2/5 w-full">
          {loading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-5 w-40 bg-[#E7E3D8] rounded" />
              <div className="aspect-[3/4] w-full max-w-[260px] bg-[#E7E3D8] rounded" />
              <div className="h-3 w-32 bg-[#E7E3D8] rounded" />
            </div>
          ) : error ? (
            <div className="max-w-[280px] border border-dashed border-[#C9C2B0] rounded-md p-6 text-sm text-[#8A8478] space-y-3">
              <p>{error}</p>
              <button
                onClick={fetchVolumes}
                className="inline-flex items-center gap-1.5 font-semibold text-[#1C2620] hover:text-[#4B5D45]"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Try again
              </button>
            </div>
          ) : !latestVolume ? (
            <div className="max-w-[280px] border border-dashed border-[#C9C2B0] rounded-md p-6 text-sm text-[#8A8478]">
              No published volume available yet.
            </div>
          ) : (
            <div className="max-w-[260px]">
              {/* Vol/No/Year tag, sits above the case */}
              <p className="mb-3  text-xs tracking-[0.15em] uppercase text-[#4B5D45]">
                Vol. {latestVolume.volumeNo} &middot; No.{" "}
                {latestVolume.seriesNo}
                &nbsp;&middot;&nbsp;{latestVolume.year}
              </p>

              {/* Specimen case: bordered frame with corner pins */}
              <div className="relative border border-[#C9C2B0] rounded-md p-3 bg-[#FBF9F4]">
                {[
                  "-top-1 -left-1",
                  "-top-1 -right-1",
                  "-bottom-1 -left-1",
                  "-bottom-1 -right-1",
                ].map((pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} h-2 w-2 rounded-full bg-[#A87C3F] shadow-sm`}
                  />
                ))}

                {latestVolume.banner ? (
                  <img
                    src={latestVolume.banner}
                    alt={`Vol. ${latestVolume.volumeNo} No. ${latestVolume.seriesNo} cover`}
                    className="w-full object-contain rounded-sm"
                  />
                ) : (
                  <div className="aspect-[3/4] w-full flex items-center justify-center rounded-sm bg-[#F1EEE5] text-xs text-[#8A8478]">
                    Cover unavailable
                  </div>
                )}
              </div>

              {/* Museum-label plate */}
              {/* Museum-label plate */}
              {/* <div className="mt-3 border-t border-[#D8D2C4] pt-3 space-y-1.5  text-xs text-[#5B6259]">
                {latestVolume.doi && (
                  <div className="flex gap-2">
                    <span className="uppercase tracking-wide text-[#8A8478] shrink-0">
                      DOI
                    </span>
                    <span className="truncate">
                      <a
                        href={latestVolume.doi}
                        className="underline decoration-[#C9C2B0] hover:decoration-[#4B5D45] hover:text-[#1C2620]"
                      >
                        {latestVolume.doi}
                      </a>
                    </span>
                  </div>
                )}
                <div className="flex gap-2">
                  <span className="uppercase tracking-wide text-[#8A8478] shrink-0">
                    Published
                  </span>
                  <span>
                    {new Date(latestVolume.createdAt).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "long",
                      },
                    )}
                  </span>
                </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default AJIS;
