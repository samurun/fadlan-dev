const userId = 107649421;
const TOKEN_ENDPOINT = 'https://www.strava.com/oauth/token';
const ATHLETES_ENDPOINT = `https://www.strava.com/api/v3/athletes/${userId}`;

interface StravaAccessTokenResponce {
  token_type: string;
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
}

const getAccessToken = async (): Promise<StravaAccessTokenResponce> => {
  const body = JSON.stringify({
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_CLIENT_SECRET,
    refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body,
  });

  return response.json();
};

export const getActivities = async () => {
  const { access_token: accessToken } = await getAccessToken();

  const URL = `${ATHLETES_ENDPOINT}/activities?access_token=${accessToken}`;

  return fetch(URL);
};

export const getAthleteStatsActivities = async () => {
  const { access_token: accessToken } = await getAccessToken();

  const URL = `${ATHLETES_ENDPOINT}/stats?access_token=${accessToken}`;
  return fetch(URL);
};
