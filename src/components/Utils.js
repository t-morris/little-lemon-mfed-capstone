function waitForFetchAPI() {
  return new Promise((resolve) => {
    const check = () => {
      if (window.fetchAPI) {
        resolve(window.fetchAPI);
      } else {
        setTimeout(check, 100);
      }
    };

    if (document.readyState === "complete") {
      check();
    } else {
      window.addEventListener("load", check);
    }
  });
}

export async function fetchAvailableTimes(date) {
  const fetchAPI = await waitForFetchAPI();
  return fetchAPI(date);
}

export async function initializeTimes() {
  const today = new Date();
  const times = await fetchAvailableTimes(today);
  return times;
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "updateTimes":
      return action.payload;
    default:
      return state;
  }
}

function waitForSubmitAPI() {
  return new Promise((resolve) => {
    const check = () => {
      if (window.submitAPI) {
        resolve(window.submitAPI);
      } else {
        setTimeout(check, 100);
      }
    };

    if (document.readyState === "complete") {
      check();
    } else {
      window.addEventListener("load", check);
    }
  });
}

export async function submitFormData(formData) {
  const submitAPI = await waitForSubmitAPI();
  try {
    const result = await submitAPI(formData);
    return result;
  } catch (error) {
    console.error("Error calling submitAPI:", error);
    return false;
  }
}