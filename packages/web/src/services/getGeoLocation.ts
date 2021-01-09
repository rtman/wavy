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
    if (process.env.REACT_APP_IP_IFY_API_KEY === undefined) {
      throw new Error('getGeoLocation - REACT_APP_IP_IFY_API_KEY not set');
    }
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_IFY_API_KEY}&ipAddress=${ipAddress}`,
      {
        method: 'get',
      }
    );

    if (response) {
      // FIXME: fix type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const body: IpIfyGeoLocationResponse = await response.json();

      if (body.location) {
        return { ok: true, data: body.location };
      }
    }

    return { ok: false, data: undefined };
  } catch (error) {
    // FIXME: fix type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { ok: false, data: undefined, error };
  }
};
