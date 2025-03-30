"use server";

export async function action(formData: FormData) {
  if (!formData) {
    throw new Error("FormData is null or undefined");
  }

  try {
    const form = Object.fromEntries(formData.entries());
    const res = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
