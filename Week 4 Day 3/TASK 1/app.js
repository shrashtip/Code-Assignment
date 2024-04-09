// getData();

async function getData() {
  const res = await fetch(`https://dummy.restapiexample.com/api/v1/employees`);

  console.log(res.ok);

  if (!res.ok) return null;
  const data = await res.json();

  console.log(data);

  return data;
}

const data = getData();

console.log(data);
