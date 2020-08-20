import { config } from 'config';

export interface IpifyLocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
interface IpIfyGeoLocationResponse {
  ip: string;
  location: IpifyLocation;
}

export const getGeoLocation = async (ipAddress: string) => {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${config.IP_IFY_API_KEY}&ipAddress=${ipAddress}`,
      {
        method: 'get',
      }
    );

    if (response) {
      const body: IpIfyGeoLocationResponse = await response.json();
      if (body.location) {
        return { ok: true, data: body.location };
      }
    }
    return { ok: false, data: undefined };
  } catch (error) {
    return { ok: false, data: undefined, error };
  }
};
