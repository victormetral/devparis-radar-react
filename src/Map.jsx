import { useEffect, useRef } from "react"

import L from "leaflet"
import "leaflet/dist/leaflet.css"

const Map = ({lieux, lieuSelectionne}) => {
  const mapContainerRef = useRef(null)
  const mapRef = useRef(null)
  const markerLayerRef = useRef(null)
  const markersRef = useRef(new globalThis.Map())
  const mapPanelRef = useRef(null)

useEffect(() => {
  if (mapRef.current) {
    return
  }

  mapRef.current = L.map(mapContainerRef.current).setView(
    [48.8566, 2.3522],
    11
  )

  L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }
  ).addTo(mapRef.current)

  markerLayerRef.current = L.layerGroup().addTo(mapRef.current)

  return () => {
    mapRef.current?.remove()
    mapRef.current = null
  }
}, [])
useEffect(() => {
  if (!markerLayerRef.current) {
    return
  }

    markerLayerRef.current.clearLayers()
    markersRef.current.clear()

  const bounds = []

  lieux.forEach((lieu) => {
    const latitude = lieu.xy?.lat
    const longitude = lieu.xy?.lon
    if (
  typeof latitude !== "number" ||
  typeof longitude !== "number"
) {
  return
}

const marker = L.marker([latitude, longitude])
marker.addTo(markerLayerRef.current)
markersRef.current.set(lieu, marker)
bounds.push([latitude, longitude])

marker.bindPopup(`
  <strong>${lieu.nom || "Lieu sans nom"}</strong><br>
  ${lieu.commune || ""}
`)

  })

  if (bounds.length > 0) {
    mapRef.current.fitBounds(bounds, {
        padding: [32, 32],
    })
  }

}, [lieux])

useEffect(() => {
  if (!lieuSelectionne || !mapRef.current) {
    return
  }

  const latitude = lieuSelectionne.xy?.lat
  const longitude = lieuSelectionne.xy?.lon

if (
  typeof latitude !== "number" ||
  typeof longitude !== "number"
) {
  return
}

mapPanelRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
})

mapRef.current.setView([latitude, longitude], 15)


const marker = markersRef.current.get(lieuSelectionne)
marker?.openPopup()

}, [lieuSelectionne])

  return (
    <section className="map-panel"
        ref={mapPanelRef}>
        <header className="map-panel__header">
            <h2>Carte interactive</h2>
            <p>Clique sur “Voir sur la carte” pour localiser un lieu.</p>
        </header>
      <div
        id="map"
        ref={mapContainerRef}
      ></div>
    </section>
  )
}

export default Map