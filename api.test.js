const {
  getUsers,
  getPosts,
  getComments,
  getPhotos,
  getTodos,
} = require("./api");

test("Get Users", async () => {
  try {
    const response = await getUsers();
    expect(response.data).toHaveLength(10);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.headers).toBeTruthy();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("Get Posts", async () => {
  try {
    const response = await getPosts();
    expect(response.data).toHaveLength(100);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data[0].title).toBe(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
    expect(response.headers).toBeTruthy();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("Get Comments", async () => {
  try {
    const response = await getComments();
    expect(response.data).toHaveLength(500);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data[0].email).toBe("Eliseo@gardner.biz");
    expect(response.headers).toBeTruthy();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("Get Photos", async () => {
  try {
    const response = await getPhotos();
    expect(response.data).toHaveLength(5000);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data[0].url).toBe("https://via.placeholder.com/600/92c952");
    expect(response.headers).toBeTruthy();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("Get Todos", async () => {
  try {
    const response = await getTodos();
    expect(response.data).toHaveLength(200);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data[0].title).toBe("delectus aut autem");
    expect(response.headers).toBeTruthy();
  } catch (e) {
    expect(e).toMatch("error");
  }
});
