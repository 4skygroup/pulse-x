import React, { useEffect, useRef, useState } from "react";
import "./app.css";
import { useTranslation } from "react-i18next";

interface Location {
  id: string | number;
  city: string;
  country: string;
  label: string;
  agent: string;
  phone: string;
  timezone: string;
  lat: number;
  lng: number;
}

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  from: string;
  to: string;
}

// À adapter selon le type réel exporté par ton fichier locations

const locations: Location[] = [
  {
    id: 1,
    city: "Paris",
    country: "France",
    lat: 48.8566,
    lng: 2.3522,
    agent: "Sophie Dubois",
    phone: "+33 6 65 45 51 65",
    label: "Hub d’innovation",
    timezone: "Europe/Paris",
  },
  {
    id: 2,
    city: "New York",
    country: "USA",
    lat: 40.7128,
    lng: -74.006,
    agent: "John Doe",
    phone: "+1 555 123 456",
    label: "Head Office",
    timezone: "America/New_York",
  },
  {
    id: 3,
    city: "London",
    country: "UK",
    lat: 51.5074,
    lng: -0.1278,
    agent: "James Wilson",
    phone: "+44 20 7123 4567",
    label: "Financial Tech Hub",
    timezone: "Europe/London",
  },
  {
    id: 4,
    city: "Berlin",
    country: "Germany",
    lat: 52.52,
    lng: 13.405,
    agent: "Klaus Muller",
    phone: "+49 30 12345678",
    label: "Tech Innovation",
    timezone: "Europe/Berlin",
  },
  {
    id: 5,
    city: "Amsterdam",
    country: "Netherlands",
    lat: 51.5074,
    lng: -0.1278,
    agent: "Emma Van Berg",
    phone: "+31 20 1234567",
    label: "Digital Solutions Hub",
    timezone: "Europe/Amsterdam",
  },
];

const typedLocations = locations as Location[];

const locationArcs: ArcData[] = typedLocations.map((location, index) => {
  const nextLocation = typedLocations[(index + 1) % typedLocations.length];

  return {
    startLat: location.lat,
    startLng: location.lng,
    endLat: nextLocation.lat,
    endLng: nextLocation.lng,
    from: location.city,
    to: nextLocation.city,
  };
});

interface Dimensions {
  width: number;
  height: number;
}

export default function GlobeMap(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // react-globe.gl ne fournit pas toujours des types complets
  interface GlobeControls {
    autoRotate: boolean;
    autoRotateSpeed: number;
    enableDamping: boolean;
    dampingFactor: number;
  }

  interface GlobeInstance {
    controls: () => GlobeControls;
    pointOfView: (
      pov: { lat: number; lng: number; altitude: number },
      transitionMs?: number,
    ) => void;
  }

  const globeRef = useRef<GlobeInstance | null>(null);

  const [Globe, setGlobe] = useState<React.ComponentType<
    Record<string, unknown>
  > | null>(null);

  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 500,
  });

  const [selected, setSelected] = useState<Location | null>(
    typedLocations[0] ?? null,
  );

  const [time, setTime] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    import("react-globe.gl").then((module) => {
      if (isMounted) {
        setGlobe(() => module.default);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const updateDimensions = (): void => {
      if (!containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();

      setDimensions({
        width: Math.round(rect.width),
        height: Math.round(rect.height || 500),
      });
    };

    updateDimensions();

    const observer = new ResizeObserver(updateDimensions);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (selected) {
        const currentTime = new Date().toLocaleTimeString("fr-FR", {
          timeZone: selected.timezone,
        });

        setTime(currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [selected]);

  const handleGlobeReady = (): void => {
    if (!globeRef.current) {
      return;
    }

    const controls = globeRef.current.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.12;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    globeRef.current.pointOfView(
      {
        lat: 20,
        lng: 20,
        altitude: 2.2,
      },
      0,
    );
  };

  const setAutoRotate = (enabled: boolean): void => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = enabled;
    }
  };

  const selectLocation = (location: Location): void => {
    setSelected(location);
    setAutoRotate(false);

    if (globeRef.current) {
      globeRef.current.pointOfView(
        {
          lat: location.lat,
          lng: location.lng,
          altitude: 1.45,
        },
        900,
      );
    }
  };

  const createMarker = (location: Location): HTMLButtonElement => {
    const marker = document.createElement("button");

    marker.type = "button";
    marker.className = "globe-marker";
    marker.title = location.city;
    marker.setAttribute("aria-label", `Voir ${location.city}`);

    marker.innerHTML = `<span></span><strong>${location.city}</strong>`;

    marker.addEventListener("click", (event) => {
      event.stopPropagation();
      selectLocation(location);
    });

    marker.addEventListener("mouseenter", () => setAutoRotate(false));

    marker.addEventListener("mouseleave", () => setAutoRotate(true));

    marker.addEventListener("focus", () => setAutoRotate(false));

    marker.addEventListener("blur", () => setAutoRotate(true));

    return marker;
  };
  const { t } = useTranslation();
  return (
    <div className="globe-container" ref={containerRef}>
      {Globe && dimensions.width > 0 ? (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          // backgroundColor="#222424"
          backgroundImage="linear-gradient(115deg, #2a2d2f 0%, #242729 15%, #1f2224 35%, #1b1e20 55%, #15181a 75%, #0f1215 100%)"
          onGlobeReady={handleGlobeReady}
          pointsData={typedLocations}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "#00ffff"}
          pointRadius={(point: Location) =>
            point.id === selected?.id ? 1 : 0.7
          }
          pointAltitude={(point: Location) =>
            point.id === selected?.id ? 0.04 : 0.02
          }
          pointResolution={18}
          htmlElementsData={typedLocations}
          htmlLat="lat"
          htmlLng="lng"
          htmlAltitude={0.05}
          htmlElement={createMarker}
          arcsData={locationArcs}
          arcColor={() => ["#00ffff", "#ffffff"]}
          arcDashLength={0.5}
          arcDashGap={0.2}
          arcDashAnimateTime={2000}
          onPointHover={(point: Location | null) => setAutoRotate(!point)}
          onPointClick={selectLocation}
        />
      ) : (
        <div className="globe-loading">Chargement du globe...</div>
      )}

      {selected && (
        <div className="card">
          <div className="card-header">
            <h2>{selected.city}</h2>

            <div className="time">{time}</div>
          </div>

          <p className="country">{selected.country}</p>

          <div className="badge">{selected.label}</div>

          <div className="agent">
            <span className="uppercase">{t("locations.agent")}</span>
            <strong>{selected.agent}</strong>
            <p>{selected.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
}
// import React, { useEffect, useRef, useState } from "react";
// import locations from "../../utils/constants/locations";
// import "./app.css";

// const locationArcs = locations.map((location, index) => {
//   const nextLocation = locations[(index + 1) % locations.length];

//   return {
//     startLat: location.lat,
//     startLng: location.lng,
//     endLat: nextLocation.lat,
//     endLng: nextLocation.lng,
//     from: location.city,
//     to: nextLocation.city,
//   };
// });

// export default function GlobeMap() {
//   const containerRef = useRef(null);
//   const globeRef = useRef(null);
//   const [Globe, setGlobe] = useState(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 500 });
//   const [selected, setSelected] = useState(locations[0]);
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     let isMounted = true;

//     import("react-globe.gl").then((module) => {
//       if (isMounted) {
//         setGlobe(() => module.default);
//       }
//     });

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   useEffect(() => {
//     if (!containerRef.current) {
//       return;
//     }

//     const updateDimensions = () => {
//       const rect = containerRef.current.getBoundingClientRect();
//       setDimensions({
//         width: Math.round(rect.width),
//         height: Math.round(rect.height || 500),
//       });
//     };

//     updateDimensions();

//     const observer = new ResizeObserver(updateDimensions);
//     observer.observe(containerRef.current);

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (selected) {
//         const t = new Date().toLocaleTimeString("fr-FR", {
//           timeZone: selected.timezone,
//         });
//         setTime(t);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [selected]);

//   const handleGlobeReady = () => {
//     if (!globeRef.current) {
//       return;
//     }

//     const controls = globeRef.current.controls();
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 0.12;
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.08;
//     globeRef.current.pointOfView({ lat: 20, lng: 20, altitude: 2.2 }, 0);
//   };

//   const setAutoRotate = (enabled) => {
//     if (globeRef.current) {
//       globeRef.current.controls().autoRotate = enabled;
//     }
//   };

//   const selectLocation = (location) => {
//     setSelected(location);
//     setAutoRotate(false);

//     if (globeRef.current) {
//       globeRef.current.pointOfView(
//         { lat: location.lat, lng: location.lng, altitude: 1.45 },
//         900,
//       );
//     }
//   };

//   const createMarker = (location) => {
//     const marker = document.createElement("button");
//     marker.type = "button";
//     marker.className = "globe-marker";
//     marker.title = location.city;
//     marker.setAttribute("aria-label", `Voir ${location.city}`);
//     marker.innerHTML = `<span></span><strong>${location.city}</strong>`;
//     marker.addEventListener("click", (event) => {
//       event.stopPropagation();
//       selectLocation(location);
//     });
//     marker.addEventListener("mouseenter", () => setAutoRotate(false));
//     marker.addEventListener("mouseleave", () => setAutoRotate(true));
//     marker.addEventListener("focus", () => setAutoRotate(false));
//     marker.addEventListener("blur", () => setAutoRotate(true));
//     return marker;
//   };

//   return (
//     <div className="globe-container" ref={containerRef}>
//       {Globe && dimensions.width > 0 ? (
//         <Globe
//           ref={globeRef}
//           width={dimensions.width}
//           height={dimensions.height}
//           globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
//           bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
//           backgroundColor="rgba(0,0,0,0)"
//           onGlobeReady={handleGlobeReady}
//           pointsData={locations}
//           pointLat="lat"
//           pointLng="lng"
//           pointColor={() => "#00ffff"}
//           pointRadius={(point) => (point.id === selected?.id ? 1 : 0.7)}
//           pointAltitude={(point) => (point.id === selected?.id ? 0.04 : 0.02)}
//           pointResolution={18}
//           htmlElementsData={locations}
//           htmlLat="lat"
//           htmlLng="lng"
//           htmlAltitude={0.05}
//           htmlElement={createMarker}
//           arcsData={locationArcs}
//           arcColor={() => ["#00ffff", "#ffffff"]}
//           arcDashLength={0.5}
//           arcDashGap={0.2}
//           arcDashAnimateTime={2000}
//           onPointHover={(point) => setAutoRotate(!point)}
//           onPointClick={selectLocation}
//         />
//       ) : (
//         <div className="globe-loading">Chargement du globe...</div>
//       )}

//       {selected && (
//         <div className="card">
//           <div className="card-header">
//             <h2>{selected.city}</h2>

//             <div className="time">{time}</div>
//           </div>

//           <p className="country">{selected.country}</p>

//           <div className="badge">{selected.label}</div>

//           <div className="agent">
//             <span>AGENT LOCAL</span>
//             <strong>{selected.agent}</strong>
//             <p>{selected.phone}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
