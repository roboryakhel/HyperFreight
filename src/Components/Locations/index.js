import React from 'react'
import GoogleMapReact from 'google-map-react'
import {LocationPin} from './LocationPin'
import {MapOuter, MapWrapper, MapContainer, ContactInfoContainer, ContactInfo, Area, CInfo} from './LocationsElements';


export const Locations = ({ location, zoomLevel }) => {
    return (
        <>
         <MapOuter>
            <MapWrapper>
            <ContactInfoContainer>
                    <ContactInfo>
                        <Area>Locations</Area>
                        <CInfo>We are located on the hear tof blah blah blah</CInfo>
                        <br/>
                        <CInfo>290 Adelaide West, XXX XXX</CInfo>
                        <CInfo>905 583 2391</CInfo>
                        <CInfo>johndoe@email.com</CInfo>
                    </ContactInfo>
                </ContactInfoContainer>
                <MapContainer>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBnT1TRNTdWhp9chj4qlCCycouDcrTUMN0' }}
                        defaultCenter={location}
                        defaultZoom={zoomLevel}
                        >
                        <LocationPin
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
                        />
                    </GoogleMapReact>
                </MapContainer>
            </MapWrapper>
         </MapOuter>
        </>
    )
}

export default Locations
