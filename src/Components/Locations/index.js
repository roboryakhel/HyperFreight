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
                        <Area>Head Office:</Area>
                        <br/>
                        <CInfo>800-1701 Hollis St. Halifax, Nova Scotia</CInfo>
                        <CInfo>B3J 3M8</CInfo>
                        <CInfo>info@hyperfreightinc.com</CInfo>
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
