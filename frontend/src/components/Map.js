import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import hospital from "../assets/hospital.png";
import ngo from "../assets/ngo.png";
import pet from "../assets/pet.png";
import oldAge from "../assets/oldAge.png";
import { Link } from "react-router-dom";

import { Icon } from "leaflet";
import "../App.css";
const position = [51.505, -0.09];

const HospitalIcon = new Icon({
  iconUrl: hospital,
  iconSize: [40, 40],
});
const NGOIcon = new Icon({
  iconUrl: ngo,
  iconSize: [60, 60],
});
const PetIcon = new Icon({
  iconUrl: pet,
  iconSize: [60, 60],
});
const OldAgeIcon = new Icon({
  iconUrl: oldAge,
  iconSize: [60, 60],
});
function Map() {
  return (
    <div>
      <MapContainer
        // center={[20.5937, 78.9629]}
        center={[19.096893719743967, 72.87301867005657]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[19.118489372974334, 72.84769237070836]}
          icon={HospitalIcon}
        >
          <Popup>Sanjeevni Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.097402926365827, 72.84048259291649]}
          icon={HospitalIcon}
        >
          <Popup>Bhagvati Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.13300501737811, 72.82511889968112]}
          icon={HospitalIcon}
        >
          <Popup>Kokilaben Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.125220249400012, 72.84056842352086]}
          icon={HospitalIcon}
        >
          <Popup>Lion Kartar Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.132599569769315, 72.84305751347281]}
          icon={HospitalIcon}
        >
          <Popup>Shinde Medicare</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.138447155405117, 72.83631362670448]}
          icon={HospitalIcon}
        >
          <Popup>Urology and Laproscopy Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.12996119066137, 72.86295401803125]}
          icon={HospitalIcon}
        >
          <Popup>Shakuntala Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.13637485246936, 72.83797218710289]}
          icon={HospitalIcon}
        >
          <Popup>Shraddha Vihar Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.129556070395108, 72.86676989952774]}
          icon={HospitalIcon}
        >
          <Popup>Holy Spirit Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.120789525496406, 72.87170603047608]}
          icon={HospitalIcon}
        >
          <Popup>Nakshatra Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.110798971439966, 72.86445247133392]}
          icon={HospitalIcon}
        >
          <Popup>Shakuntala Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.118649786424008, 72.87785231227619]}
          icon={HospitalIcon}
        >
          <Popup>Seven Hills Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.11808211017283, 72.88261591546012]}
          icon={HospitalIcon}
        >
          <Popup>Sagun Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.107620298746003, 72.86562143924402]}
          icon={HospitalIcon}
        >
          <Popup>Kiran Care Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.096358274879268, 72.84005737978224]}
          icon={HospitalIcon}
        >
          <Popup>Nanavati Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.086279742069337, 72.83784667350511]}
          icon={HospitalIcon}
        >
          <Popup>Surya Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.129908056268512, 72.86977044149695]}
          icon={HospitalIcon}
        >
          <Popup>Goel Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.095822546721845, 72.89889772773857]}
          icon={HospitalIcon}
        >
          <Popup>Disha Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker position={[19.1241345338177, 72.85298453051851]} icon={NGOIcon}>
          <Popup>NGO</Popup>
          <Tooltip>Aashayein Foundation</Tooltip>
        </Marker>
        <Marker
          position={[19.130784089732025, 72.83779249870113]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Suvidha NGO</Tooltip>
        </Marker>
        <Marker
          position={[19.11111846999479, 72.84890757280697]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Rural Development NGO</Tooltip>
        </Marker>

        <Marker
          position={[19.109983063685892, 72.85573111253848]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Panchsheel NGO</Tooltip>
        </Marker>

        <Marker
          position={[19.111726719965983, 72.87066565228893]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Tarang NGO</Tooltip>
        </Marker>

        <Marker
          position={[19.094937782570454, 72.8469763790944]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Kindness Welfare</Tooltip>
        </Marker>
        <Marker
          position={[19.10187237944472, 72.84182653781086]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Socio Help</Tooltip>
        </Marker>

        <Marker
          position={[19.119913676374996, 72.83950832949583]}
          icon={PetIcon}
        >
          <Popup>Pet Adoption</Popup>
          <Tooltip>Friends of Paws</Tooltip>
        </Marker>
        <Marker
          position={[19.068004190641233, 72.8391650067497]}
          icon={PetIcon}
        >
          <Popup>Pet Adoption</Popup>
          <Tooltip>YODA Rehabitation</Tooltip>
        </Marker>

        <Marker
          position={[19.129158344436004, 72.85409954620606]}
          icon={PetIcon}
        >
          <Popup>Pet Adoption</Popup>
          <Tooltip>MAA Foundation</Tooltip>
        </Marker>
        <Marker
          position={[19.100611737915614, 72.8837969637457]}
          icon={PetIcon}
        >
          <Popup>Pet Adoption</Popup>
          <Tooltip>Buffalo Cattle Shed</Tooltip>
        </Marker>

        <Marker
          position={[19.11504123484604, 72.84088155729029]}
          icon={OldAgeIcon}
        >
          <Popup>Old Age Home</Popup>
          <Tooltip>BHN Association</Tooltip>
        </Marker>
        <Marker
          position={[19.11343864123672, 72.86314831003244]}
          icon={OldAgeIcon}
        >
          <Popup>Old Age Home</Popup>
          <Tooltip>Suyash Nursing Home</Tooltip>
        </Marker>

        <Marker
          position={[19.11122042500645, 72.8331395938787]}
          icon={OldAgeIcon}
        >
          <Popup>Old Age Home</Popup>
          <Tooltip>Aarambh Aaji Healthcare</Tooltip>
        </Marker>
        <Marker
          position={[19.120961066015365, 72.85161434796963]}
          icon={OldAgeIcon}
        >
          <Popup>Old Age Home</Popup>
          <Tooltip>Carewell Nursing Home</Tooltip>
        </Marker>
        <Link to="https://www.google.com/maps/place/Navjivan+Maternity+%26+Surgical+Nursing+Home/@19.0915758,72.8574708,13.75z/data=!4m9!1m2!2m1!1sold+age+homes+in+ville+parle!3m5!1s0x3be7c9b308424569:0x80b78f430012a7ce!8m2!3d19.0973495!4d72.8493972!15sChxvbGQgYWdlIGhvbWVzIGluIHZpbGxlIHBhcmxlkgEcb2JzdGV0cmljc19neW5lY29sb2d5X2NsaW5pYw?hl=en">
          <Marker
            position={[19.100304881548656, 72.84920310381105]}
            icon={OldAgeIcon}
          >
            <Popup>Old Age Home</Popup>
            <Tooltip>Navjivan Nursing Home</Tooltip>
          </Marker>
        </Link>
      </MapContainer>
    </div>
  );
}

export default Map;
