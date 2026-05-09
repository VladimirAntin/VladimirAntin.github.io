type ContactPayload = Record<string, string>;

const sendMessage = (data: ContactPayload) => {
  const body = new URLSearchParams(data);
  return fetch(
    'https://script.google.com/macros/s/AKfycbyeL-Jznd_db6zJ5nWI7_KTp5aItN02WTkCRsZCIWQrt-Yo2ndTQ4wSTHqNGYayCqA/exec',
    {
      method: 'post',
      body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  ).then(() => 'done' as const);
};

export {sendMessage};
