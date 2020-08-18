interface IpIfyGetIp {
  ip: string;
}
export const getIpAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');

    if (response) {
      const body: IpIfyGetIp = await response.json();
      if (body.ip) {
        return { ok: true, data: body };
      }
    }
    return { ok: false, data: undefined };
  } catch (error) {
    return { ok: false, data: undefined, error };
  }
};
