export async function addAnExpense(values, id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/expenses`,
      {
        method: "POST",
        body: JSON.stringify({ ...values, user: id }),
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      }
    );
    const addedExpense = await response.json();
    return addedExpense;
  } catch (error) {
    console.log(error);
  }
}

export async function getExpensesByUser(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/expenses/${id}`
    );
    const allExpenses = await response.json();
    return allExpenses;
  } catch (error) {
    console.log(error);
  }
}
