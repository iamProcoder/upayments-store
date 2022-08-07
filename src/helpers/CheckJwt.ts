
const parseJwt = (token: string) => {
  try {
    return JSON.parse(window.atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const CheckJwt = (): boolean => {
    let isExpired: boolean = false;
    const lsToken: any = localStorage.getItem("token") || undefined;
    
    if (lsToken !== "undefined") {
        const decodedToken: any = parseJwt(lsToken);

        if (!decodedToken) return isExpired;
        const date = new Date(0);
        date.setUTCSeconds(decodedToken.exp);
        isExpired = date.valueOf() > new Date().valueOf();

        if (!isExpired) localStorage.removeItem("token");
    }

    return isExpired;
};

export default CheckJwt
