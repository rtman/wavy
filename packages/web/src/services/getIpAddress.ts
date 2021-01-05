interface IpIfyGetIp {
  ip: string;
}
export const getIpAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');

    if (response) {
      // FIXME: fix type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const body: IpIfyGetIp = await response.json();

      if (body.ip) {
        return { ok: true, data: body };
      }
    }

    return { ok: false, data: undefined };
  } catch (error) {
    // FIXME: fix type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { ok: false, data: undefined, error };
  }
};
