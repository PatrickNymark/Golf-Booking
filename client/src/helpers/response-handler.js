const handleResponse = (response) => {
  return response.text().then(text => {
      const data = JSON.parse(text);
      if (!response.ok) {
          const error = data.message || data.error || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}

module.exports = handleResponse;