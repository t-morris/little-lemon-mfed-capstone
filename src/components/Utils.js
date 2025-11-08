export function initializeTimes() {
  return [
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
    "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
    "09:00 PM", "09:30 PM", "10:00 PM"
  ];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "dateChanged":
      // In future will be the selected date (string, e.g. "2025-11-08") but for now, ignore the date and return the same list.
      return [
        "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
        "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
        "09:00 PM", "09:30 PM", "10:00 PM"
      ];
    default:
      return state;
  }
}